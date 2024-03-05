// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.



    // EXERCISE NUMBER 14 //

let Guest_list : string [] = ['Shahroz', 'Usama' , 'Najam','Ali']


// for (let i=0; i< Guest_list.length;i++) {


// console.log("\nHello, " + Guest_list[i] +  "  Your Invited To Dinner To Night" );

// }


 // EXERCISE NUMBER 15 //

let absentGuest : string = "Ali"
let newGuest : string = 'Mahad Khan'

Guest_list[3] = newGuest ;

console.log("\n\n\n");


for (let i=0; i< Guest_list.length;i++) {


console.log("\nHello, " + Guest_list[i] +  "  Your Invited To Dinner To Night" );
    
    }

console.log(`\n\n\n mr.  ${absentGuest} Is not Comming Tonigh on Dinner\n`);

 // EXERCISE NUMBER 15 END----- //

  // EXERCISE NUMBER 16 START----- //


console.log('We are found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.');

Guest_list.unshift('Asim Muneer')
Guest_list.splice(2 , 0 , 'Bajwa')
Guest_list.push('asif ghafoor')



 for (let i=0; i< Guest_list.length;i++) {


    console.log("\nHello, " + Guest_list[i] +  "  Your Invited To Dinner To Night" );
    
}
    
    
