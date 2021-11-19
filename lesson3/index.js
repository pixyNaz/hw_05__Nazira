// Functions - Функции
var people = [
    {
        name: 'Adilet',
        salary: 23000,
    },
    {
        name: 'Airas',
        salary: 50000
    },
    {
        name: 'Syimyk',
        salary: 59000
    },
    {
        name: 'Meerim',
        salary: 38000
    },
    {
        name: 'Nurdin',
        salary: 15000,
        age: 18,
    },
    {
        name: 'Meerim1',
        salary: 38000
    },
    {
        name: 'Meerim2',
        salary: 38000
    },
    {
        name: 'Meerim3',
        salary: 38000
    },
    {
        name: 'Meerim4',
        salary: 38000
    },
    {
        name: 'Meerim5',
        salary: 38000
    },
]

//     имя функции  аргументы
function increase(name, sum) {
    for (var i = 0; i < people.length; i++) {
        if (people[i].name === name) {
            people[i].salary += sum
        }
    }
}

// вызов функции выполнит код внутри функции
increase('Meerim1', 1000)
increase('Syimyk', 5000)


console.log(people)


// методы
var cat = {
    // метод - функция, которая находится внутри какого-либо объекта
    sayHello: function () {
        console.log('Say mey')
        increaseSalaries()
    },
    name: 'Cat'
}

// вызов метода объекта
cat.sayHello()


// Область видимости - область в которой лежит переменаая
// sayHello находится в другой области видимости - внутри cat, поэтому JS её не увидит
// Область видимости в которой мы создали массив people, объект cat, функцию increase  называется глобальной
var globalVar = 'Я глобальная переменная'
function testFunction() {
    // Мы можем использовать переменные, которые находятся выше по области видимости, но не наоборот!
    console.log(globalVar)
    var innerVariable = 'Я переменная внутри функции'
}


// Запись снизу вызовет ошибку, так как эта переменная определена внутри другой области видимости
// console.log(innerVariable)


// В JS у разных типов данных есть встроенные методы
people.push({name: 'Firdavs', salary: 290000}) // Например: у массивов есть метод push, чтобы
// добавить элемент в самый конец массива



// function declaration
function increaseSalaries() {
    // Отдельная область видимости
    var test = 'test'
    console.log('begin')
    for (var i = 0; i < people.length; i++) {
        people[i].salary += 1000
        if (people[i].name === 'Nurdin') {
            people[i].salary += 1000
        }
    }
     /// ......
}


// function expression
var testFunc = function () {

}


var products = [
    {
        productName: 'milk',
        cost: 48
    },
    {
        productName: 'bread',
        cost: 20
    },
    {
        productName: 'egg',
        cost: 11
    },
]
