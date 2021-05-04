export function countsAsAYes(userInput) {
    const firstLetter = userInput[0].toLowerCase();
    if (firstLetter === 'y') {
        return true;
    } else {
        return false;
    }
}