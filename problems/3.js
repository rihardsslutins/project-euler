const largestPrimeFactor = (n) => {
    let lastFactor;
    if (n % 2 === 0) {
        n = n / 2;
        lastFactor = 2;
        while (n % 2 === 0) {
            n = n / 2;
        }
    } else {
        lastFactor = 1;
    }
    factor = 3;
    while (n > 1) {
        if (n % factor === 0) {
            n = Math.floor(n / factor);
            lastFactor = factor;
            while (n % factor === 0) {
                n = Math.floor(n / factor);
            }
        }
        factor = factor + 2;
    }
    return lastFactor;
};

console.log(largestPrimeFactor(600851475143));
