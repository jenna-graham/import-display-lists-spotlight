import { dragons } from './dragons.js';
import { renderDragon } from './utils.js';
console.log(dragons);

const dragonList = document.getElementById ('dragons');

for (let dragon of dragons) {
    const dragonDiv = renderDragon(dragon);
    dragonList.append(dragonDiv);
}
import { children } from './mychildren.js';
import { renderChild } from './utils.js';
console.log(children);

const childList = document.getElementById('children');

for (let child of children) {
    const childDiv = renderChild(child);
    childList.append(childDiv);
}
import { crystals } from './crystals.js';
console.log(crystals);