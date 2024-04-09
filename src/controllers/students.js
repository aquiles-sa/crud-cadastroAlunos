let { idStudent, students } = require("../database/database");
const findStudentById = require("../helpers/findStudent");

const listStudents = (req, res) => {
  return res.status(200).json(students);
};

const getStudents = (req, res) => {
  const { id } = req.params;

  findStudentById(req, res, students, id);
};

const addStudents = (req, res) => {
  const { name, surname, age, course } = req.body;

  if (!name || !surname || !age || !course) {
    return res.status(404).json({ message: "There is a missing field." });
  }

  if (age < 18) {
    return res.status(404).json({ message: "The person must be overage." });
  }

  const newStudent = {
    id: idStudent++,
    name,
    surname,
    age,
    course,
  };

  students.push(newStudent);
  return res.status(203).json({ message: "New student was added!" });
};

const updateStudent = (req, res) => {
  const { id } = req.params;
  const { name, surname, age, course } = req.body;

  const targetStudent = students.find((student) => {
    return student.id === Number(id);
  });

  if (!id) {
    return res.status(400).json({ message: "Enter the student's Id." });
  }

  if (isNaN(id)) {
    return res.status(400).json({ message: "The Id must be a number." });
  }

  if (!targetStudent) {
    return res.status(400).json({ message: "student not found." });
  }

  targetStudent.name = name || targetStudent.name;
  targetStudent.surname = surname || targetStudent.surname;
  targetStudent.age = age || targetStudent.age;
  targetStudent.course = course || targetStudent.course;

  return res.status(203).json({ message: "Student updated!" });
};

const deleteStudent = (req, res) => {
  const { id } = req.params;

  const targetStudent = students.find((student) => {
    return student.id === Number(id);
  });

  if (!id) {
    return res.status(400).json({ message: "Enter the student's Id." });
  }

  if (isNaN(id)) {
    return res.status(400).json({ message: "The Id must be a number." });
  }

  if (!targetStudent) {
    return res.status(400).json({ message: "student not found." });
  }

  students = students.filter((student) => {
    return student.id !== Number(id);
  });

  return res.status(200).json({ message: "Student deleted!" });
};

module.exports = {
  listStudents,
  getStudents,
  addStudents,
  updateStudent,
  deleteStudent,
};
