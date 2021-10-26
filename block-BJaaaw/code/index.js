// if..else

/*
1. Write a program that asks the user for a number and check the following conditions:

  - `if` the number is even print the message " number is even"
  - `if` the number is odd print the message "number is odd"
*/

let value = prompt("tell me the number")

if(value%2 == 0){
  alert("It is an even number")
}else{
  alert("It is an odd number")
}

// 2. Write a program to accept two numbers from user using`prompt` and alert the max value.

let number1 = prompt("enter the number one")
let number2 = prompt("enter the number two")

if(number1> number2){
  alert("number one is greater than number2")
}else if(number1 == number2){
  alert("number is equal")
}else{
  alert("number two is greater than number one")
}

// 3. Convert the above code using`?` terniary operator

number1>number2? alert("number one is max value") : alert("number two is maximum value");

/*
4. Write a program that asks the user for the house name and check the following conditions:

  - `if` house name is "stark" then print the message " Winter is coming"
  - `if` house name is "lannister" then print the message " A lannister always pays his debt"
  - `else` print the message " All men must die"
*/

let houseName = prompt("what is your house name")

if(houseName == "stark"){
  alert("Winter is coming")
}else if(houseName == "lannister"){
  alert("A lannister always pays his debt")
}else{
  alert("all men must die")
}

// 5. Convert the above code using`?` terniary operator
 houseName == "stark"? alert("winter is coming"): alert("again with ternaiary") ;
 houseName == "lannister"? alert("A lannister always pays his debt") : alert("all men must die")

// Switch

// 6. Write a program that takes the number of the month(1 - 12) and alert number of days in the month.

let number =  Number(prompt("months number"))

switch(number){
  case 1:
    alert("31 days")
    break;
  case 2:
    alert("28 days")
    break;
  case 3:
    alert("31 days") 
    break;
  case 4:
    alert("30 days")
    break;
  case 5:
    alert("31 days")
    break;
  case 6:
    alert("30 days")
    break;
  case 7:
    alert("31 days")
    break;
  case 8:
    alert("31 days")
    break;
  case 9:
    alert("30 days")
  case 10:
    alert("31 days")
    break;
  case 11:
    alert("30 days")
    break;
  case 12:
    alert("31 days")
    break;                     
}

/* 7.
- Write a program that take the salery of the user using prompt and alert the in -hand amount.You will find out the in -hand amount by deducting the tax amoun from salery.Conditions are given below.
  - `Salary <= 20000` tax is 10 %
  - `Salary <= 40000` tax is 20 %
  - `Salary > 50000` tax is 30 %
*/

//  if..else vs switch


let salary = Number(prompt("Enter your sallery"))

if(salary <= 20000){
  alert(`salary in hand ${salary *Number(0.9)}`)
}else if(salary<= 40000){
  alert(`salary in hand ${salary * Number(0.8)}`)
}else{
  alert(`salary in hand ${salary * Number(0.7)}`)
}

/* 8.
Implement the condition give below using`if..else` and`switch` statement.

  - `marks > 100` alert`"Marks can't be greater than 100"`
  - `marks > 80 && marks < 100` alert`"Grade A"`
  - `marks > 50 && marks < 80` alert`"Grade B"`
  - `marks > 30 && marks < 50` alert`"Grade C"`
  - `marks > 0` alert`"Grade D"`

*/

let marks = Number(prompt("enter your marks"))

if(marks > 100){
  alert("marks can't be greater than 100")
}else if(marks > 80 && marks < 100){
  alert("grade A")
}else if (marks > 50 && marks < 80){
  alert("Grade B")
}else if (marks > 30 && marks < 50){
  alert("Grade C")
}else{
  alert("Grade D")
}

switch(marks){
  case marks>100:
    alert("marks can't be greater than 100")
    break;
  case  marks > 80 && marks < 100:
    alert("Grade B")
    break;
  case  marks > 50 && marks < 80:
      alert("Grade B")
      break;
  case marks > 30 && marks < 50:
    alert("Grade C")
    break;
  case marks > 0 && marks < 30:
    alert("Grade D")      
} 


/* 9. Weather app

  - Ask user to provide the condition of the weather outside by asking `What is the weather like outside?`
  - If user says`sunny` alert`Wear a T-shirt`
  - If`rainy` alert`Don't forget to take your raincoat`
  - If`hot` alert`Get a hanky`
  - If`freezing` alert`Get your sweeter on`
  - Anything else should alert`Not a valid input`
*/

let weather = prompt("enter outside weather")

if(weather == "sunny"){
  alert("wear a t-shirt")
}else if(weather == "rainy"){
  alert("Don't forget to take your raincoat")
}else if(weather == "freezing"){
  alert("Get your sweater on")
}else{
  alert("not a valid input")
}