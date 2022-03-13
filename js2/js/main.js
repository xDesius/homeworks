
function age(){
    
    let age = prompt('Сколько вам лет ?')

    if (age < 12){
        alert('Вы ребёнок!')
    } else if (age < 18){
        alert('Вы подросток!')
    } else if (age < 60){
        alert('Вы взрослый!')
    } else if (age >= 60 ){
        alert('Вы пенсионер')
    }

}

function symbol(){

    let sym1 = prompt('Введите число от 0 до 9')

    sym1 = Number(sym1)

    switch (sym1){

        case 0:
            alert(')')
            break;
        case 1:
            alert('!')
            break;
        case 2:
            alert('@')
            break;
        case 3:
            alert('#')
            break;
        case 4:
            alert('$')
            break;
        case 5:
            alert('%')
            break;
        case 6:
            alert('^')
            break;
        case 7:
            alert('&')
            break;
        case 8:
            alert('*')
            break;
        case 9:
            alert('(')
            break;
        default:
            alert('Неверное число')
    }
}

function isNumberSimilar(){

    let num = prompt('Введите трёхзначное число') // 123

    let num1 = num / 100
    num1 = Math.floor(num1) // 1
    let num2 = (num % 100) / 10
    num2 = Math.floor(num2) // 2
    let num3 = num % 10 // 3
    
    if (num1 == num2 || num2 == num3 || num1 == num3){
        alert('Есть одинаковые числа')
    } else {
        alert('Нет совпадений')
    }
    


}

function isYear(){

    let year = prompt('Введите год')

    if ( year % 4 === 0 || year % 400 === 0){
        alert('Високосный')
    } else {
        alert('Обычный')
    }
}

function isPolindrom(){

    let num = prompt('Введите пятизначное число')

    let numReverse = num.split('').reverse().join('')

    if( num === numReverse){
        alert('Палиндром')
    } else {
        alert('Обычное число')
    }
}

function converter() {

    const EUR = 1.09
    const UAN = 0.03314
    const AZN = 0.58978

    let num =  prompt('Введите сумму (USD)')
    let val =  prompt('Введите валюту (EUR, UAN, AZN)')
    val = val.toUpperCase()
    
    switch(val){

        case 'EUR':
            num = num * EUR
            num = Math.trunc(num)
            alert(` EUR ${num} `)
            break;
        case 'UAN':
            num = num * UAN
            num = Math.trunc(num)
            alert(` UAN ${num} `)
            break;
        case 'AZN':
            num = num * AZN
            num = Math.trunc(num)
            alert(` AZN ${num} `)
            break;
    }
}

function sale() {

    let num = prompt('Сумма покупки')

    if (num <= 300 && num >= 200){
        num = num - (num * 0.03)
        num = Math.trunc(num)

        alert(`Сумма покупки с применением скидки - ${num} `)
    } else if (num > 300 && num <= 500){
        num = num - (num * 0.05)
        num = Math.trunc(num)

        alert(`Сумма покупки с применением скидки - ${num}`)
    } else if ( num > 500){
        num = num - (num * 0.07)
        num = Math.trunc(num)

        alert(`Сумма покупки с применением скидки - ${num}`)
    }  else {
        alert('Сумма покупки не превышает 200 рублей')
    }
    
}

function geometry() {

    let L = prompt('Длина окружности')
    let P = prompt('Периметр квадрата')

    let d = (L / (Math.PI * 2)) * 2 // получаем радиус и умножаем на 2 == получаем диаметр
    let a = P / 4 // получаем сторону квадрата

    if (d <= a){
        alert('Окружность поместиться в квадрат')
    } else{
        alert('Окружность не поместиться в квадрат')
    }
}

function questions() {
    let num = 0

    let quest1 = prompt('Дата окончания Первой Мировой войны?  1. 1917 2. 1918 3.1915')
    quest1 = Number(quest1)
    let quest2 = prompt('Дата начала Второй Мировой войны 1.1941 2. 1945 3.1939')
    quest2 = Number(quest2)
    let quest3 = prompt('Дата выхода Windows 7 1.2009 2.2010 3. 2012')
    quest3 = Number(quest3)
    
    switch (quest1){
        case 1:
            num += 0
            break;
        case 2: 
            num += 2
            break;
        case 3:
            num += 0 
            break;
        default:
            alert('Вы не ответили на вопрос')
    }
    switch (quest2){
        case 1:
            num += 0
            break;
        case 2: 
            num += 0
            break;
        case 3:
            num += 2
            break;
        default:
            alert('Вы не ответили на вопрос')
    }
    switch (quest3){
        case 1:
            num += 2
            break;
        case 2: 
            num += 0
            break;
        case 3:
            num += 0
            break;
        default:
            alert('Вы не ответили на вопрос')
    }

    alert(`Вы набрали ${num} баллов`)
}   

function calendar() {
    
    let day = prompt('Введите день')
    let month = prompt('Введите месяц')
    let year = prompt('Введите год')

    day = Number(day)
    month = Number(month)
    year = Number(year)

    switch(month) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12: 
            if(day === 31 && month != 12){
                month += 1
                day = 1
            } else if(day === 31 && month === 12){
                day = 1
                month = 1
                year += 1
                
            } 
            else{
                day += 1
            } 
            
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            if( day === 30){
                month += 1 
                day = 1
            }
            break;
        case 2:
            if( year % 4 === 0 || year % 400 === 0 && day === 29){
                month += 1
                day = (day - day) + 1
                
            } else if (year % 4 != 0 && day === 28){
                month += 1
                day = 1
            }
            break;
        
    }
    
    
    

    
    
    alert(`${day}.${month}.${year}`)
}

// age();
// symbol();
// isNumberSimilar();
// isYear();
// isPolindrom();
// converter();
// sale();
// geometry();
// questions();