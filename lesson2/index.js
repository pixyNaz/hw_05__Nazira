// Программа - последовательность действий приводящих к результату

var weather = 'sunny'

var response = weather === 'sunny'

if (weather === 'sunny') {
    console.log('оденься легко')
}
else if (weather === 'rainy') {
    console.log("захвати зонтик")
}
else if (weather === 'cold') {
    console.log('оденься тепло')
}



// Одно целое - при выполнении одного условия другие даже не проверяются
var var1 = 1
var var2 = 2
if (var1 === var2) {
    console.log('something')
}
else if (var1 > var2) {
    console.log('var > var2')
}
else {
    console.log('var1 < var2')
}
// -------------



// Примитивные типы данных
var myUndefined // undefined
var myNull = null
var myString = 'test'
var myNum = 1
var myBool = false
// symbol, bigint

// Единственный не примитивный тип - объекты



var obj = {
    property: 'value', // св-во
}

// Добавление данных в объекты
obj.newProp = 5

var person = {
    // properties : values
    name: 'name',
    surname: 'surname'
}


// Arrays - Массивы
var personArr = ['name', 'surname']
var personName = personArr[1] // name



//              0        1       2    3  4  5
var myArr = [myString, myNum, myBool, 1, 2, 4]
console.log(myArr, '--- before')
myArr[0] // myString
myArr[2] = {} // Теперь myNum заменён пусты объектом
myArr[0] = null
myArr[-1] = 'val' // можете взять любой индекс и присвоить ему значение
myArr[1000] = 1
console.log(myArr, '--- after')


// всё в JS объекты, кроме примитивных типов данных
// массив - это объект усовершенствованный объект
var arr = {
    0: 1,
    1: 'string',
    2: {},
    length: 3
}



// Cycles
//          true or false
// пока (домашка не выполнена) {
//     делать
// }


// while

var i = 0 // счётчик

// Обход массива
// пока счётчик меньше длины массивы, мы будем выводить в консоль myArr[i]
while (i < myArr.length) {
    console.log(myArr[i])
    i = i + 1
    // i += 1
    // i++
}

var people = [
    {
        name: 'Adilet',
        salary: 23000
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
        salary: 15000
    }
]

// for - цикл для обхода по структурам данных (объектов, массивов)
// Здесь мы проходимся по списку сотрудников и увеличиваем им зарплату
for (var i = 0; i < people.length; i++) {
    var person = people[i]
    // persons.salary = person.salary * 2
    person.salary *= 2
}

console.log(people, '- after')

// Math -  объектов, предоставляемый js для математ. операций
console.log(Math.floor(2.5))
console.log(Math.abs(-100))
console.log(Math.random()) // даёт рандомное число от 0 до 1


// переменные - это ссылки
var a = [1,2,3]
var b = a // [1,2,3]
b[0] = 0

var num = 1
var num1 = num

num = 0
console.log(num1)
// console.log(a, b)
