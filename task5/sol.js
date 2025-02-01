"use strict";
/*function getObjectKeys(obj) {
    return Object.keys(obj);  // Returns an array of the object's keys
  }
  
  // Example object
  const person = {
    name: "John",
    age: 30,
    gender: "male"
  };
  
  // Test the function
  console.log(getObjectKeys(person));  // Output: ["name", "age", "gender"]*/
/////////////////////////////////////////////////////////////////////////////////////  
/*function getObjectValues(obj) {
    return Object.values(obj);  // Returns an array of the object's values
  }
  
  // Example object
  const person = {
    name: "John",
    age: 30,
    gender: "male"
  };
  
  // Test the function
  console.log(getObjectValues(person));  // Output: ["John", 30, "male"]*/
  //////////////////////////////////////////////////////////////////////////////////////
  /*function getObjectEntries(obj) {
    return Object.entries(obj);  // Returns an array of key-value pairs
  }
  
  // Example object
  const person = {
    name: "John",
    age: 30,
    gender: "male"
  };
  
  // Test the function
  console.log(getObjectEntries(person));
  // Output: [["name", "John"], ["age", 30], ["gender", "male"]]*/
  /////////////////////////////////////////////////////////////////////////////////////
  /*const person = {
    name: "Alice",
    age: 25
  };
  
  // Freeze the object
  Object.freeze(person);
  
  // Try to modify the object
  person.name = "Bob";  // This will not work
  person.city = "New York";  // This will not work
  delete person.age;  // This will not work
  
  console.log(person);
  // Output: { name: "Alice", age: 25 }
  // The object remains unchanged because it's frozen.*/
  /////////////////////////////////////////////////////////////////////////////////////////
  const person = {
    name: "Alice",
    age: 25
  };
  
  // Seal the object
  Object.seal(person);
  
  // Modify an existing property
  person.name = "Bob";  // This will work
  console.log(person.name); // Output: "Bob"
  
  // Try to add a new property
  person.city = "New York";  // This will not work
  console.log(person.city);  // Output: undefined
  
  // Try to delete an existing property
  delete person.age;  // This will not work
  console.log(person.age);  // Output: 25
  
  console.log(person);
  // Output: { name: "Bob", age: 25 }
  // The object is sealed, so the structure cannot be changed, but the values can be modified.
  

  
  
  