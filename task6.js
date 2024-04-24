const squareNumber = (num) => num * num;

const checkNumber = (x) => {
    if (x >= 18 && x <= 50) {
        return squareNumber(x);
    } else {
        throw new Error('bad input: number must be between 18 and 50');
    }
}

console.log(checkNumber(18));