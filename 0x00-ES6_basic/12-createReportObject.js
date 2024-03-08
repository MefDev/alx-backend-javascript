export default function createReportObject(employeesList) {
  return {
    employees: employeesList,
    getEmployeeCount() {
      return this.employees.length;
    },
    createEmployeesObject(departmentName, employees) {
      return {
        [departmentName]: employees,
      };
    },
  };
}
