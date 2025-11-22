const mongoose = require("mongoose");

const sectionSchema = new mongoose.Schema({
  title: { type: String, required: true },
  shortDescription: { type: String },
  images: [{ type: String }], // URLs
});

const serviceSchema = new mongoose.Schema(
  {
    heroTitle: { type: String, required: true },
    heroSubtitle: { type: String },
    heroImage: { type: String },
    sections: { type: [sectionSchema], default: [] }, // 0..4
  },
  { timestamps: true }
);

module.exports = mongoose.model("Service", serviceSchema);
