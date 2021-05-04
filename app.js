import { countsAsAYes, fix } from './utils.js';

//grab DOM elements
const button = document.getElementById('button');
const resultsGood = document.getElementById('results-good');
const resultsBad = document.getElementById('results-bad');


// set event listeners to update state and DOM
button.addEventListener('click', () => {

    const ready = confirm('Are you ready to take the quiz?');
    if (ready === false) {
        return;
    }
    const userName = prompt('What\'s your name?');

    const question1 = prompt('Are the natives from the Dominican Republic called Taino?');

    const question2 = prompt('Is the Dominican Republic the least visited destination in the Caribbean?');

    const question3 = prompt('Was Santo Domingo Wester Europe\'s first settlement in the New World?');



    let score = 0;

    
    if (countsAsAYes(question1)) {
        score = score + 1;
    }

    if (fix(question2)) {
        score = score + 1;
    }

    if (countsAsAYes(question3)) {
        score = score + 1;
    }


    alert('Quiz finished! Your results are displayed below.');

    const percentage = (score / 3) * 100;
    
    if (score === 3) {
        resultsGood.textContent = `Excellent, ${userName}! You got ${score} questions right. That's ${Math.floor(percentage)}%`;
        resultsGood.style.display = 'block';
        resultsBad.style.display = 'none';
    } else if (score === 2){
        resultsGood.textContent = `Good job, ${userName}! You got ${score} questions right. That's ${Math.floor(percentage)}%`;
        resultsGood.style.display = 'block';
        resultsBad.style.display = 'none';
    } else if (score === 1) {
        resultsBad.textContent = `You should read the article again, ${userName}! You got ${score} question right. That's ${Math.floor(percentage)}%`;
        resultsBad.style.display = 'block';
        resultsGood.style.display = 'none';
    } else if (score === 0) {
        resultsBad.textContent = `Uh-oh, ${userName}! You got ${score} questions right. That's ${Math.floor(percentage)}%! Try again!`;
        resultsBad.style.display = 'block';
        resultsGood.style.display = 'none';
    }

});
