function isEven(num) {
    if (num % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

function factorial(num) {
    var result = 1;
    for (var i = 1; i <= num; i++) {

        result *= i;

    }
    return result;
}

function kebabToSnake(str) {
    var newStr = str.replace(/-/g, "_");
    return newStr;
}

// setInterval(function() {
//     console.log('hello there');
//     console.log('how you doing?');
// }, 2000);