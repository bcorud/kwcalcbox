function avg(numbers) {
    let s = numbers.reduce((prev, curr) => prev + curr, 0);
    return s / numbers.length;
}

function prime(num) {
    if(num <= 1) {
        return false;
    }
    for(let i = 2; i < num; i++) {
        if (num % i ===0) {
            return false;
        }
    }
    return true;
}

function fact(num) {
    if (num >= 16) {
        return -1;
    }
    else if (num === 0) {
        return 1;
    }
    let result = 1;
    for(let i = 1; i <= num; i++) {
        result *= i;
    }
    return result;
}

module.exports = {
    avg,
    prime,
    fact
}