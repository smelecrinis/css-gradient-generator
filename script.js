let colorOne = document.getElementById('color1');
let colorTwo = document.getElementById('color2');
let currentDirection = 'to bottom right';
let outputCode = document.getElementById('code');
let copyBtn = document.getElementById('copy');
let random = document.getElementById('random');
let body = document.querySelector('body');


const setDirection = (value,_this) => {
    let directions = document.querySelectorAll (".buttons button");
    for(let i of directions){
        i.classList.remove('active');    
    }
    _this.classList.add('active');
    currentDirection = value;    
}

const generateCode = () => {
    outputCode.value = `background-image: linear-gradient(${currentDirection}, ${colorOne.value}, ${colorTwo.value});`
    body.style.backgroundImage = `linear-gradient(${currentDirection}, ${colorOne.value}, ${colorTwo.value})`;
}

const handleClick = () => {
    let btnTxt = copyBtn.textContent;
    if (copyBtn.textContent.toLowerCase().includes('copied')) {
        copyBtn.innerText = btnTxt;
    } 
}

const copyText = () => {
    outputCode.select();
    document.execCommand('copy');
    let btnTxt = copyBtn.textContent;
    copyBtn.innerText = 'Copied';
    setTimeout(() => {
        copyBtn.innerText = btnTxt;
    }, 500);
    copyBtn.addEventListener ('click', handleClick);
};

const randomColor = () => {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;    
}

const generateRandom = () => {
    colorOne.value = randomColor();
    colorTwo.value = randomColor();
    generateCode();
}

