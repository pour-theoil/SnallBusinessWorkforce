import { getComputer } from "../data/apimanager.js"

export const employeeCard = (employee, computer, department) => {
    return `
    <div class="employee">
    <header class="employee__name">
        <h1>${employee.firstName} ${employee.lastName}</h1>
    </header>
    <section class="employee__computer">
        Currently using a ${computer.year} ${computer.model}
    </section>
    <section class="employee__department">
        Works in the ${department.departmentName} department
    </section>
</div>
    `
}