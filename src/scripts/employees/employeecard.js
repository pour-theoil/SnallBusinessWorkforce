import { getComputer } from "../data/apimanager.js"

export const employeeCard = (element, response) => {
    return `
    <section class="employeeCard">
        <h2 class="empName">${element.firstName} ${element.lastName}</h2>
        <p class="empAge">Age ${element.age}</p>
        <p class="empComp">${response.model}, manufactured in ${response.year}</p>
    </section>
    `
}