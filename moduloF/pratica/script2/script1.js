function evenOdd(number) {
    if (number % 2 == 0) {
        return ('Par');
    } else {
        return ('Impar');
    }
}

console.log("O número é: " + evenOdd(20));