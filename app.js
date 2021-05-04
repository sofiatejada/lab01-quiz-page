import { countsAsAYes } from './utils.js';

//grab DOM elements
const button = document.getElementById('button');
const results = document.getElementById('results');


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
        score++;
    }

    if (!countsAsAYes(question2)) {
        score++;
    }

    if (countsAsAYes(question3)) {
        score++;
    }


    alert('Quiz finished! Your results are displayed below.');

    results.textContent = `Good job, ${userName}! You got ${score} questions right.`;

});
