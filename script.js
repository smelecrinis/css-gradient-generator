let colorOne = document.getElementById('color1');
let colorTwo = document.getElementById('color2');
let currentDirection = 'to bottom right';
let outputCode = document.getElementById('code');
let copyBtn = document.getElementById('copy');
let random = document.getElementById('random');
let body = document.querySelector('body');


function setDirection(value,_this) {
    let directions = document.querySelectorAll (".buttons button");
    for(let i of directions){
        i.classList.remove('active');    
    }
    _this.classList.add('active');
    currentDirection = value;    
}

function generateCode() {
    outputCode.value = `background-image: linear-gradient(${currentDirection}, ${colorOne.value}, ${colorTwo.value});`
    body.style.backgroundImage = `linear-gradient(${currentDirection}, ${colorOne.value}, ${colorTwo.value})`;
}

function copyText() {
    outputCode.select();
    document.execCommand('copy');
    copyBtn.value = 'btnTxt';
    copyBtn.innerText = 'Copied';
    
    copyBtn.addEventListener ('click', function handleClick() {
        let initialText = 'Copy'
        if (copyBtn.textContent.toLowerCase().includes(initialText.toLowerCase())) {
        copyBtn.innerText = 'Copied';
        } else {
        copyBtn.innerText = initialText;
        }        
    });    
};

function randomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;    
}

function generateRandom() {
    colorOne.value = randomColor();
    colorTwo.value = randomColor();
    generateCode();
}

