import { employeeCard } from "./employeecard.js"

export const getEmployeeList = (allEmployees, compute) => {
    let employeeHTML = ""
    allEmployees.forEach(employ => {
        let emplyComp = compute.find(computer => computer.id === employ.computerId)
        employeeHTML += employeeCard(employ, emplyComp);
    })
    return employeeHTML;
}