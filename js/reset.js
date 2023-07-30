const bighead$ = this.document.querySelector('.bighead');

const first$ = document.querySelector('.first_screen');
const second$ = document.querySelector('.second_screen');
const third$ = document.querySelector('.third_screen');

//처음화면->게임화면
second$.classList.add('none');
third$.classList.add('none');

const kidcatpage$ = document.querySelectorAll('.kidcatpage');
const how$ = document.querySelector('.how');
const lobby$ = document.querySelector('.lobby');

const start_btn$ = document.getElementById('start_btn');
let start_btns;
let game_max_number = 8;
let game_current = 2;

const go_attack$ = document.getElementById('go_attack');
const outbtn = document.getElementById('outer');
const inbtn = document.getElementById('inner');
const tablebtn = document.getElementById('table');
const go_retire$ = document.getElementById('go_retire');
const go_again$ = document.getElementById('go_again');

const comm$ = document.getElementById('common_con');
const commYes = comm$.querySelector('.con_btn .yes');

function createGameBtn(cat) {
    let start_button = document.createElement('BUTTON');
    start_button.value = cat;
    start_button.innerText = cat;
    start_btn$.appendChild(start_button);
}

do {
    createGameBtn(game_current);
    game_current++;
} while (game_current <= game_max_number);

createGameBtn('R');

start_btns = start_btn$.children;
