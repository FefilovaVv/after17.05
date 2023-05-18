const answerCurrensy = confirm('Привет! Я помогу первести тебе из рупий в рубли и обратно. Но для начала скажи, хочешь ли ты сам задать курс валют?');
const finalCurrensy = {
    currensy: 178,
}


let finalRub = { rub: undefined };
let finalIdr = { idr: undefined };
let idrOrRub;

function counting() {
    idrOrRub = confirm('Ты хочешь конвертировать из рублей в рупии или из рупий в рубли? \n  Кликни ДА, если из рублей в рупии. \n  Кликни НЕТ, если из рупий в рубли');
    if (idrOrRub == true) {
        finalRub.rub = prompt('Введи количество рублей:')
    }
    else {
        finalIdr.idr = prompt('Введи количество рупий:')
    };
}


if (answerCurrensy == true) {
    finalCurrensy.currensy = prompt('Введи свой курс. Например, если 1 рубль равен 175 рупиям, то ты введешь: 175');
    counting();
}
else {
    counting()
};

let finalResult = finalCurrensy.currensy * finalRub.rub || finalIdr.idr/finalCurrensy.currensy;



console.log(finalResult);