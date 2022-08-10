const buttonNum = document.querySelectorAll('[data-cell]');

const calcDisplay = document.querySelector('#calc-display');

const specialBtn = document.querySelectorAll('#special-character');

const equateButton = document.getElementById('equate');

const clearButton = document.querySelector('#clear-btn');

let firstCharacter = '';
let lastCharacter = '';
let specialCharacter = '';

const handleButtonClick = (btn) => {
  const btnValue = btn.target.innerHTML;
  if (firstCharacter.length !== 0 && specialCharacter.length !== 0) {
    calcDisplay.innerHTML += btnValue;
    lastCharacter += btnValue;
  } else {
    calcDisplay.innerHTML += btnValue;
    firstCharacter += btnValue;
  }
};

const updateValue = () => {
  const firstCharacterValue = parseFloat(firstCharacter);
  const lastCharacterValue = parseFloat(lastCharacter);
  if (specialCharacter === '+') {
    const result = firstCharacterValue + lastCharacterValue;
    firstCharacter = result;
    lastCharacter = '';
    calcDisplay.innerHTML = firstCharacter;
  } else if (specialCharacter === '-') {
    const result = firstCharacterValue - lastCharacterValue;
    firstCharacter = result;
    lastCharacter = '';
    calcDisplay.innerHTML = firstCharacter;
  } else if (specialCharacter === 'x') {
    const result = firstCharacterValue * lastCharacterValue;
    firstCharacter = result;
    lastCharacter = '';
    calcDisplay.innerHTML = firstCharacter;
  } else if (specialCharacter === '/') {
    const result = firstCharacterValue / lastCharacterValue;
    firstCharacter = result;
    lastCharacter = '';
    calcDisplay.innerHTML = firstCharacter;
  }
};

const speclialClick = (btn) => {
  const specialValue = btn.target.innerHTML;
  if (
    firstCharacter.length !== 0 &&
    lastCharacter.length !== 0 &&
    specialCharacter.length !== 0
  ) {
    updateValue();
  }

  if (calcDisplay.childNodes.length !== 0) {
    calcDisplay.innerHTML += specialValue;
    specialCharacter = specialValue;
  }
};

const sumUpValue = () => {
  const firstCharacterValue = parseFloat(firstCharacter);
  const lastCharacterValue = parseFloat(lastCharacter);
  if (specialCharacter === '+') {
    const result = firstCharacterValue + lastCharacterValue;
    firstCharacter = result;
    lastCharacter = '';
    calcDisplay.innerHTML = firstCharacter;
  } else if (specialCharacter === '-') {
    const result = firstCharacterValue - lastCharacterValue;
    firstCharacter = result;
    lastCharacter = '';
    calcDisplay.innerHTML = firstCharacter;
  } else if (specialCharacter === 'x') {
    const result = firstCharacterValue * lastCharacterValue;
    firstCharacter = result;
    lastCharacter = '';
    calcDisplay.innerHTML = firstCharacter;
  } else if (specialCharacter === '/') {
    const result = firstCharacterValue / lastCharacterValue;
    firstCharacter = result;
    lastCharacter = '';
    calcDisplay.innerHTML = firstCharacter;
  }
};
buttonNum.forEach((btn) => {
  btn.addEventListener('click', handleButtonClick);
});

specialBtn.forEach((btn) => {
  btn.addEventListener('click', speclialClick);
});

clearButton.addEventListener('click', () => {
  calcDisplay.innerHTML = '';
  firstCharacter = '';
  lastCharacter = '';
  specialCharacter = '';
});

equateButton.addEventListener('click', sumUpValue);

// challenges 1

// const nummberList = Array.from({ length: 10 }, (_, i) => i + 1);

// nummberList.filter((num) => {
//   if (num % 2 === 0) {
//     return console.log(num);
//   }
// });

// challenge 2

const nummberList = Array.from({ length: 12 }, (_, i) => i + 1);

const multipleOfTwo = nummberList.map((num) => {
  return num * 2;
});

console.log(multipleOfTwo);

//challenge 3

// const lengthChecker = (k) => {
//   return k * 0.621371;
// };

// console.log(lengthChecker(5));

//challenge 4

const listArray = [5, 8, 7, 9, 5, 1];
let totalSum = 0;

for (let i = 0; i < listArray.length; i++) {
  totalSum += listArray[i];
}

console.log(totalSum);
