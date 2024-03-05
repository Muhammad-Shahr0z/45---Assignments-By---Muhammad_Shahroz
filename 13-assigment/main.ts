// Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”

import { traceDeprecation } from "process";





let Transport: string[] = ['car', 'motorcycle', 'Aircraft','cycle','Train'];

let message :string = "I would like to own a "



for (let i = 0; i < Transport.length; i++) {

    console.log(message + Transport[i]);

}


