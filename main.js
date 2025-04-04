function handleClickA() {
  console.log('Button A clicked!');
}

function handleClickB() {
  console.log('Button B clicked!');
}

function getCountElement() {
  let countElement = document.getElementById('count');
  return countElement;
}

function increment() {
  console.log('Increment count');
  let countElement = getCountElement();

  let previousValue = Number(countElement.textContent);
  let newValue = previousValue + 1;

  countElement.textContent = newValue;
}

function decrement() {
  console.log('Decrement count');
  let countElement = getCountElement();

  let previousValue = Number(countElement.textContent);
  let isGreaterThanZero = previousValue > 0;

  if (isGreaterThanZero) {
    let newValue = previousValue - 1;
    countElement.textContent = newValue;
  } else {
    console.log('Number is 0');
  }
}

function reset() {
  console.log('Resetting count');
  let countElement = document.getElementById('count');
  countElement.textContent = 0;
}
