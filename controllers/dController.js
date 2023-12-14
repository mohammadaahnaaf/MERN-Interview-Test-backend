const Drawing = require("../models/dModel");
const createDrawing = async (req, res) => {
  const { lines, shapes, textAnnotations } = req.body || {};
  if (!lines && !shapes && !textAnnotations) {
    res
      .send({
        message:
          "Please draw something!",
        success: false,
      })
      .status(400);
  }
  try {
    const newDrawing = await Drawing.create(req.body);
    res
      .send({
        message: "Drawing created",
        data: newDrawing,
        success: true,
      })
      .status(201);
  } catch (err) {
    res
      .send({
        message: err.message,
        success: false,
      })
      .status(400);
  }
};

const getAllDrawings = async (req, res) => {
  try {
    const drawings = await Drawing.find({
      // include createdAt field in response
      createdAt: { $exists: true },
    }).sort({ createdAt: -1 });
    res.send({
      message: "Drawings found",
      data: drawings,
      success: true,
    });
  } catch (err) {
    res.send({
      message: err.message,
      success: false,
    });
  }
};

const getDrawingById = async (req, res) => {
  try {
    const drawing = await Drawing.findById(req.params.id);
    res.send({
      message: "Drawing found",
      data: drawing,
    });
  } catch (err) {
    res.send({
      message: err.message,
    });
  }
};

const updateDrawing = async (req, res) => {
  const { lines, shapes, textAnnotations } = req.body || {};
  if (!lines && !shapes && !textAnnotations) {
    res
      .send({
        message:
        "Please draw something!",
        success: false,
      })
      .status(400);
  }
  try {
    const drawing = await Drawing.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.send({
      message: "Drawing updated",
      data: drawing,
      success: true,
    });
  } catch (err) {
    res.send({
      message: err.message,
      success: false,
    });
  }
};

const deleteDrawing = async (req, res) => {
  try {
    await Drawing.findByIdAndDelete(req.params.id);
    res.send({
      message: "Drawing deleted",
      success: true,
    }).status(204);
  } catch (err) {
    res.send({
      message: err.message,
      success: false,
    }).status(400);
  }
};

module.exports = {
  createDrawing,
  getAllDrawings,
  getDrawingById,
  updateDrawing,
  deleteDrawing,
};
