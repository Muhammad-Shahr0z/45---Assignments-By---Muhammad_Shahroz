
// Store the locations in a array. Make sure the array is not in alphabetical order.


let locationss :String[] = ['BANGLADESH' , 'AMERICA' , 'DENMARK' , 'CHINA'];


//Print your array in its original order.
 
console.log('\n original array  ' + locationss);


// //Print your array in alphabetical order without modifying the actual list.

console.log('\nCopy ' + [...locationss].sort());


// //Show that your array is still in its original order by printing it.

console.log('\n original array  ' + locationss);


//Print your array in reverse alphabetical order without changing the order of the original list.


console.log('\nCopyReverse ' + [...locationss].sort().reverse());


//Show that your array is still in its original order by printing it again.

console.log('\n original array  ' + locationss);


//Reverse the order of your list. Print the array to show that its order has changed.

console.log('\n reverse array  ' + locationss.reverse());


//Reverse the order of your list again. Print the list to show it’s back to its original order.

console.log('\n originalform array  ' + locationss.reverse());

//Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

console.log('\n originalform array  ' + locationss.sort());


// Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.


console.log('\n originalform array  ' + locationss.sort().reverse());
