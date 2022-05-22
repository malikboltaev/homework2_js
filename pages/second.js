let amount = prompt('Введите количество ступеней')
let symbols = prompt('Введите символ отступов')
let last = prompt('Введите конечный символ')
for(let i = 0; i < amount; i++){
    let line = ''
    for(let j = 0; j < i; j++){
        line += symbols
    }
    console.log(line + last);
}
