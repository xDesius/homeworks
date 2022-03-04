
function Username(){

    username = prompt("Как вас зовут?") 
    alert(`Привет, ${username} !`)
}

function userAge() {

    const year = 2022;
    age = prompt("Когда вы родились ?")
    age = year - age
    alert(`Вам ${age} лет`)
}

function perimetr(){

    a = prompt("Длина стороны квадрата?")
    a = a * 4
    alert(`Периметр равен ${a} см`)
}

function ploshad(){

    r = prompt("Радиус окружности ?")
    let s = 3.14 * r ** 2 
    alert(`Площадь окружности ${s} см в квадрате`)
}

function speed(){

    s1 = prompt('Расстояние между городами ?')
    time = prompt('За сколько нужно добраться ?')
    let v = s1 / time
    alert(`Нужно двигаться со скоростью ${v} км/ч`)
}

function convert(){

    const euro = 130
    const dollar = 100
    perevod = prompt('Введите количество долларов')
    perevod = euro / ( perevod * dollar)
    alert(`Вы купили ${perevod} евро`)
}

function storage(){
    const file = 820

    mem = prompt('Сколько Гб ?')
    mem = mem * 1024
    mem = Math.floor( mem / file)
    alert(`На флешку поместится ${mem} файла`)
}

function choco(){

    money = prompt("Сколько у тебя денег ?")
    price = prompt('Цена шоколадки ?')

    moneyOst =  money % price
    chocoNum = Math.floor( money / price)
    
    alert(`Вы купили ${chocoNum} шоколадок, у вас осталось ${moneyOst} рублей`)

}

function perevert(){

    num = prompt('Введите трёх значное число')

    let num2 = num % 10 // 3
    let num3 = num2 * 100 // 300
    num2 = num % 100 // 23
    num2 = Math.floor(num2 / 10) // 2
    num3 = num3 + (num2 * 10) // 320
    num2 = Math.floor(num / 100)
    num3 = num3 + num2 // 321
    alert( `num3` )
}

function numberchet(){

    const number = prompt('Введите число');
    number % 2 == 0 ? alert('Чётное') : alert('Нечётное');
}

Username();
userAge();
perimetr();
ploshad();
speed();
convert();
storage();
choco();
perevert();
numberchet();