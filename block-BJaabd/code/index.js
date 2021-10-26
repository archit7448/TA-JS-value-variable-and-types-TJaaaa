// Condition
// Write your code below each problems:

/*
Write a program that asks the user his/her marks and check for the following conditions :

- `if` the marks is between 12-55 then print the message "You can participate in the marathon".
- `if` the marks is between 4-11 then print the message " You are too young to participate in the marathon".
- `if` the marks is less than 4 then print the message " Hey Kiddo! Can You Walk ?"
- `if` the marks is greater than 55 then print the message " You are too old to participate in the marthon".
👇
*/

var age = Number(prompt("enter your age"))

switch(true){
  case age>=12 && age<= 55:
    alert("you can participate in the marathon")
    break;
  case age>=4 && age<= 11:
    alert("you are too young to participate in marathon")
    break;
  case age<= 4:
    alert("hey kiddo , can you walk 🙄")
    break;
  default:
    alert("too old 😐")
    break;       
}


// Loops
/*
Given a positive integer `n`. Print the word (hello) in format of heeeello (letter 'e' must be repeated `n` times). Take input from prompt and print the result in alert.

Example:
n = 1 => output: hello
n = 7 => output: heeeeeeello
👇
*/
// [Your code goes here]

var i = Number(prompt("enter a value"))
var heloo = ""
for(let j= 0 ; j<i ; j = j+1){
     heloo = heloo + "e"
}

var lastWord = "h" + heloo + "llo"

alert(lastWord)

/*
Program to calculate the sum of first n natural numbers(1,2,3...n are known as natural numbers). Prompt user to enter n (using `prompt`) then based on input provided calculate and show result in `alert`.
👇
*/
// [Your code goes here]

let n = Number(prompt("enter a value to calculate n sum number")) + 1
let sum = 0;

for(let k = 1 ; k<n ; k = k+1){
  sum = sum + k
}

alert(sum)

/* Switch Statement

 🎖Using switch statement do the following

Take a number value from user and alert the message if it matches the conditions.
* [ ] ONE, if `number` is equal to 1.
* [ ] TWO, if `number` is equal to 2.
* [ ] THREE, if `number` is equal to 3.
* [ ] FOUR, if `number` is equal to 4.
* [ ] FIVE, if `number` is equal to 5.
* [ ] SIX, if `number` is equal to 6.
* [ ] SEVEN, if `number` is equal to 7.
* [ ] EIGHT, if `number` is equal to 8.
* [ ] NINE, if `number` is equal to 9.
* [ ] PLEASE TRY AGAIN, if  is none of the above.

*/
// [Your code goes here]

var num = Number(prompt("enter a number"))
switch(num){
  case 1:
     alert("one")
     break;
  case 2:
     alert("two")
     break;
  case 3:
       alert("three")
       break;
  case 4:
       alert("four")
       break; 
  case 5:
     alert("five")
     break;
  case 6:
     alert("six")
     break;
  case 7:
     alert("seven")
     break;
  case 8:
     alert("eight")
     break;
  case 9:
     alert("nine")
     break;
  default:
    alert("Invalid Input")
    break;   
}

/*
🎖Using switch statement do the following

Take the value of `marks` (0-100) from user using `prompt` and `alert` the message (Your Grade is AA) as giver below.
* [ ] `AA` if `marks` is greater than 90.
* [ ] `AB` if `marks` is greater than 80 and less than or equal to 90
* [ ] `BB` if `marks` is greater than 70 and less than or equal to 80
* [ ] `BC` if `marks` is greater than 60 and less than or equal to 70
* [ ] `CC` if `marks` is greater than 50 and less than or equal to 60
* [ ] `CD` if `marks` is greater than 40 and less than or equal to 50
* [ ] `DD` if `marks` is greater than 30 and less than or equal to 40
* [ ] `FF` if `marks` is less than or equal to 30
*/

// [Your code goes here]

var marks = Number(prompt("enter a marks"))
switch(true){
  case  marks>90 :
     alert("AA")
     break;
  case marks>80 && marks<= 90:
     alert("AB")
     break;
  case marks>70 && marks<= 80:
       alert("BB")
       break;
  case marks>60 && marks<= 70:
       alert("BC")
       break; 
  case marks>50 && marks<= 60:
     alert("CC")
     break;
  case marks>40 && marks<=50:
     alert("CD")
     break;
  case marks>30 && marks<=40:
     alert("DD")
     break;
  case marks<=30:
     alert("DD")
     break;
  default:
    alert("invalid input")
    break;   
}

/*
 🎖Write a JavaScript program that takes two `integers` from user (using prompt) and alerts the larger number.
*/
// [your code goes here]

var number1 = Number(prompt("enter a number one to compare"))
var number2 = Number(prompt("enter a number two to compare"))

if(number1 > number2){
  alert(`bigger number is number one ${number1}`)
}else{
  alert(`bigger number is number two ${number2}`)
}

/*
🎖Write a JavaScript conditional statement to find the sign (+, -) of product of three numbers. Take those three numbers from user using `prompt`. Display an alert box with the specified sign.
*/
// [Your code goes here]


var NumA = Number(prompt("enter a number one "))
var NumB = Number(prompt("enter a number two"))
var NumC = Number(prompt("enter a number three"))

var multiply = NumA * NumB * NumC
 
alert(multiply)


/* Calculator
 🎖Make a simple calculator with these functions. Using prompt, type conversion, if else statement. Use prompt to take the input from user i.e two numbers and an operation (Add, Sub, Mul, Div).

  ⛑ Rule
    * [ ] While substracting and dividing keep in mind the number one should be greater then number two. If not show alert saying `Number Two is larger then Number one`.
  ⚡️ Operations
    * [ ] Add
    * [ ] Sub
    * [ ] Mul
    * [ ] Div
*/

// [Your code goes here]


var NumD = Number(prompt("enter a number one "))
var NumE = Number(prompt("enter a number two"))

var operation = String(prompt("enter operation in term of Add,Sub,Mul and Div"))

if (operation = "Add"){
  let Add = NumD + NumE
  alert(Add)
}else if(operation = "Mul"){
  let multiply = NumD * NumE ;
  alert(multiply)
}else if(number1< number2){
  alert("first number should be bigger")
}else if(operation = "Sub"){
  let divide   = NumD - NumE
  alert(divide)
}else if(operation = "Div"){
  let divide = NumD / NumE
  alert(divide)
}else{
  alert("invalid input")
}