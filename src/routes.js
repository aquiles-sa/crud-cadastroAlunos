const express = require("express");
const checkPassword = require("./middlewares/password");
const {
  listStudents,
  addStudents,
  getStudents,
  updateStudent,
  deleteStudent,
} = require("./controllers/students");

const routes = express();

routes.get("/students", checkPassword, listStudents);
routes.get("/students/:id", checkPassword, getStudents);
routes.post("/students", checkPassword, addStudents);
routes.put("/students/:id", checkPassword, updateStudent);
routes.delete("/students/:id", checkPassword, deleteStudent);

module.exports = routes;
