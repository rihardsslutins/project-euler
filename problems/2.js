// 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

const evenFibonacci = (limit) => {
    let sum = 0
    let a = 1
    let b = 1
    let c = a + b
    

    while (c < limit) {

        sum += b        
        
        a = b + c
        b = c + a
        c = a + b
    }
    return sum
}

console.log(evenFibonacci(4000000))