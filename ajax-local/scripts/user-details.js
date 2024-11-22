"use script";

const urlParams = new URLSearchParams(location.search);

let userId = urlParams.get("userId");


async function getUser() {
  let promise = fetch("https://jsonplaceholder.typicode.com/users/" + userId); 
  let response = await promise; 
  let user = await response.json(); 
  console.log(user);
}

getUser();
