export function renderDragon(dragon) {
    const div = document.createElement('div');
    div.classList.add('dragon');

    const h1 = document.createElement('h1');
    h1.textContent = dragon.name;

    const img = document.createElement('img');
    img.src = dragon.image;

    const p = document.createElement('p');
    p.textContent = `${dragon.name} is ${dragon.length} feet long with a fear factor of ${dragon.fearFactor}.`;
    
    const h2 = document.createElement('h2');
    h2.textContent = 'Known for:';

    const ul = document.createElement('ul');
    for (let trait of dragon.traits) {
        const li = document.createElement('li');
        li.textContent = trait;
        ul.append(li);
    }

    div.append(h1, img, p, h2, ul);
    return div;

}
export function renderChild(child) {
    const div = document.createElement('div');
    div.classList.add('child');

    const h1 = document.createElement('h1');
    h1.textContent = child.name;
    
    const img = document.createElement('img');
    img.src = child.image;

    const p = document.createElement('p');
    p.textContent = `${child.name} is ${child.age} years old and loves to eat ${child.favoriteFood}!`;

    const h2 = document.createElement('h2');
    h2.textContent = 'Hobbies';

    const ul = document.createElement('ul');
    for (let hobby of child.hobbies) {
        const li = document.createElement('li');
        li.textContent = hobby;
        ul.append(li);
    }
    div.append(h1, img, p, h2, ul);
    return div;
}

export function renderCrystal(crystal) {
    const div = document.createElement('div');
    div.classList.add('crystal');

    const h1 = document.createElement('h1');
    h1.textContent = crystal.name;

    const img = document.createElement('img');
    img.src = crystal.image;

    const p = document.createElement('p');
    p.textContent = `${crystal.name} is ${crystal.color} and is the birthstone for ${crystal.birthMonth}.`;

    const h2 = document.createElement('h2');
    h2.textContent = 'Properties';

    const ul = document.createElement('ul');
    for (let property of crystal.healingProperties) {
        const li = document.createElement('li');
        li.textContent = property;
        ul.append(li);
    } 

    div.append(h1, img, p, h2, ul);

    return div;
}