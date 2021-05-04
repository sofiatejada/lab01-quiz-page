// IMPORT MODULES under test here:
import { countsAsAYes } from '../utils.js';

const test = QUnit.test;

test('checking to see if it returns true or false properly', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = true;
    const expectedFalse = false;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = countsAsAYes('yes');
    const actualFalse = countsAsAYes('hello');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
    expect.equal(actualFalse, expectedFalse);
});
