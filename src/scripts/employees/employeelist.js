import { employeeCard } from "./employeecard.js"

export const getEmployeeList = (allEmployees) => {
    let employeeHTML = ""
    allEmployees.forEach(employ => {
        employeeHTML += employeeCard(employ);
    })
    return employeeHTML;
}