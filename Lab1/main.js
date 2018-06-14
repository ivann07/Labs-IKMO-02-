// Вывести alert внешним скриптом
alert("Я – JavaScript!");

// Работа с переменными
let admin;
const NAME = "Василий";
admin = NAME;
alert(admin);

// Объявление переменных
const PLANET1 = "Земля";
const NAME1 = "Петя";

const SIGN_IN_CANCELED = "Вход отменен";

/**
 * Runs all prompts using functions at once
 */
function runAllPrompts() {
    detectTheSign2();
    signInOperator();
    numberMoreThan100();
    ifs2Switch();
}

// Проверка стандарта
/**
 * Checks the original name of JavaScript that has been typed by user
 */
function checkJavaScriptName() {
    let jsInput = document.getElementById("text_js_name");
    const jsInputText = jsInput.value.toString();
    if (jsInputText !== "ECMAScript") {
        alert("Не знаете? \"ECMAScript\"!");
    } else {
        alert("Верно!");
    }
    jsInput.value = "";
}


// Получить знак числа
/**
 * Detects user typed number sign
 */
function detectTheSign() {
    let number = document.getElementById("number");
    const numberAsText = parseInt(number.value);
    number.value = "";
    if (numberAsText === 0) {
        alert("0");
        return;
    }
    else if (numberAsText < 0){
        alert("-1");
        return;
    }
    alert("1");
}

// Получить знак числа через prompt
/**
 * Detects user typed number sign using prompt
 */
function detectTheSign2() {
    let number = prompt('Введите число', String(0));
    if (number > 0) {
        alert( 1 );
    } else if (number < 0) {
        alert( -1 );
    } else {
        alert( 0 );
    }
}

// Проверка логина
/**
 * Checks login and password
 */
function signIn() {
    let login = document.getElementById("login");
    let password = document.getElementById("password");
    let passwordH5 = document.getElementById("password_h5");
    const loginValue = login.value;
    const passwordValue = password.value;
    if ((loginValue === "Админ") && (passwordValue === "")) {
        passwordH5.style.visibility = "visible";
        password.style.visibility = "visible";
    }
    if (loginValue !== "Админ") {
        alert("Я вас не знаю");
        resetSignInObjects();
    }
    if (((loginValue === "Админ") && (passwordValue !== ""))) {
        if (passwordValue === "Черный Властелин") {
            alert("Добро пожаловать!");
        }
        else {
            alert("Пароль не верен");
        }
        resetSignInObjects();
    }
}

/**
 * Sets default values to sign in objects
 */
function resetSignInObjects() {
    let login = document.getElementById("login");
    let password = document.getElementById("password");
    let passwordH5 = document.getElementById("password_h5");
    login.value = "";
    password.value = "";
    passwordH5.style.visibility = "hidden";
    password.style.visibility = "hidden";
}

/**
 * Sets default values to sign in objects and alerts about sign in cancellation
 */
function cancelSignIn() {
    const loginValue = document.getElementById("login").value;
    const passwordValue = document.getElementById("password").value;
    if ((loginValue !== "") || (passwordValue !== "")) {
        resetSignInObjects();
        alert(SIGN_IN_CANCELED);
    }
}

/**
 * Checks if ESC button pressed and current caller-object value is not empty
 * @param keyCode - pressed key code
 * @param objectValue - object value
 */
function onKeyDownLoginPassword(keyCode, objectValue) {
    if ((keyCode === 27) && (objectValue !== "")) {
        cancelSignIn()
    }
}

// Проверка логина через prompt
/**
 * Checks login and password using prompt
 */
function signInOperator() {
    let login = prompt('Введите Логин', '');
    if (login === 'Админ') {
        let password = prompt('Введите Пароль', '');
        if (password === 'Черный Властелин') {
            alert( 'Добро пожаловать!' );
        } else if (password == null) { // (*)
            alert( 'Вход отменен' );
        } else {
            alert( 'Пароль неверен' );
        }
    } else if (login == null) {
        alert( 'Вход отменён' );

    } else {
        alert( 'Я вас не знаю' );
    }
}

// Перепишите 'if' в '?'
function simpilifyIf() {
    const a = 7;
    const b = 8;
    let result = "";
    (a + b < 4) ?  result = 'Мало' : result = 'Много';
    alert('result = ' + result);
}

// Перепишите 'if..else' в '?'
function simpilifyIfElse() {
    const login = "Вася";
    let message = '';
    message = (login === 'Вася') ? 'Привет' :
        (login === 'Директор') ? 'Здравствуйте' :
            (login === '') ? 'Нет логина' :
                '';
    alert('message = ' + message);
}

// Проверка if внутри диапазона
function checkAge14_90Range() {
    const age = 18;
    return ((age >= 14) && (age <= 90));
}

// Проверка if вне диапазона
function checkAgeNotIn14_90Range() {
    const age = 18;
     let result = false;
     result = !((age >= 14) && (age <= 90));
     result = ((age < 14) || (age > 90));
     return result;
}

// Замените for на while
function fromFor2While() {
    let i = 0;
    while (i < 3) {
        alert("номер " + i + "!");
        i++;
    }
}

// Повторять цикл, пока ввод неверен
function numberMoreThan100() {
    let num;
    do {
        num = prompt("Введите число больше 100?", String(0));
    } while (num <= 100 && num != null);
}

// Вывести простые числа
/**
 * Prints all prime numbers from startRange to endRange
 */
function printPrimeNumbers(startRange, endRange) {
    let i = startRange;
    primeWhile:
        while (i <= endRange) {
            for (let j = startRange; j < i; j++) {
                if (i % j === 0) {
                    continue primeWhile;
                }
            }
            alert(i + " - простое число");
            i++;
        }
}

// Напишите "if", аналогичный "switch" using if else construction
/**
 * Indicates supporting browsers
 */
function fromSwitch2IfElse() {
    let browser = "Dolphin";
    if (browser === 'IE') {
        alert( 'О, да у вас IE!' );
        return;
    }
    else if ((browser === 'Chrome') || (browser === 'Firefox') || (browser === 'Safari') || (browser === 'Opera')) {
        alert('Да, и эти браузеры мы поддерживаем');
    }
    alert('Мы надеемся, что и в вашем браузере все ок!');
}

// Переписать if'ы в switch
function ifs2Switch() {
    let a =+ prompt('a?', '');
    switch (a) {
        case 0:
            alert( 0 );
            break;
        case 1:
            alert( 1 );
            break;
        case 2:
        case 3:
            alert( '2,3' );
            break;
    }
}









