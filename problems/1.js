const divisibleBy = (max) => {
    let sum = 0;

    for (let i = max; i > 0; i--) {
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i;
        }
    }
    return sum;
}

console.log(divisibleBy(999));