export function countsAsAYes(userInput) {
    const firstLetter = userInput[0].toLowerCase();
    if (firstLetter === 'y') {
        return true;
    } else {
        return false;
    }
}

export function fix(userInput) {
    const firstLetter = userInput[0].toLowerCase();
    if (firstLetter === 'n') {
        return true;
    } else {
        return false;
    }
}