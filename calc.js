let a = ''; //первая переменная
let b = ''; //вторая переменная
let sign = '';
let finish = false;

const digit = ['1','2','3','4','5','6','7','8','9','0','.'];
const action = ['+','-','/','X'];

const out = document.querySelector('.calc.display.p');

function ClearAll () {
    a = ''; //первая переменная
    b = ''; //вторая переменная
    sign = '';
    finish = false;
    out.textContent = 0;
}