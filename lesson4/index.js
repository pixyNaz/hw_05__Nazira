// return
function square(a) {
    // Выводим результат
    console.log(a * a)
    // возвращаем результат для дальшейших работы
    return a * a
}
// Если return отсутствует, в переменную запишется undefined
var mySquare = square(5)

console.log(mySquare)


// Дз 2 урока 2 задание
function countChar(str, subStr, str1) {
    // мы ничего не передавали в str1, поэтому в нём undefined
    console.log(str1)
    var counter = 0
    for (var i = 0; i < str.length; i++) {
        if (str[i] === subStr) {
            counter++
        }
    }
    return counter
}


console.log(countChar('d', 'edaedda'))

function code () {
    console.log('Кодить')
}

var programmer = {
    level: 'junion',
    // метод
    code: function () {
        console.log('Кодить')
    }
}

// вызов метода
programmer.code()


var array = [1, 2, 3, 54, 546, 2389, 23, 54, 1]

// map, filter, reduce
// Функция, которая передаётся как аргумент или возвращается другой функцией
// назыввается callback-ом


// Filter

// функция callback для filter
function isEven(num) {
    var even = num % 2 === 0
    if (even) {
        return true
    } else {
        return false
    }
}

var массивСЧётными = array.filter(isEven)
console.log(массивСЧётными)

// самодельный фильт
function filter(arr, callback) {
    var newArr = []
    for (var i = 0; i < arr.length; i++) {
        if (callback(arr[i])) {
            newArr.push(arr[i])
        }
    }
    return newArr
}

console.log(filter(array, isEven))





// Map

// функция callback для map
function multiply(num) {
    return num * 2
}

var multiplied = array.map(multiply)
console.log(array, multiplied)



// Reduce

// функция callback для reduce
function add(sum, num) {
    return sum + num
}

// самодельная функция reduce
function reduce(arr, callback) {
    var sum = 0
    for (var i = 0; i < arr.length; i++) {
        sum = callback(sum, arr[i])
    }
    return sum
}

console.log(reduce(array, add))


// метод reduce
var reduced = array.reduce(add)
console.log(reduced)

// Получение div-a с id "square"
var blueSquare = document.getElementById('square')
// Меняем ему цвет фона на красный
blueSquare.style.background = 'red'
