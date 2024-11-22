"use strict";

// async function getData() {
//   //you get a promise object back which
//   //you hold as collateral for eventually getting the data you requested
//   let promise = fetch("https://jsonplaceholder.typicode.com/users");
//   let response = await promise; //wait for the response message to come back from the server with the data in the body
//   let data = await response.json(); //turn JSON string into JavaScript object or array of objects
//   console.log(data);
// }

// getData();

//call the api to get the data
//when we get the data back, we will print it
async function getData() {
  //you get a promise object back which
  //will send you a signal that the previous operation has completed
  let promise = fetch("https://jsonplaceholder.typicode.com/users"); //asking another computer for the data
  let response = await promise; //wait for the response message to come back from the server with the data in the body
  let data = await response.json(); //turn JSON string in the body into a JavaScript array of objects
  console.log(data);
}

getData();