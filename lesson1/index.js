// number, string, boolean, object, undefined, null, symbol

// varForNumber - переменные называть в таком ключе
// Переменные нельзя начианать с чисел!


// number
// Этот тип озночает все числа (отрицательные, дробные и др.)
var variable = -100001232.1231
// положили в коробку другое число, выбросив старое
variable = 1

// string
var string1 = 'Adilet'
var string2 = ' Sataev'
//             0123456

// indexing - индексация симоволов в строке начинается с нуля
console.log(string2[6]) // получим букву 'v'
console.log(string2[0]) // получим ' '

// boolean

var myBool = true

// object
// объект, условно говоря, коробка в которой лежат другие коробки
var myObject = {
    name: 'Vladilen', age: 18, sex: 'Male', height: 170, innerObject: {
        val: 'val'
    }
}

myObject.height = 160
// как обратится к объекту внутри объекта
myObject.innerObject.val


// null
// обозначаем, что это поле (коробка внутри коробки) пустое
myObject.age = null

// undefined
// undefined даётся всем переменным (коробкам), в которые мы ничего не положили.
// С английского переводится как "Неопределенный", т.е. мы не определили пеменную (ничего не положили в коробку)
var test // undefined
var test = undefined

// Expressions
// math operators
//       operand  operator    operand
var sum = 1000       *          1000


sum = sum - 1000
sum /= 1000 // это лишь сокращенная запись  sum = sum / 1000,
sum -= 1000 // sum = sum - 1000


sum = 9 / 3

// NaN - Not A Number - не число
var test2 = 'string' * 10

// Operators  ==, <, >, ===, &&, ||, !=, !==, >=, <=

var freeTime = false
var hwIsEasy = false
var vibe = true

// буду делать дз, если на это есть хоть 1 причина
var hw = freeTime || vibe || hwIsEasy

// буду делать дз если на это есть все 3 причины
hw = freeTime && vibe && hwIsEasy

// домашнее задание мы делать не будем, так как настроения (vibe) у нас нет
if (hw) {
    console.log("делай дз")
}


var age = 18

if (age < 18) {
    console.log('Тебе сюда нельзя!');
    console.log('Иди отсюда!')
} else if (age == 18) {
    console.log('Мы подумаем.')
} else {
    console.log('Можешь войти!')
}

// операторы >= и <=
var equal = 2 >= 2 // true, так как 2 равно 2
var more = 2 >= 3 // false, т.к. 2 не больше и не равно 3
var less = 3 <= 4 // true, т.к. 3-ка не равна 4, но меньше ее

// Другой вариант
var myAge = 19

// Если мой возраст (myAge) больше или равен 18, выводим в консоль, что я совершеннолетний
if (myAge >= 18) {
    console.log('Ты совершеннолетний')
}
// Если нет, то выводим в консоль:
else {
    console.log('Ты несовершеннолетний')
}

// Операторы равенства
// === против ==
// ===  более строгое сравнение. Рекомендуется
// == неточное сравнение с точки зрения типов данных



// здесь число (number) 1 преобразуется/трансформируется в '1' (string)
var num = 1 == '1' // true, так как '1' == '1'
var num1 = 1 === '1' // false, т.к. с === такое не прокатит
// Испльзуйте === !!!



// Оператор неравенства
// (!=, !==) - это противополжности == и !==
// рекомендуется всегда использовать !==
var number1 = 1 != '1' // false так как 1 равен 1
var number2 = 1 !== '1' // true, так как преобразование числа в строку не происходит

var number3 = 2 !== 3 // true, т.к 2 не равно 3
var number4 = 3 !== 3 // false, это утверждение ложное. 3 === 3
// про == и != пока можно забыть




// typeof - оператор, помогающий узнать тип переменной
var type = typeof string2 // string

// alert выводит переданные ему значения в специальном окошке браузера
alert('Hello World')
alert(' eggs ')

// prompt выводит в браузере окошко, которое просит ввести что-либо
// введённое значение мы записываем в переменную username
var username = prompt('Введите своё имя')
console.log(username)

// пройдём на следующих уроках
var p = document.getElementById('p')
p.innerText = username

