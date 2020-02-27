const $button = document.querySelector('.button');
const $text = document.querySelector('.text');
const $again = document.querySelector('.play-again');
const $attempts = document.querySelector('.attempts');
const $average = document.querySelector('.average');
let start = 0, end = 0, randomTime = 0, timeFromStart;
let colorChange = false;
let waiting = true;
let colorIndex;
let colors = ['#ff2e2e', '#71ff71', '#ffff20', '#ffa706', '#80ffff'];
let attempts = 0;
let sum = 0;
let average = 0;

$button.addEventListener('click', clickButton);

function clickButton() {

    randomTime = ((Math.random() * 2.75) + 1.5) * 1000;

    if (waiting == true) {
        play();
        waiting = false;
    }
    else {

        end = +new Date();
        time = (end - start) / 1000;

        if (colorChange == false) {
            $text.textContent = 'Demasiado pronto';
            attempts--;
            $again.textContent = 'Toca para reiniciar';
            waiting = true;
        }
        else {
            $attempts.textContent = attempts;
            $text.textContent = 'Tiempo de reacción: ' + time + ' segundos';
            $again.textContent = 'Toca para realizar otra medición';
            sum += time;
            average = sum / attempts;
            average = average.toFixed(3);
            $average.textContent = average;
            colorChange = false;
            waiting = true;
        }
    }
}

function play() {
    attempts++;
    $again.textContent = '';
    $text.style['font-size'] = '28px'
    $text.textContent = 'ATENCIÓN: Toca el círculo cuando cambie de color';
    $button.style['background-color'] = 'rgb(189, 189, 189)';
    setTimeout(function () {
        if (!waiting) {
            colorChange = true;
            colorIndex = Math.floor(Math.random() * 5);
            String(colorIndex);
            $button.style['background-color'] = colors[colorIndex];
            start = + new Date();
        }
    }, randomTime);
}

function reset() {
    attempts = 0;
    sum = 0;
    average = 0;
    $attempts.textContent = '0';
    $average.textContent = '0.000';
    waiting = true;
    $text.style['font-size'] = '50px';
    $text.textContent = 'Empezar';
    $again.textContent = '';
    $button.style['background-color'] = 'rgb(189, 189, 189)';
}

