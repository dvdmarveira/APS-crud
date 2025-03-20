const express = require("express");
const {
  getDisciplines,
  getDisciplineById,
  createDiscipline,
  deleteDiscipline,
} = require("../controllers/disciplineController");
const router = express.Router();

router.route("/").get(getDisciplines).post(createDiscipline);
router.route("/:id").get(getDisciplineById).delete(deleteDiscipline);

module.exports = router;
