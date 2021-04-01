const api = "http://localhost:8088";

export const getEmployees = () => {
    return fetch(`${api}/employees`)
    .then(response => response.json())
}

export const getComputer = () => {
    return fetch(`${api}/computers/`)
    .then(response => response.json())
    
}

export const getDepartment = () => {
    return fetch(`${api}/departments/`)
    .then(response => response.json())
    
}
