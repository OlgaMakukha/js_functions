function getNumber(x) {
    if (x % 2 === 0) {
        return 'Чётное';
    } else {
        return 'Нечётное';
    }
}

console.log(getNumber(5));