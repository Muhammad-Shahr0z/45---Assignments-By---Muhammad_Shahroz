"use strict";
// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
let Guest_list = ['Shahroz', 'Usama', 'Najam', 'Ali'];
for (let i = 0; i < Guest_list.length; i++) {
    console.log("\nHello, " + Guest_list[i] + "  Your Invited To Dinner To Night");
}
let absentGuest = "Ali";
let newGuest = 'Mahad Khan';
Guest_list[3] = newGuest;
console.log("\n\n\n");
for (let i = 0; i < Guest_list.length; i++) {
    console.log("\nHello, " + Guest_list[i] + "  Your Invited To Dinner To Night");
}
console.log(`\n\n\n mr.  ${absentGuest} Is not Comming Tonigh on Dinner`);
