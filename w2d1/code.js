function reverse(string) {
    return string.split('').reverse().join('');
}
function filterLongWords(arr = [], i) {
    return arr.filter(str => str.length > i);

}
function multiply(num = []) {
    return num.reduce((a, b) => a * b);
}
function sum(num = []) {
    return num.reduce((x, y) => x + y);
}

