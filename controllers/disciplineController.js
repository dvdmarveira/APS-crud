const Discipline = require("../models/Discipline");

// @desc    Get all disciplines
// @route   GET /api/disciplines
// @access  Public
exports.getDisciplines = async (req, res) => {
  try {
    const disciplines = await Discipline.find();
    res.json(disciplines);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// @desc    Get single discipline
// @route   GET /api/disciplines/:id
// @access  Public
exports.getDisciplineById = async (req, res) => {
  try {
    const discipline = await Discipline.findById(req.params.id);
    if (!discipline) {
      return res.status(404).json({ message: "Discipline not found" });
    }
    res.json(discipline);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// @desc    Create new discipline
// @route   POST /api/disciplines
// @access  Public
exports.createDiscipline = async (req, res) => {
  const { name, atuation } = req.body;
  try {
    const discipline = new Discipline({
      name,
      atuation,
    });
    await discipline.save();
    res.status(201).json(discipline);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// @desc    Delete discipline
// @route   DELETE /api/disciplines/:id
// @access  Public
exports.deleteDiscipline = async (req, res) => {
  try {
    const discipline = await Discipline.findByIdAndDelete(req.params.id);
    if (!discipline) {
      return res.status(404).json({ message: "Discipline not found" });
    }
    res.json({ message: "Discipline deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
