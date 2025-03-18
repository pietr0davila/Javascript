function factorial(number) {
    let factor = 1;
    for (let i = number; i > 1; i--){
        factor *= i;
    }
    return factor;
    // 5! = 5x4x3x2x1
}

console.log(factorial(5));