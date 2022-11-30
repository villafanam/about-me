'use strict';

console.log('Hello World');

// TODO:  GET USERS NAME - promt - alert a greeting back to the user

let userName = prompt('What is your name?');
alert(`Welcome to my site ${userName}! Please answer the following questions with yes/no or y/n`);

// TODO: prompt them 5 yer or no (y/n) qestion, alert if they got the answer right or wrong
//answer: yes
let userInput = prompt('Do I live in Washington state? (yes/y or no/n)').toLowerCase();
if(userInput === 'yes' || userInput === 'y')
{
  //console.log(`${userName} you are CORRECT!`);
  alert(`${userName} you are CORRECT!`);
}
else if(userInput === 'no' || userInput === 'n')
{
  //console.log(`${userName} you are INCORRECT!`);
  alert(`${userName} you are INCORRECT!`);
}
else
{
  alert('ERROR...Invaild Input!!!');
}

//answer: yes
userInput = prompt('Did I do desktop and network support in the Army?(yes/y or no/n)').toLowerCase();
if(userInput === 'yes' || userInput === 'y')
{
  //console.log(`${userName} you are CORRECT!`);
  alert(`${userName} you are CORRECT!`);
}
else if(userInput === 'no' || userInput === 'n')
{
  //console.log(`${userName} you are INCORRECT!`);
  alert(`${userName} you are INCORRECT!`);
}
else
{
  alert('ERROR...Invaild Input!!!');
}

//answer: no
userInput = prompt('Was I in the Navy? (yes/y or no/n)').toLowerCase();
if(userInput === 'yes' || userInput === 'y')
{
  //console.log(`${userName} you are INCORRECT!`);
  alert(`${userName} you are INCORRECT!`);
}
else if(userInput === 'no' || userInput === 'n')
{
  //console.log(`${userName} you are CORRECT!`);
  alert(`${userName} you are CORRECT!`);
}
else
{
  alert('ERROR...Invaild Input!!!');
}

//answer: yes
userInput = prompt('Do I have a Degree? (yes/y or no/n)').toLowerCase();
if(userInput === 'yes' || userInput === 'y')
{
  //console.log(`${userName} you are CORRECT!`);
  alert(`${userName} you are CORRECT!`);
}
else if(userInput === 'no' || userInput === 'n')
{
  //console.log(`${userName} you are INCORRECT!`);
  alert(`${userName} you are INCORRECT!`);
}
else
{
  alert('ERROR...Invaild Input!!!');
}

//answer: no
userInput = prompt('Do I specialize in web design? (yes/y or no/n)').toLowerCase();
if(userInput === 'yes' || userInput === 'y')
{
  //console.log(`${userName} you are INCORRECT!`);
  alert(`${userName} you are INCORRECT!`);
}
else if(userInput === 'no' || userInput === 'n')
{
  //console.log(`${userName} you are CORRECT!`);
  alert(`${userName} you are CORRECT!`);
}
else
{
  alert('ERROR...Invaild Input!!!');
}


// TODO:  GIVE a personalized message at the end
alert(`Thanks for visiting my site ${userName}! Hope you have fun!`);
