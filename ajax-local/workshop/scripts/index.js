"use strict"

let url = "http://localhost:8081/api/categories"
let shopByTypeSelect = document.querySelector("#shopByTypeSelect");
let categorySelect = document.querySelector("#categorySelect");

async function getCategories() {
    try {
        let fetching = fetch(url)   
        let response = await fetching
        let data = response.json();
        console.log(data);
        
    } catch (error) {
        console.log("error", error.message);
        
        
    }
}

getCategories()