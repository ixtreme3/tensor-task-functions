/*
Напишите коллбек для array.filter, который отбирает все числа больше num
 */
export function higherThan(num) {
    return function (element) {
        if (element > num) {
            return true;
        } else {
            return false;
        }
    };
}

/*
Напишите коллбек для array.filter, который отбирает из массива все строки, включающие в себя substr. Регистр важен.
 */
export function hasSubstring(substr) {
    return function (element) {
        if (element.includes(substr)) {
            return true;
        } else {
            return false;
        }
    };
}

/*
Напишите функцию `multiply(num)`, которая работает вот так:

console.log(multiply(5)(10));
// 50
 */
export function multiply(num) {
    let a = num;
    return function (b) {
        return a * b;
    };
}
