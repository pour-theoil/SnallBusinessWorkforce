const api = "http://localhost:8088";

export const getEmployees = () => {
    return fetch(`${api}/employees`)
    .then(response => response.json())
}

export const getComputer = (usercompId) => {
    return fetch(`${api}/computers/${usercompId}`)
    .then(response => response.json())
    
}