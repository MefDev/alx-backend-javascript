export default function createIteratorObject(report) {
  const employeesList = report.allEmployees;
  const allEmployees = [];
  for (const department in employeesList) {
    allEmployees.push(...employeesList[department]);
  }
  return allEmployees;
}
