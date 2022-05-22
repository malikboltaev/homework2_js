let a = prompt('Сколько примеров вы хотите решить?');

for (let i = 0; i < a; i++){
  let b = 0
  let c = 10
  let symbol = (randomSymbol())
  let d = randomizer(b,c)
  let h = randomizer(b,c)
  let answer = prompt(example())
  alert(checkResult())

  function randomizer(b,c){
    return Math.floor(Math.random() * ((c - b)) + 1)
  }

  function randomSymbols(x,y){
    x = 0
    y = 4
    return Math.floor(Math.random() * ((y - x)) + 1)
  }

  function randomSymbol(){
    let mySymbol = randomSymbols()
    return mySymbol == 1 ? '-' : mySymbol == 2 ? '+' : mySymbol == 3 ? '*' : '/';
  }
  
  function randomNumber(){
    return (eval((d + symbol + h)))
  }
  function example(){
    return ('Решите пример: ' + d + symbol + h + '= ')
  }
  function checkResult(){
    return (answer == randomNumber()) ? 'Правильно, Молодец' : 'Ответ неверный, правильный ответ: ' + randomNumber()
  }
}


