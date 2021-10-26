//  Loop basics

// Do the following using loops:

// Using `console.log` log all the values from 1 to 10.

for(let i = 1; i<11 ; i = i+1){
  console.log(i)
}

// Using `console.log` log all the evan values from 1 to 10.
for(let i= 1 ;i<11;i=i+1){
    if(i % 2 == 0){
        console.log(i)
    }
}

// Using `console.log` log all the od values from 1 to 10.

for(let i= 1 ; i < 11 ; i = i+1){
    if(i % 2 !== 0){
        console.log(i)
    }
}

// Calculate the sum of all numbers from 1 to 10.

let sum = 0;
for(let i= 0 ; i <11 ; i = i+1){
    console.log(i)
    sum = sum + i
    console.log(sum)
}

// Log all the values from 1 to 10 using while loop


let add = 0;
let i = 1;

while(i<11){
    console.log(i)
    add = add + i
    console.log(add)
    i= i+1
}