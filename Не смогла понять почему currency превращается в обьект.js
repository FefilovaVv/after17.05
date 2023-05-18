const answerCurrensy = confirm('Привет! Я помогу первести тебе из рупий в рубли и обратно. Но для начала скажи, хочешь ли ты сам задать курс валют?');
const finalCurrensy = { currensy: 1/178,
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
    finalCurrensy.currensy = prompt('Введите свой курс в формате рубль/рупии. Например, если 1 рубль равен 175 рупиям, то вы введете: 1/175');
    counting();
}
else {
    counting()
};

finalCurrensy.currensy=Number(finalCurrensy.currensy);
let finalResult = 1 / finalCurrensy.currensy * finalRub.rub || finalCurrensy.currensy * finalIdr.idr;



console.log(typeof finalCurrensy.currensy);