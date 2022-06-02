// let input = document.querySelector('.input');
// let input = document.querySelector('.input');
let power = '';

function insert(num) {
    if (document.form.textview.value == 0) {
        document.form.textview.value = '';
        document.form.textview.value = document.form.textview.value + num;
    } else {
        document.form.textview.value = document.form.textview.value + num;
    }
}

function clean() {
    document.form.textview.value = '0';
    power = '';
}

function back() {
    let exp = document.form.textview.value; //текущее состояние текстовой строки
    document.form.textview.value = exp.substring(0,exp.length-1); //получение от 1 до предпоследнего символа
    if (document.form.textview.value == 0) {
        document.form.textview.value = '0';
    }
}

function equal() {
    let exp = document.form.textview.value;
    if (document.form.textview.value.includes('^')) {
        let tmp = document.form.textview.value.split('^');
        let num = eval(power);
        let pow = eval(tmp[1]);
        document.form.textview.value = Number(Math.pow(num,pow));
        power = '';
        return;
    }
    if (exp) {
        document.form.textview.value = eval(exp); //возвращает строку
    }
    power = '';
}
function sqr() {
    document.form.textview.value = Math.pow(eval(document.form.textview.value), 2);
}

function power1() {
    document.form.textview.value = Math.pow(eval(document.form.textview.value), -1);
}

function powerF() {
    power = document.form.textview.value;
    document.form.textview.value += '**';
}

function reversePolish(expression) { //польская нотация
    let arr = expression.split("");
    let stack = [];
    if (arr === '') {
        return 0;
    }

    for (let i = 0; i < arr.length; i++) {
        if (!isNaN(arr[i]) && isFinite(arr[i])) {
            stack.push(arr[i]);
            continue;
        }
        let firstNum = stack.pop();
        let secondNum = stack.pop();

        switch (arr[i]) {
            case '+':
                stack.push(parseInt(firstNum) + parseInt(secondNum));
                break;
            case '/':
                stack.push(parseInt(secondNum) / parseInt(firstNum));
                break;
            case '-':
                stack.push(parseInt(secondNum) - parseInt(firstNum));
                break;
            case '*':
                stack.push(parseInt(firstNum) * parseInt(secondNum));
                break;
        }

    }

    if (stack.length > 1) {
        return "ERROR";
    } else {
        return stack[0];
    }

}

function pol() {
    document.form.textview.value = reversePolish(document.form.textview.value);
}

let val = document.querySelector('#input');
let reg = /[A-Za-zA-Яа-яЁё]/g; //регулярка для цифр

val.oninput = function () {
    if (document.form.textview.value.match(reg)) {
        this.value = this.value.replace(reg, '');
        let lab = document.querySelector('#lab');
        lab.classList.remove('hidden')
    } else {
        let lab = document.querySelector('#lab');
        lab.classList.add('hidden')
    }
}


