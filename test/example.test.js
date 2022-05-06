// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { renderDragon } from '../utils.js';
import { dragons } from '../dragons.js';

import { renderChild } from '../utils.js';
import { children } from '../mychildren.js';
const test = QUnit.test;

test('test dragon render function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<div class="dragon"><h1>Drogon</h1><img src="./assets/drogon.jpg"><p>Drogon is 230 feet long with a fear factor of 7.</p><h2>Known for:</h2><ul><li>protective and loyal</li><li>"the winged shadow"</li><li>villon</li></ul></div>`;
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderDragon(dragons[0]);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});

test('test child render function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<div class="child"><h1>Giyana</h1><img src="./assets/giyana.jpg"><p>Giyana is 13 years old and loves to eat tacos!</p><h2>Hobbies</h2><ul><li>making jewelry</li><li>drama club</li><li>hanging with friends</li></ul></div>`;
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderChild(children[0]);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});