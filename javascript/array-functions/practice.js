function camelize(str) {
  return str
    .split('-')
    .map((word, index) => index ===0 ? word : word[0].toUpperCase() + word.slice(1))
    .join('');
};

function filterRange(arr, a, b) {
  return arr
    .filter((num) => (a <= num && num <= b));
};

function filterRangeInPlace(arr, a, b) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < a || arr[i] > b) {
      arr.splice(i, 1);
      i--;
    };
  };
  return arr;
};

function sort(arr) {
arr.sort((a, b) => b - a);
};

function copySorted(arr) {
  return arr.slice().sort();
};

function calculate(str) {
  
}