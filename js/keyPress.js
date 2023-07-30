function inputEnter() {
    const cont = document.querySelector('.container');
    const stop = document.querySelectorAll('.catnum');

    window.addEventListener('keyup', function (e) {
        const attack = document.getElementById('kidcat2');
        if (e.keyCode == 13) {
            if (cont.style.touchAction != 'none' && stop[0].disabled == false) {
                attack.click();
            }
        }
    });
}
