// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.



let personName: string = "";

personName = prompt("Enter Your Name First") || "";

let lowercase: string = personName.toLowerCase();
let uppercase: string = personName.toUpperCase();
let titlecase: string = personName
  .split(" ")
  .map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1).toLocaleLowerCase()
  )
  .join(" ");

if (personName !== null && personName !== "") {
  alert(`
  
         Hello ${lowercase} Your Name In To Lowercase ${lowercase}
         Hello ${uppercase} Your Name In To Uppercase  ${uppercase}
         Hello ${titlecase} Your Name In To Tiltlecase ${titlecase}
  `);
  

} else {

  alert(`HELLO , Please Enter Name First`);

}