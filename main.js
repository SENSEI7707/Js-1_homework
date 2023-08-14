// var age = +prompt('Введите свой возраст');
let age = +prompt('Введите свой возраст');
alert(age);
if (age <= 18) {
    console.log('Вы еще молоды , вам нужно учиться');
} else if (age <= 50) {
    console.log('Вам нужно работать');
} else if (age <= 59) {
    console.log('Вам скоро на пенсию');
} else if (age <= 100) {
    console.log('Вы пенсионер');
} else if (age > 100) {
    console.log('Что-то пошло не так');
}
// // let time = ('Введите время в цифрах')
// // alert(time)
let time = +prompt('Введите время');
if (time >= 0 && time <= 24) {
    switch (time) {
        case 3:
        case 2:
        case 1:
        case 0:
        case 24:
        case 23:
        case 22:
            alert(`${time} я еще не сплю? `);
            break;
        case 4:
        case 5:
        case 6:
            alert(`${time} как трудно поднять жопу и идти заниматься? `);
            break;
        case 7:
        case 8:
        case 9:
        case 10:
            alert(`${time} можно поспать либо пойти фигней позаниматься`);
            break;
        case 11:
        case 12:
        case 13:
            alert(`Время ${time} что-то надо поделать`);
            break;
        case 14:
        case 15:
            alert(`Так на часах ${time} пора бы похавать`);
            break;
        case 16:
        case 17:
        case 18:
            alert(`Ну ${time} пора поваляться`);
            break;
        case 19:
        case 20:
        case 21:
            alert(`${time} похавать бы и спать лечь`);
            break;
    }
} else if (time > 24) {
    alert('Error: ти из какого времени?');
}
let num1 = +prompt('Введите первое число');
let averrageNum = +prompt('Введите второе число');
let num3 = +prompt('Введите третье число');
if(num1 > averrageNum > num3){
alert(averrageNum);
}else if(num1 < averrageNum < num3){
alert(averrageNum);
}else if (averrageNum > num1 > num3 ){
    alert(num1);
}else if (averrageNum < num1 < num3 ){
    alert(num1);
}else if (num1 > num3 > averrageNum){
    alert(num3);
}else if (num1 < num3 < averrageNum){
    alert(num3);
}else if (num1 <= num3 > averrageNum){
    alert(num1,num3);
}else if (num1 < num3 <= averrageNum){
    alert(averrageNum,num3);
}else if (num1 == num3 == averrageNum){
    alert('Averrage not found');
}else if (num1 >= num3 == averrageNum){
    alert('Averrage not found');
}else if (num1 < averrageNum == num3){
    alert('Averrage not found')
}