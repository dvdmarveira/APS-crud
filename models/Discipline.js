const mongoose = require("mongoose");

const disciplineSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  atuation: {
    type: String,
    required: true,
  },
});

const Discipline = mongoose.model("Discipline", disciplineSchema);

module.exports = Discipline;
