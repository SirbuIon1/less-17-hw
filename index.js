var a; var b;
function showElementById(id) {
  document.getElementById(id).classList.remove('hide');
}
function hideElementById(id) {
  document.getElementById(id).classList.add('hide');
}
function enterData() {
  a = Number(prompt('Please enter 1 number = ', 0));
  b = Number(prompt('Please enter  2 number = ', 0));
  document.getElementById('a-number').innerHTML = 'You entered  1 number = ' + a;
  document.getElementById('b-number').innerHTML = 'You entered 2 number =' + b;
 var invalidData = Number.isNaN(a) || Number.isNaN(b);
  if (invalidData) {
    hideElementById('calculate');
  } else {
    showElementById('calculate');
  }
  hideElementById('result');
  showElementById('results-container');
}
function calculatePow() {
  let calculate = a + b;
  document.getElementById('result').innerHTML = 'result: ' + calculate.toFixed(2);
  hideElementById('calculate');
  showElementById('result');
}
document.getElementById('start').addEventListener('click', enterData);
document.getElementById('calculate').addEventListener('click', calculatePow);
