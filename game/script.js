let buttons = document.querySelectorAll('.btn');
let userscr = document.querySelector('#userScr');
let compscr = document.querySelector('#compScr');
let win = document.querySelector('.dec');
let wholeWin = document.querySelector('.winner');
let res = document.querySelector('#result');
let newgame = document.querySelector('#NewGame');
let resetgame = document.querySelector('#resetGame');
let stone = buttons[0];
let paper = buttons[1];
let scissors = buttons[2];
let usrcount = 0;
let compcount = 0;

const resetGameFn = () => {
    usrcount = 0;
    userscr.innerText = '0';
    compcount = 0;
    compscr.innerText = '0';
    res.innerText = 'Result';
} 


newgame.addEventListener("click", () => {
    resetGameFn();
    wholeWin.classList.remove('fullscrn');
    wholeWin.classList.add('hide');
})

resetgame.addEventListener("click", ()=> {
    resetGameFn();
})


buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        let comp = Math.floor((Math.random()) * 3);
        console.log(comp);
        if (comp === 0) {
            if (btn.innerText === 'stone') {
                res.innerText = 'It is a Draw';
            }
            if (btn.innerText === 'paper') {
                res.innerText = 'You win, your paper beats stone';
                usrcount = usrcount + 1;
                userscr.innerText = usrcount;
            }
            if (btn.innerText === 'scissors') {
                res.innerText = 'You lose, your scissors got beaten by stone';
                compcount = compcount + 1;
                compscr.innerText = compcount;
            }
        }
        if (comp === 1) {
            if (btn.innerText === 'stone') {
                res.innerText = 'You lose, your stone got beaten by paper';
                compcount = compcount + 1;
                compscr.innerText = compcount;
            }
            if (btn.innerText === 'paper') {
                res.innerText = 'It is a Draw';
            }
            if (btn.innerText === 'scissors') {
                res.innerText = 'You win, your scissors beats paper';
                usrcount = usrcount + 1;
                userscr.innerText = usrcount;
            }
        }
        if (comp === 2) {
            if (btn.innerText === 'stone') {
                res.innerText = 'You win, your stone beats scissors';
                usrcount = usrcount + 1;
                userscr.innerText = usrcount;
            }
            if (btn.innerText === 'paper') {
                res.innerText = 'You lose, your paper got beaten by scissors';
                compcount = compcount + 1;
                compscr.innerText = compcount;
            }
            if (btn.innerText === 'scissors') {
                res.innerText = 'It is a Draw';
            }
        }

        if (usrcount === 3) {
            win.innerText = 'Congratulations! You Won!';
            wholeWin.classList.remove('hide');
            wholeWin.classList.add('fllscrn');

        }
        else if (compcount === 3) {
            win.innerText = 'Sorry! You lost!';
            wholeWin.classList.remove('hide');
            wholeWin.classList.add('fllscrn');
        }
    })
})