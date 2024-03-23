// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

let personName: string = "muhamMad shaHroz";

let lowercase: string = personName.toLowerCase();
let uppercase: string = personName.toUpperCase();
let titlecase: string = personName.split(" ").map(
(word) => word.charAt(0).toUpperCase() + word.slice(1).toLocaleLowerCase()
  )
  .join(" ");


  
console.log(lowercase);
console.log(uppercase);
console.log(titlecase);


