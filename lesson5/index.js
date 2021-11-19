var state = 0


var label = document.getElementById('label')

var btns = document.getElementsByClassName('button')


// ДЗ 1
// =====================================
// Тут без подсказок :)



// =====================================


label.innerText = 0

// ДЗ 2
// =====================================

// Значение которое ввёл пользователь в поле ввода

// ПОДСКАЗКА: чтобы получить значение, которое получил пользователь в текстовое поле, используйте: input.value

var setBtn = document.getElementById('set')

setBtn.onclick = ()=>{
    var input = document.getElementById('input')
    state = input.value
    label.innerText = input.value  //state
}

// ....

// =====================================

btns[0].addEventListener('click', function () {
    state += 1
    label.innerText = state
})

btns[1].addEventListener('click', function () {
    state -= 1
    label.innerText = state
})
btns[2].addEventListener('click', function () {
    state = 0
    label.innerText = state
})


// Tic Tac Toe
// Это стейт - то, где мы будем хранить нужные для игры вещи,
// а именно:
var gameState = {
    // Здесь мы будем храним то, что будет лежать в квадратиках/полях
    fields: [
        // В начале игры в них не будет ни крестиков, ни ноликов
        '', '', '',
        '', '', '',
        '', '', '',
    ],
    // Игрок, который ходит.
    player: 'X'
}

// получаем все квадратики/поля
var fields = document.getElementsByClassName('field')

function start() {
    // Обходим кнопки и добавляем к ним обработчики клика
    for (let i = 0; i < fields.length; i++) {
        // переменная для удобства
        var field = fields[i]

        field.addEventListener('click', function () {
            // в случае клика на этот квадратик, заполняем его знаком игрока
            gameState.fields[i] = gameState.player

            // Перерисовываем все квадратики заново
            render()

            // Проверяем на победу
            check()

            // Меняем игркоа, так как он уже сделал ход: Если это крестик, то меняем игрока на нолик.
            // Если же нет, то значит, что ходил нолик. Поэтому даём ход крестику
            gameState.player = gameState.player === 'X' ? '0' : 'X'
        })
    }
}

// Функция для проверки на выйгрыш
function check() {
    // Тут я создал переменные для удобства
    var squares = gameState.fields
    var player = gameState.player

    // Проверяем каждый вариант
    if (squares[0] === player && squares[1] === player && squares[2] === player) alert(player + ' win!')
    else if (squares[3] === player && squares[4] === player && squares[5] === player) alert(player + ' win!')
    else if (squares[6] === player && squares[7] === player && squares[8] === player) alert(player + ' win!')

    else if (squares[0] === player && squares[3] === player && squares[6] === player) alert(player + ' win!')
    else if (squares[1] === player && squares[4] === player && squares[7] === player) alert(player + ' win!')
    else if (squares[2] === player && squares[5] === player && squares[8] === player) alert(player + ' win!')

    else if (squares[0] === player && squares[4] === player && squares[8] === player) alert(player + ' win!')
    else if (squares[6] === player && squares[4] === player && squares[2] === player) alert(player + ' win!')

        // Метод every: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/every
    // Проверка на ничью, если все эл-ы заполнены, и выигрышна нет. Значит ничья:
    else {
        var isFilled = squares.every(function (square) {
            return square !== ''
        })
        if (isFilled) {
            alert('Draw!')
        }
    }
}

// Функция для отрисовки всех квадратиков/полей
function render() {
    for (var i = 0; i < fields.length; i++) {
        fields[i].innerText = gameState.fields[i]
    }
}

// ДЗ 3
// ============================================
//CamelCase ,snakecase ,
var newGameBtn = document.getElementById('new-game')


newGameBtn.addEventListener('click',()=>{


   for (var i = 0; i < fields.length; i++) {
       gameState.fields[i] = ""
       fields[i].innerText = gameState.fields[i]
    }
})




// ....


// ============================================

// Начинаем игру
start()

