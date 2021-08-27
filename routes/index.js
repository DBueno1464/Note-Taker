const router = require('express').Router();

const notes = require('./notesRouter');

// /api/tips/*
router.use('/notes', notes);

module.exports = router;