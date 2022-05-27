const firstNum = document.querySelector('#num-1');
const lastNum = document.querySelector('#num-2');
const outPut = document.querySelector('.output');
const generate = document.querySelector('.generate');
const inputFont = document.querySelector('#input-font');
const option = document.querySelector('.option');

firstNum.addEventListener('input', (e) => {
    num1 = parseFloat(firstNum.value);
});

lastNum.addEventListener('input', (e) => {
    num2 = parseFloat(lastNum.value);
});

let firstArray = [];
let secondArray = [];
let thirdArray = [];
let fourthArray = [];
let fifthArray = [];

let currentNum = 18;

let added = 0;

// console.log(firstArray);
// console.log(firstArray.indexOf(5));

generate.addEventListener('click', () => {
    let counter = num1;
    while (counter <= currentNum) {
        const newDiv = document.createElement('div');
        newDiv.innerHTML = counter;
        console.log(counter);
        firstArray.push(newDiv);
        counter++;
    }
    outPut.append(firstArray);
    // console.log(firstArray);
    // console.log(firstArray.length - 1);
    // let firstArray = [];
    // while (firstArray <= currentNum) {
    //     console.log('this array contains' + ' ' + firstArray);
    //     firstArray++;
    // }
});
// console.log(firstArray.length);
// console.log('the length is' + ' ' + firstArray.length);

//
//
//
//
//
//
//
//
//
//

// end of this code

// start of this code

// // const flexDiv = document.querySelector('.flex');
// // const firstDiv = document.querySelector('.div1');

// firstNum.addEventListener('input', (e) => {
//     num1 = parseFloat(firstNum.value);
// });

// lastNum.addEventListener('input', (e) => {
//     num2 = parseFloat(lastNum.value);
// });

// button.addEventListener('click', () => {
//     let counter = num1;
//     while (counter < num2) {
//         let newDiv = document.createElement('div');
//         newDiv.innerText = counter;
//         outPut.append(newDiv);
//         counter++;
//     }

//     // from outside
//     // var changeFontStyle = function(font) {
//     //     // document.getElementById('output-text').style.fontFamily = font.value;
//     //     newDiv.innerText.style.fontFamily = font.value;
//     // };
//     // changeFontStyle();
// });

// option.addEventListener('Click', () => {
//     console.log('hello world');
// });