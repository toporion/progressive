const express = require("express");
const router = express.Router();

// Import your middlewares (Adjust paths as necessary)
const fileUploader = require("../middlewares/FileUploader"); 
const verifyToken = require("../middlewares/VerifyToken");
const verifyRole = require("../middlewares/VerifyRole");

const { 
  createService, 
  updateService, 
  deleteService, 
  getAllServices, 
  getServiceById 
} = require("../controllers/ServiceController");

/**
 * CONFIG: Upload multiple fields
 * heroImage -> max 1
 * sectionImages -> max 100 (for all sections combined)
 */
const uploadFields = fileUploader.fields([
  { name: "heroImage", maxCount: 1 },
  { name: "sectionImages", maxCount: 100 } 
]);

// Public
router.get("/", getAllServices);
router.get("/:id", getServiceById);

// Admin Protected
router.post("/", verifyToken, verifyRole("admin"), uploadFields, createService);
router.put("/:id", verifyToken, verifyRole("admin"), uploadFields, updateService);
router.delete("/:id", verifyToken, verifyRole("admin"), deleteService);

module.exports = router;