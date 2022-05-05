// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { renderDragon } from '../utils.js';
import { dragons } from '../dragons.js';
const test = QUnit.test;

test('test dragon render function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<div class="dragon"><h1>Drogon</h1><img src="./assets/drogon.jpg"><p>Drogon is 230 feet long with a fear factor of 7.</p></div>`;
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderDragon(dragons[0]);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});
