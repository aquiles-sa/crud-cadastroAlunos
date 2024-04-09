const findStudentById = (req, res, students, number) => {
  const targetStudent = students.find((student) => {
    return student.id === Number(number);
  });

  if (!number) {
    return res.status(400).json({ message: "Enter the student's Id." });
  }

  if (isNaN(number)) {
    return res.status(400).json({ message: "The Id must be a number." });
  }

  if (!targetStudent) {
    return res.status(400).json({ message: "Student not found." });
  }

  return res.json(targetStudent);
};

module.exports = findStudentById;
