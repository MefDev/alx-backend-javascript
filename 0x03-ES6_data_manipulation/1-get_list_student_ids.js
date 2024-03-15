export default function getListStudentIds(getListStudents) {
  const listOfIds = [];
  if (!Array.isArray(getListStudents)) {
    return [];
  }
  getListStudents.map((obj) => listOfIds.push(obj.id));
  return listOfIds;
}
