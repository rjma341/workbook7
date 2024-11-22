"use strict";

function greet() {
  throw new Error("failed");
  console.log("Hello");
}

try {
  greet();
} catch (error) {
    console.log("Error ocurred: " + error.message);
    
}


