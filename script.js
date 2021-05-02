const grid = document.querySelector('.grid-container');


const squarediv = 16;

// create grid
creategrid(squarediv);


// clear
const clear = document.querySelector('.clear');
clear.addEventListener('click', remove);


// Range and Value
const range = document.querySelector('.range');
const number = document.querySelector('.value');

// change range value
range.addEventListener('input', function(){
    number.innerHTML = range.value;
})

// new Grid
let changbuton = document.querySelector('.change');
changbuton.addEventListener('click', function(){
    removeCells();
    creategrid(range.value);
})

// RGB color
let rgbcolor = document.querySelector('.rgb');
rgbcolor.addEventListener('click', function(){
    let squarediv = range.value;
    let cell = grid.children;
    for (let i = 0; i < squarediv * squarediv; i++) {
        cell[i].addEventListener('mouseover', function(e){
            e.target.style.backgroundColor = rgbColor();
        }); 
    }
})

// Random Color
let randomcolor = document.querySelector('.color');
randomcolor.addEventListener('input', function(){
    let squarediv = range.value;
    let newcolor = randomcolor.value;
    let cell = grid.children;
    for (let i = 0; i < squarediv * squarediv; i++) {
        cell[i].addEventListener('mouseover', function(e){
            e.target.style.backgroundColor = newcolor;
        }); 
    }
}) 

// Functions

function remove(){
    let cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
        cell.style.backgroundColor = 'white';
    })
}


function creategrid(squarediv){
    removeCells();
    grid.style.gridTemplateColumns = (`repeat(${squarediv}, 2fr`);
    grid.style.gridTemplateRows = (`repeat(${squarediv}, 2fr`);
    for (let i = 0; i < squarediv * squarediv; i++) {
        let div = document.createElement('div');
        div.classList.add('cell')
        div.addEventListener('mouseover', function(e){
            e.target.style.backgroundColor = 'black';
        });
        grid.appendChild(div);
        
    }
}


function removeCells() {
    while(grid.firstChild) {
      grid.removeChild(grid.firstChild);
    }
}

function rgbColor(){
    let letters = '0123456789ABCDEF';
    let color = '#';

    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// function hoverColor(e){
//     if (rgbcolor.addEventListener('click', function(){
//         let randmcolor = randomColor();
//         e.target.style.backgroundColor = randmcolor;
//     }))
//     e.target.style.backgroundColor = 'black';
// }










