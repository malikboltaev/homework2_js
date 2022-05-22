let num = +prompt('Введите число')
let power = +prompt('Введите степень')
let result = 1
for(i = 1; i <= power; i++){
    result = result * num
}
alert('Ответ = ' + result)