function factorial(number) {
    if (number == 1) {
        return 1;
    } else {
        for (let i = number; i > 1; i--) {
            // Recursividade
            return number * factorial(number - 1);
        }
    }
}

console.log(factorial(200));