const express = require('express');
const router = express.Router();
const drawingController = require('../controllers/dController');
router.post('/drawing', drawingController.createDrawing);
router.get('/drawings', drawingController.getAllDrawings);
router.get('/drawing/:id', drawingController.getDrawingById);
router.put('/drawing/:id', drawingController.updateDrawing);
router.delete('/drawing/:id', drawingController.deleteDrawing);

module.exports = router;
