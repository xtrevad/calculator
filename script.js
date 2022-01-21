const screen = document.getElementById('screen');
const buttons = document.getElementById('buttons');

const clearBtn = document.getElementById('clear');
clearBtn.addEventListener('click', clearAll)

function clearAll() {
    screen.textContent = '';
    a = '';
    b = '';
    operator = '';
    storedValue = '';
}

let value;

const zero = document.getElementById('zero');
const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');
const five = document.getElementById('five');
const six = document.getElementById('six');
const seven = document.getElementById('seven');
const eight = document.getElementById('eight');
const nine = document.getElementById('nine');
const decimal = document.getElementById('decimal');

const numbers = [zero, one, two, three, four, five, six, seven, eight, nine,];

const divideBtn = document.getElementById('divide');
const multiplyBtn = document.getElementById('multiply');
const subtractBtn = document.getElementById('subtract');
const addBtn = document.getElementById('add');
const operators = [divideBtn, multiplyBtn, subtractBtn, addBtn];
const equals = document.getElementById('equals');

let operator = '';



let storedValue = '';
let a = '';
let b = '';

for (const number of numbers) {
    number.onclick = () => {
        // Enables fresh number inputs when stringing together multiple operations
        if ((operator !== '') && (storedValue === '')) {
            screen.textContent = '';
            storedValue = '';
        };
        screen.textContent += `${number.textContent}`;
        storedValue += `${number.textContent}`;
    };
};

decimal.onclick = decimalFunc;

function decimalFunc() {
    if (!(storedValue.includes('.'))) {
        screen.textContent += '.';
        storedValue += '.';
    } else {
        // Does not allow more than one decimal point
        screen.textContent += '';
        storedValue += '';
    };
};

for (let i=0; i<operators.length; i++) {
    operators[i].onclick = () => {
        b = '';
        if ((operator !== '') && (operator !== '=')) {
            operate();
            storedValue = '';
            operator = `${operators[i].className}`;
        } else {
            operator = `${operators[i].className}`;
                if (a === '') {
                    a = storedValue;
                };
        storedValue = '';
        screen.textContent = '';
        };
    };
};

function operate() {
    b = storedValue;
    if (operator === '+') {
        const num = (Number(a) + Number(b));
        const result = Math.round((num + Number.EPSILON) * 1000) / 1000;
        screen.textContent = `${result}`;
        a = result;
    } else if (operator === '-') {
        num = (Number(a) - Number(b));
        result = Math.round((num + Number.EPSILON) * 1000) / 1000;
        screen.textContent = `${result}`;
        a = result;
    } else if (operator === '*') {
        num = (Number(a) * Number(b));
        result = Math.round((num + Number.EPSILON) * 1000) / 1000;
        screen.textContent = `${result}`;
        a = result;
    } else if (operator === '/') {
        if (Number(b) === 0) {
            clearAll();
            screen.textContent = 'Nice try.';
            setTimeout(() => screen.textContent = '', 1000);
            return;
        } else 
        num = (Number(a) / Number(b));
        result = Math.round((num + Number.EPSILON) * 1000) / 1000;
        screen.textContent = `${result}`;
        a = result;
    };
};

function equalsOperate() {
    operate();
    operator = equals.textContent;
};

equals.onclick = equalsOperate;



// DEV TOOLS
function whereAmI() {
    console.log({operator});
    console.log({a});
    console.log({b});
    console.log({storedValue});
};

 // FUNCTIONALITY TO IMPLEMENT:
        // 1. Backspace
        // 2. Negative/positive number inversions
        // 3. Powers, square roots
        // 4. Keyboard input support (include num pads)
        // 5. Make it a bit prettier.