'use strict';

//console.log('Hello World');
let score = 0;
// let userInput;
// TODO:  GET USERS NAME - promt - alert a greeting back to the user

let userName = prompt('What is your name?');
alert(`Welcome to my site ${userName}! Please answer the following questions with yes/no or y/n`);

// TODO: prompt them 5 yer or no (y/n) qestion, alert if they got the answer right or wrong
// answer: yes
function question_01(){
  let userInput = prompt('Do I live in Washington state? (yes/y or no/n)').toLowerCase();
  if(userInput === 'yes' || userInput === 'y')
  {
    //console.log(`${userName} you are CORRECT!`);
    alert(`${userName} you are CORRECT!`);
    score++;
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
}

//answer: yes
function question_02(){
  let userInput = prompt('Did I do desktop and network support in the Army?(yes/y or no/n)').toLowerCase();
  if(userInput === 'yes' || userInput === 'y')
  {
    //console.log(`${userName} you are CORRECT!`);
    alert(`${userName} you are CORRECT!`);
    score++;
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
}

//answer: no
function question_03(){
  let userInput = prompt('Was I in the Navy? (yes/y or no/n)').toLowerCase();
  if(userInput === 'yes' || userInput === 'y')
  {
    //console.log(`${userName} you are INCORRECT!`);
    alert(`${userName} you are INCORRECT!`);
  }
  else if(userInput === 'no' || userInput === 'n')
  {
    //console.log(`${userName} you are CORRECT!`);
    alert(`${userName} you are CORRECT!`);
    score++;
  }
  else
  {
    alert('ERROR...Invaild Input!!!');
  }
}

//answer: yes
function question_04(){
  let userInput = prompt('Do I have a Degree? (yes/y or no/n)').toLowerCase();
  if(userInput === 'yes' || userInput === 'y')
  {
    //console.log(`${userName} you are CORRECT!`);
    alert(`${userName} you are CORRECT!`);
    score++;
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
}

//answer: no
function question_05(){
  let userInput = prompt('Do I specialize in web design? (yes/y or no/n)').toLowerCase();
  if(userInput === 'yes' || userInput === 'y')
  {
    //console.log(`${userName} you are INCORRECT!`);
    alert(`${userName} you are INCORRECT!`);
  }
  else if(userInput === 'no' || userInput === 'n')
  {
    //console.log(`${userName} you are CORRECT!`);
    alert(`${userName} you are CORRECT!`);
    score++;
  }
  else
  {
    alert('ERROR...Invaild Input!!!');
  }
}

//Lab 03
let chances = 4;
for(let i = 0; i < 4; i++)
{
  //console.log('i= ' + i + "...chances= " + chances);
  userInput = prompt(`Guess whats my favorite number is! You have ${chances} chances.`);
  chances--;

  if(Number(userInput) === 88)
  {
    alert('Your answer is CORRECT...');
    score++;
    break;
  }
  else if(userInput < 88)
  {
    alert('Too low!');
  }
  else if(userInput > 88)
  {
    alert('Too high!');
  }
}
alert('The is answer is...88!');

let arrPrimes = [89, 79, 7, 11, 23, 13];
let gameOver = false;
for(let i = 0; i < 6; i++)
{
  userInput = prompt('What prime number between 1 to 100 do I like?');
  for(let j = 0; j < arrPrimes.length; j++)
  {
    if(parseInt(userInput, 10) === arrPrimes[j])
    {
      alert(`${arrPrimes[j]}...is CORRECT!`);
      score++;
      gameOver = true;
      break;
    }
  }
  if(gameOver){break;}
}
alert('GAME OVER...A8ll possible anwers: 89, 79, 7, 11, 23, 13');

alert(`Total score: ${score} out 7`);

// TODO:  GIVE a personalized message at the end
alert(`Thanks for visiting my site ${userName}! Hope you had have fun!`);
