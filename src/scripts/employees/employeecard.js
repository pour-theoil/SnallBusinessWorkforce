import { getComputer } from "../data/apimanager.js"

export const employeeCard = (element) => {
    getComputer(element.computerId).then((response) => `
    <section class="employeeCard">
        <h2 class="empName">${element.name}</h2>
        <p class="empAge">Age ${element.age}</p>
        <p class="empComp">Computer ${response.model}, manufactured in ${response.year}</p>
    </section>
    `)
}