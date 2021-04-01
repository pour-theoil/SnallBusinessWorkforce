import { getComputer, getEmployees } from "./data/apimanager.js"
import { getEmployeeList } from "./employees/employeelist.js"



const showEmployees = () => { 
    getEmployees().then(response => { 
        let employees = response;
        getComputer().then( compute => {
            //Get a reference to the location on the DOM where the nav will display
            const entryElement = document.querySelector(".maincontent");
            entryElement.innerHTML = getEmployeeList(employees, compute);
        })
        })
}



showEmployees();