function inputMaker(cat) {
    const kitty$ = document.querySelector('.kitty');

    let kitty_flex = document.createElement('DIV');
    kitty_flex.className = 'kitty_flex';
    kitty$.appendChild(kitty_flex);

    for (let i = 0; i < cat; i++) {
        let kitties = document.createElement('DIV');
        kitties.className = 'kitties';
        kitty_flex.appendChild(kitties);

        let catnum = document.createElement('INPUT');
        catnum.type = 'text';
        catnum.maxLength = 1;
        catnum.autoComplete = 'off';
        catnum.classList.add('catnum', `num_${i + 1}`);
        kitties.appendChild(catnum);
    }
}
