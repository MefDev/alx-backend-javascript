export default function createIteratorObject(report) {
  const allEmployees = [];
  for (const department in employeesList) {
    allEmployees.push(...employeesList[department]);
  }
  return allEmployees;
}
