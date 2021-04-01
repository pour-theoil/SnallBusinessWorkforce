import { employeeCard } from "./employeecard.js"

export const getEmployeeList = (allEmployees, allComputer, allDepartment) => {
    let employeeHTML = ""
    allEmployees.forEach(employ => {
        let emplyComp = allComputer.find(computer => computer.id === employ.computerId)
        let emplyDept = allDepartment.find(department => department.id === employ.departmentId)
        employeeHTML += employeeCard(employ, emplyComp, emplyDept);
    })
    return employeeHTML;
}