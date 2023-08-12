// var age = +prompt('Введите свой возраст');
let age = +prompt('Введите свой возраст');
alert (age);
if (age <= 18) {
    console.log('Вы еще молоды , вам нужно учиться');
}else if (age <= 50) {
    console.log('Вам нужно работать');
}else if (age <= 59) {
    console.log('Вам скоро на пенсию');
}else if (age <= 100) {
    console.log('Вы пенсионер');
}else if(age > 100) {
        console.log('Что-то пошло не так');
}
// let time = ('Введите время в цифрах')
// alert(time)
