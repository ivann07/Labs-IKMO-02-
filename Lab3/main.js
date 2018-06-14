/**
 * Runs all functions
 */
function runAllFunctions() {
    useDualMethodCalculator();
    showSelfReturnExample();
    alert(sum(5)(6)(-7));
    setUpCalculator();
    setUpCalculator2();
    calculateEratosthenesCell();
}

// Создайте объект calculator с тремя методами
/**
 * Implements calculator methods
 */
function useDualMethodCalculator() {
    let calculator = {
        read:
            function() {
                this.a = +prompt('Введите значение a', 0);
                this.b = +prompt('Введите значение b', 0);
            },
        sum:
            function() {
                return this.a + this.b;
            },
        mul:
            function() {
                return this.a * this.b;
            }
    };
    calculator.read();
    alert(calculator.sum());
    alert(calculator.mul());
}

// Цепочка вызовов
/**
 * Shows how to use self return object example
 */
function showSelfReturnExample() {
    const ladder = {
        step: 0,
        up:
            function() {
                this.step++;
                return this;
            },
        down:
            function() {
                this.step--;
                return this;
            },
        showStep:
            function() {
                alert( this.step );
                return this;
            }
    };
    ladder.up().up().down().up().down().showStep();
}

// Сумма произвольного количества скобок
/**
 * Sums numbers
 * @param a one of numbers
 * @returns sum of numbers
 */
function sum(a) {
    let currentSum = a;
    function innerSum(b) {
        currentSum += b;
        return innerSum;
    }
    innerSum.toString = function() {
        return currentSum;
    };
    return innerSum;
}

// Создать Calculator при помощи конструктора
/**
 * Creates Calculator object and calls its methods
 */
function setUpCalculator() {
    const calculator = new Calculator();
    calculator.read();
    alert( "Сумма: " + calculator.sum() );
    alert( "Произведение: " + calculator.mul() );
}

/**
 * Represents class Calculator and implements its methods
 * @constructor
 */
function Calculator() {
    this.read = function() {
        this.a =+ prompt('Введите a', String(0));
        this.b =+ prompt('Введите b', String(0));
    };
    this.sum = function() {
        return this.a + this.b;
    };
    this.mul = function() {
        return this.a * this.b;
    };
}

// Создайте калькулятор
/**
 * Creates Calculator2 object, adds and calls its methods
 */
function setUpCalculator2() {
    let calc = new Calculator2;
    calc.addMethod("*", function(a, b) {
        return a * b;
    });
    calc.addMethod("/", function(a, b) {
        return a / b;
    });
    calc.addMethod("**", function(a, b) {
        return Math.pow(a, b);
    });
    let result = calc.calculate("2 ** 3");
    alert( result ); // 8
}

/**
 * Represents class Calculator and implements its methods
 * @constructor
 */
function Calculator2() {
    let methods = {
        "-": function(a, b) {
            return a - b;
        },
        "+": function(a, b) {
            return a + b;
        }
    };
    this.calculate = function(str) {
        let split = str.split(' '),
            a = +split[0],
            op = split[1],
            b = +split[2];
        if (!methods[op] || isNaN(a) || isNaN(b)) {
            return NaN;
        }
        return methods[op](a, b);
    };
    this.addMethod = function(name, func) {
        methods[name] = func;
    };
}

// Решето Эратосфена
/**
 * Calculates Eratosthenes Cell
 */
function calculateEratosthenesCell() {
    var arr = [];
    for (var i = 2; i < 100; i++) {
        arr[i] = true
    }
    let p = 2;
    do {
        for (i = 2 * p; i < 100; i += p) {
            arr[i] = false;
        }
        for (i = p + 1; i < 100; i++) {
            if (arr[i]) break;
        }
        p = i;
    } while (p * p < 100);
    let sum = 0;
    for (i = 0; i < arr.length; i++) {
        if (arr[i]) {
            sum += i;
        }
    }
    alert("Eratosthenes Cell is " + sum);
}
