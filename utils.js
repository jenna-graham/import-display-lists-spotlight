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