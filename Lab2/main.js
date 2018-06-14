/**
 * Runs all not previously called functions
 */
function runAllOtherFunctions() {
    checkAgeWithType1();
    checkAgeWithType2();
    min(2, 9.7);
    sumToType1(100);
    alert("Type2: Sum is " + sumToType2(100));
    sumToType3(100);
    alert("Factorial of 5 equals " + factorial(5));
    printFibonacciNumbers(7);
}

// Перепишите функцию, используя оператор '?' или '||'
/**
 * Checks user age and asks to confirm parents acceptance if user is under 18
 * Using ? and : construction
 * @returns {boolean} confirmed user or not
 */
function checkAgeWithType1() {
    let age = parseInt(prompt('Ваш возраст'));
    return (age > 18) ? true : confirm('Родители разрешили?');
}
/**
 * Checks user age and asks to confirm parents acceptance if user is under 18
 * Using || construction
 * @returns {boolean} confirmed user or not
 */
function checkAgeWithType2() {
    let age = parseInt(prompt('Ваш возраст'));
    return (age > 18) || confirm('Родители разрешили?');
}

// Функция min
/**
 * Returns the minimum of a and b
 * @param a - first number
 * @param b - second number
 */
function min(a, b) {
    (a > b) ? writeMinimum(b) : writeMinimum(a)
}

/**
 * Writes minimum number
 * @param number - minimum number
 */
function writeMinimum(number) {
    alert("Minimum is " + number);
}

// Функция pow(x,n)
/**
 * Checks future pow arguments to be integer and higher than 1 or equal
 */
function powCheck() {
    const x = document.getElementById("x").value;
    const n = document.getElementById("n").value;
    if ( ((x % 1) === 0) && (x > 1) && ((n % 1) === 0) && (n > 1) ) {
        pow(x, n)
    }
    else {
        alert("Error: arguments have to be integer and higher than 1 or equal")
    }
    cleanX_NFields();
}

/**
 * Raises x to the power of n
 * @param x
 * @param n
 */
function pow(x, n) {
    let result = x;
    for (let i = 1; i < n; i++) {
        result *= x;
    }
    alert(x + " ^ " + n + " = " + result);
}

/**
 * Cleans number and power fields values
 */
function cleanX_NFields() {
    document.getElementById("x").value = "";
    document.getElementById("n").value = "";
}

// Вычислить сумму чисел до данного
/**
 * Sums with loop for
 * @param limiter - numbers that limits the sum
 */
function sumToType1(limiter) {
    let sum = 0;
    for (let i = 1; i <= limiter; i++) {
        sum += i;
    }
    alert("Type1: Sum is " + sum);
}

/**
 * Sums with recursion
 * @param limiter - numbers that limits the sum
 * @returns sum to current limiter
 */
function sumToType2(limiter) {
    if (limiter === 1) {
        return 1;
    }
    return limiter + sumToType2(limiter - 1);
}

/**
 * Sums with limiter * (limiter + 1 ) / 2
 * @param limiter - numbers that limits the sum
 */
function sumToType3(limiter) {
    alert("Type3: Sum is " + (limiter * (limiter + 1 ) / 2));
}

// Вычислить факториал
/**
 * Calculates factorial of number
 * @param n - that number
 * @returns {number} - factorial of n
 */
function factorial(n) {
    return n ? n * factorial(n - 1) : 1;
}

// Числа Фибоначчи
/**
 * Calculates n-Fibonacci number
 * @param n number Fibonacci
 * @returns {number} Fibonacci number
 */
function printFibonacciNumbers(n) {
    let a = 1,
        b = 1;
    for (let i = 3; i <= n; i++) {
        let c = a + b;
        a = b;
        b = c;
    }
    alert(n + "-Fibonacci number is " + b);
}
