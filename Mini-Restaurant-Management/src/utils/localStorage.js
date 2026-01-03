export const getData = () => 
    JSON.parse(localStorage.getItem("data")) || [];

export const saveData = (data) => 
    localStorage.setItem("data", JSON.stringify(data));