import { getEmployees } from "./data/apimanager.js"
import { getEmployeeList } from "./employees/employeelist.js"



const showEmployees = () => { 
    getEmployees().then(response => {
    //Get a reference to the location on the DOM where the nav will display
    const entryElement = document.querySelector(".maincontent");
    entryElement.innerHTML = getEmployeeList(response);
    })
}

showEmployees();