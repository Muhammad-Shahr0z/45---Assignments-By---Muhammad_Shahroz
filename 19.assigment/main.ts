// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

import { log } from "console";

// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

// • Print a message to each of the two people still on your list, letting them know they’re still invited.

// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.



    // EXERCISE NUMBER 14 //

let Guest_list : string [] = ['Shahroz', 'Usama' , 'Najam',]


// for (let i=0; i< Guest_list.length;i++) {


// console.log("\nHello, " + Guest_list[i] +  "  Your Invited To Dinner To Night" );

// }


 // EXERCISE NUMBER 15 //

let absentGuest : string = "Najam"
let newGuest : string = 'Mahad Khan'

Guest_list[2] = newGuest ;

console.log("\n\n\n");


for (let i=0; i< Guest_list.length;i++) {


console.log("\nHello, " + Guest_list[i] +  "  Your Invited To Dinner To Night" );
    
    }

console.log(`\n\n\n mr.  ${absentGuest} Is not Comming Tonigh on Dinner\n`);

 // EXERCISE NUMBER 15 END----- //

  // EXERCISE NUMBER 16 START----- //


console.log('We are found a bigger dinner table, so now more space is available.');

Guest_list.unshift('Asim Muneer')     // to start 
Guest_list.splice(2 , 0 , 'Bajwa')  // add to mid
Guest_list.push('asif ghafoor')  // add to end 



 for (let i=0; i< Guest_list.length;i++) {


    console.log("\nHello, " + Guest_list[i] +  "  Your Invited To Dinner To Night" ); //invitation to new 03 peoples
    
}

console.log('\nsorry we can not arrange big table , only two people will be invited '); // bad newz for guest who not invited

    
  while (  Guest_list.length > 2) {
   let removeGuest = Guest_list.pop()

   console.log(`hello mr. ${removeGuest},  sorry you are not invited to Dinner,`); // removeGuest for dinner 
   
    

  }  

  for (let i=0; i< Guest_list.length;i++) {


    console.log("\nHello, " + Guest_list[i] +  "  Your still invited" ); //two peoples invited 
    
}

Guest_list.splice(0 , 2);


console.log(`\n\nEMPTY ARRAY  ${Guest_list}`);   //empty array



// exercise number 19 starrttttttt /////////////

let guest_length : number = Guest_list.length;

console.log(`\n${guest_length}  persons invited to dinner`)





