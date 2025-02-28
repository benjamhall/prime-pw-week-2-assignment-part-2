// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening.
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// We make a variable called name and set it to Dane as the value.
// We check if name is true and an exact match to Mary, then we would console.log 'Hi, Mary!'
// Otherwise, if name is false, then console.log "How do you do?"
// However, name is not an exact match to Mary, name = Dane so we console.log 'How do you do?''

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// We make a variable called secret. We make a variable called code equal to 123.
// We check if code is true and an exact match to 123, then secret equals 'super' and code equals code multiplied by two.
// It is the case that code equals 123, so secret equals super and code equals 4. We check and see if code is greater than 250, then secret equals duper.
// But it is not the case that code is greater than 250, thus secret is still super. We then console.log secret.

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// We make a variable called isStudent which is true. We make another variable called age equal to 34. We make another variable called zip equal to 55407.
// We check if isStudent is an exact match to true and zip is greater than 80000 then console.log 'You're a student on the West Coast.'
// It is not the case that zip is greater than 80000. We check if isStudent is false or age is less than 30 then console.log 'What are your hobbies?'. It is not the case isStudent is false nor is it the case that age is less than 30.
// We check if isStudent is equal to true then console.log 'Welcome to Prime!'. Otherwise we console.log 'How about the weather'. It is the case that isStudent is equal to true and We should console.log 'Welcome to Prime'.

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code.
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2.
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment.
// Should be number++.
number--;

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and
// colorTwo is set to 'red', and mix is set to true. We check if mix is true
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
// FIX variables of colorOne and colorTwo, they have them mixed up. It should
// be: let colorOne = 'blue' and let colorTwo = 'red'.

let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

if (mix === true) {
  colorOne = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
const time = 4;

// FIX the compound conditional. They have || listed which means 'or', but in the
// description it says 'and' which would be &&. It should be changed to:
// if (temp > 39 && time >= 4)

if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;

//FIX the order of the conditional by switching age and minAge and putting a >= symbol between them
and also switch the two console.log statements. It should be changed to this:
if (age >= minAge) {
   console.log ('enter');
}  else {
    console.log('no entry');
}
//

if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}


*/
