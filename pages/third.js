    let name = prompt('Введите ваше имя')
    let birth = +prompt('Введите год рождения')
    let year = +prompt('Введите нынешний год')
    alert('Имя ' + name + ', ' + 'год рождения ' + birth + ', ' + 'нынешний год ' + year)    
    function info(){
        let age = (year - birth)
        alert(name + ', ' + 'Ваш возраст ' + age)
}
alert(info())
