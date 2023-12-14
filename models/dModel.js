const mongoose = require("mongoose");

const drawingSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title should not be empty"],
      trim: true,
      maxlength: [
        30,
        "title is too short, minimum 30 char",
      ],
      
    },
    description: {
      type: String,
      trim: true,
    },
    createdAt: {
      type: Date,
      default: Date.now(),
    },
    updatedAt: {
      type: Date,
    },
    lines: {
      type: Array,
      default: [],
    },
    shapes: {
      type: Array,
      default: [],
    },
    textAnnotations: {
      type: Array,
      default: [],
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

const Drawing = mongoose.model("Drawing", drawingSchema);

module.exports = Drawing;
