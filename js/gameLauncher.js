//처음화면->게임화면
// $first.style.display="none";
second$.style.display = 'none';
third$.style.display = 'none';

//개발자 페이지행

Array.prototype.forEach.call(kidcatpage$, (data) => {
    data.addEventListener('click', function () {
        location.href = 'http://kidcatnyantopia.net';
    });
});

//처음화면->게임방법
how$.addEventListener('click', function () {
    first$.style.display = 'none';
    second$.style.display = 'block';
    bighead$.style.alignItems = 'flex-start';
});

//게임방법->처음화면
lobby$.addEventListener('click', function () {
    first$.style.display = 'block';
    $second.$style.display = 'none';
    bighead$.style.alignItems = 'center';
});

let comAttack = [];
let meow = 0;
let tscore;
let play = 0;
let myOut = 0;
let outArr = ['원', '투', '쓰리'];
let myAttack = [];
let myStrike = 0;
let myBall = 0;

Array.prototype.forEach.call(start_btns, (data) => {
    data.addEventListener('click', function () {
        alertCommon(1);
        meow = Number(this.value);
        if (!meow) {
            meow = randomValue();
        }
        let com = startCheck(meow);
        comAttack = [...com];
        first$.style.display = 'none';
        third$.style.display = 'block';
        bighead$.style.alignItems = 'flex-start';
        tscore = totalScore(meow);
        scoreBoard(tscore);
        countMaker(meow);
        firstFocus();
        nextFocus(meow);
        inputEnter();
    });
});

go_attack$.addEventListener('click', function () {
    play++;
    firstFocus();
    nextFocus(meow);
    offLight();

    myAttack = attackNumber(meow);
    myStrike = strikeCount(comAttack, myAttack, meow);
    myBall = ballCount(comAttack, myAttack, meow);

    if (outCount(myStrike, myBall)) {
        myOut++;
        outLight(myOut);
        if (myOut < 3) {
            alertCommon(2, myStrike, myOut);
        }
        tscore = outScore(tscore);
    }

    if (commYes.classList.contains('outFd')) {
        tscore = tscore - 5000;
        commYes.classList.remove('outFd');
    }

    if (commYes.classList.contains('inFd')) {
        tscore = tscore - 8000;
        commYes.classList.remove('inFd');
    }

    if (commYes.classList.contains('tableSt')) {
        tscore = tscore - 20000;
        commYes.classList.remove('tableSt');
    }

    // tscore=numberChecker(comAttack, myAttack, meow, tscore);

    ballLight(myBall);
    strikeLight(meow, myStrike);

    gameBoard(play, myAttack, myBall, myStrike, myOut);
    dashAttack(myAttack);

    tscore = scoreCalculator(tscore, meow, myStrike);
    tscore = endGame(tscore, myOut, myStrike, meow, comAttack, play);
    scoreBoard(tscore);
});

outbtn.querySelector('.store_btn').addEventListener('click', function () {
    tscore = outField(tscore, meow, comAttack);

    scoreBoard(tscore);
});

inbtn.querySelector('.store_btn').addEventListener('click', function () {
    tscore = inField(tscore, meow, comAttack);
    scoreBoard(tscore);
});

tablebtn.querySelector('.store_btn').addEventListener('click', function () {
    tscore = tableSeat(tscore, meow, comAttack);
    scoreBoard(tscore);
});

go_retire$.addEventListener('click', function () {
    confirmCommon(1, tscore, meow, comAttack, play);
});

go_again$.addEventListener('click', function () {
    confirmCommon(2, tscore, meow, comAttack, play);
});
