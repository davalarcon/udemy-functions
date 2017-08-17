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

var cars = ['ford', 'mazda', 'nizan', 'bmw'];

// cars.forEach((element) => {
//     console.log(element);
// });

for (var i = 0; i < cars.length; i++) {
    console.log(cars[i]);
}

var numbers = [1, 2, 3, 4, 5, 6];
var colors = ['red', 'yellow'];

numbers.forEach(function(colors) {
    if (colors % 2 === 0) {
        console.log(colors);
    }
}, this);