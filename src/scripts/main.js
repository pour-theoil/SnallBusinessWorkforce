import { getComputer, getDepartment, getEmployees } from "./data/apimanager.js"
import { getEmployeeList } from "./employees/employeelist.js"



const showEmployees = () => { 
    getEmployees().then(response => { 
        let employees = response;
        getComputer().then( response => {
            let computer = response;
            getDepartment().then(response => {
                let department = response;
                //Get a reference to the location on the DOM where the nav will display
                const entryElement = document.querySelector(".maincontent");
                entryElement.innerHTML = getEmployeeList(employees, computer, department);
            })
        })
    })
}



showEmployees();