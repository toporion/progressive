const Service = require("../models/ServiceModel");

/**
 * Helper: Map uploaded sectionImages to specific sections based on filenames.
 */
/**
 * Helper: Normalizes filenames for better matching
 * (Removes spaces, special chars, and makes lowercase)
 */
const normalizeName = (name) => {
  if (!name) return "";
  return name.toLowerCase().replace(/[^a-z0-9.]/g, "");
};

/**
 * Helper: Map uploaded sectionImages to sections.
 * NOW IMPROVED: Uses "Smart Matching" to ignore spaces/symbols issues.
 */
const mapSectionImages = (sections, uploadedFiles = []) => {
  const lookup = {};

  // 1. Build Lookup Table
  for (const f of uploadedFiles) {
    const url = f.path || f.location || f.secure_url || null;
    if (!url) continue;

    // Store by EXACT name
    const originalName = f.originalname;
    if (!lookup[originalName]) lookup[originalName] = [];
    lookup[originalName].push(url);

    // Store by NORMALIZED name (for backup matching)
    const simpleName = normalizeName(originalName);
    if (!lookup[simpleName]) lookup[simpleName] = [];
    lookup[simpleName].push(url);
  }

  console.log("--- DEBUG: Uploaded Files ---");
  console.log(Object.keys(lookup)); 

  // 2. Assign Images to Sections
  return sections.map((sec) => {
    const imageNames = Array.isArray(sec.imageNames) ? sec.imageNames : [];
    const mapped = [];

    console.log(`--- DEBUG: Processing Section "${sec.title}" ---`);
    console.log("Looking for images:", imageNames);

    for (const name of imageNames) {
      // Try 1: Exact Match
      if (lookup[name] && lookup[name].length) {
        const url = lookup[name].shift(); // Take one and remove it
        mapped.push(url);
        console.log(`  -> MATCH FOUND (Exact): ${name}`);
      } 
      // Try 2: Normalized Match (Backup)
      else {
        const simpleName = normalizeName(name);
        if (lookup[simpleName] && lookup[simpleName].length) {
          const url = lookup[simpleName].shift();
          mapped.push(url);
          console.log(`  -> MATCH FOUND (Smart): ${name} -> ${simpleName}`);
        } else {
          console.log(`  -> FAILED TO FIND: ${name}`);
        }
      }
    }

    return {
      title: sec.title,
      shortDescription: sec.shortDescription,
      images: mapped, // The found URLs
    };
  });
};

/**
 * Create a new Service
 */
const createService = async (req, res) => {
  try {
    // --- HOTFIX: Delete old indexes (Keep this for safety) ---
    try { await Service.collection.dropIndex("title_1"); } catch (e) {}
    try { await Service.collection.dropIndex("slug_1"); } catch (e) {}
    // --------------------------------------------------------

    if (!req.body.heroTitle) {
      return res.status(400).json({ success: false, message: "Hero title required" });
    }

    // 1. Parse Sections
    let sections = [];
    if (req.body.sections) {
      try {
        sections = JSON.parse(req.body.sections);
        if (!Array.isArray(sections)) sections = [];
      } catch (err) {
        return res.status(400).json({ success: false, message: "Sections must be JSON array" });
      }
    }

    // 2. Handle Images with Smart Matching
    const uploadedSectionFiles = (req.files && req.files.sectionImages) || [];
    
    // Log to VS Code terminal to see what is happening
    console.log(`Received ${uploadedSectionFiles.length} section images.`);
    
    const mappedSections = mapSectionImages(sections, uploadedSectionFiles);

    // 3. Handle Hero Image
    let heroImageUrl = null;
    if (req.files && req.files.heroImage && req.files.heroImage[0]) {
      const f = req.files.heroImage[0];
      heroImageUrl = f.path || f.location || f.secure_url;
    }

    const newService = new Service({
      heroTitle: req.body.heroTitle,
      heroSubtitle: req.body.heroSubtitle || "",
      heroImage: heroImageUrl,
      sections: mappedSections,
    });

    await newService.save();
    return res.status(201).json({ success: true, message: "Service created", data: newService });

  } catch (error) {
    console.error("createService error:", error);
    return res.status(500).json({ success: false, message: "Error creating service", error: error.message });
  }
};

/**
 * Update existing Service
 */
const updateService = async (req, res) => {
  try {
    const serviceId = req.params.id;
    const existing = await Service.findById(serviceId);
    if (!existing) return res.status(404).json({ success: false, message: "Service not found" });

    // 1. Parse Sections
    let sections = [];
    if (req.body.sections) {
      try {
        sections = JSON.parse(req.body.sections);
        if (!Array.isArray(sections)) sections = [];
      } catch (err) {
        return res.status(400).json({ success: false, message: "Sections must be valid JSON array" });
      }
    }

    // 2. Handle Images
    // Note: If you want to KEEP existing images when updating, logic needs to be more complex.
    // This logic currently REPLACES section images with new uploads if provided.
    const uploadedSectionFiles = (req.files && req.files.sectionImages) || [];
    const mappedSections = mapSectionImages(sections, uploadedSectionFiles);

    if (req.files && req.files.heroImage && req.files.heroImage[0]) {
      const f = req.files.heroImage[0];
      existing.heroImage = f.path || f.location || f.secure_url;
    }

    existing.heroTitle = req.body.heroTitle || existing.heroTitle;
    existing.heroSubtitle = req.body.heroSubtitle || existing.heroSubtitle;
    
    // Only update sections if new data is sent
    if (sections.length > 0) {
        existing.sections = mappedSections;
    }

    await existing.save();
    return res.status(200).json({ success: true, message: "Service updated", data: existing });
  } catch (error) {
    console.error("updateService error:", error);
    return res.status(500).json({ success: false, message: "Error updating service", error: error.message });
  }
};

const getAllServices = async (req, res) => {
  try {
    const services = await Service.find().sort({ createdAt: -1 });
    return res.status(200).json({ success: true, data: services });
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
};

const getServiceById = async (req, res) => {
  try {
    const service = await Service.findById(req.params.id);
    if (!service) return res.status(404).json({ success: false, message: "Not found" });
    return res.status(200).json({ success: true, data: service });
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
};

const deleteService = async (req, res) => {
  try {
    const deleted = await Service.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ success: false, message: "Not found" });
    return res.status(200).json({ success: true, message: "Service deleted" });
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
};

module.exports = { createService, updateService, getAllServices, getServiceById, deleteService };