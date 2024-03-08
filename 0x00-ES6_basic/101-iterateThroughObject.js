export default function iterateThroughObject(reportWithIterator) {
  const allEmployees = [];
  for (const department in reportWithIterator) {
    allEmployees.push(...reportWithIterator[department]);
  }
  return allEmployees.join(' | ');
}
