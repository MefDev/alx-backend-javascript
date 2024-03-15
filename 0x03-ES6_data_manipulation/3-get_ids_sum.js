import getListStudentIds from './1-get_list_student_ids.js';

export default function getStudentIdsSum(getListStudents) {
  const listOfIds = getListStudentIds(getListStudents);
  return listOfIds.reduce((previousValue, currentValue) => previousValue + currentValue);
}
