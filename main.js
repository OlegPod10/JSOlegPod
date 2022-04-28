
// // Задание 1

let firstName = prompt('Ввидете ваше имя');
let lastName = prompt('Введите вашу фамилию');
let nick = prompt('Введите ваш ник');
if (firstName && lastName && nick) {
    alert(`${firstName} ${lastName}`);
} else if ( firstName && lastName) {
    alert(`${firstName} ${lastName}`);
} else if (nick && lastName) {
    alert(nick);
} else if (nick && firstName) {
    alert(firstName);
} else {
    alert("Noname");
}

// // Задание 2

let numbers = prompt("Введите любое число: ");
let sto = (numbers > 100) ? "больше ста" : "меньше ста";
let even = (numbers % 2 == 0 ) ? "чётеное число" : "нечётное число";
let fraction = (numbers % 1 == 0) ? "не дробное" : "дробное число" ;
let positive = (numbers > 0) ? "положительное число" : "отрицательное число" ;
if (Number(numbers)) {
     alert(`Введённое вами число: ${sto}, ${even}, ${fraction}, ${positive}`);
  } else alert("Вы не ввели число!");

// // Задание 3 (Переписать задание с прошлего без использование if, else)

let userName = prompt('Введите имя');
let userAge = prompt('Введите возраст');
let result = (userAge >= 18) ? alert(`Добро пожаловать ${userName}`) : alert(`Простите ${userName} доступ закрыт!`);

// Задание 4

let num = +prompt("Введите число от 1-го до 10-ти: ");
switch (isNaN(num)) {
  case true:
    console.log("ой ёй, что-то не так");
    break;
  default:
    switch (num > 10) {
      case true:
        console.log("Число больше 10!");
        break;
      default:
        switch (num) {
          case 1:
            console.log("один");
            break;
          case 2:
            console.log("два");
            break;
          case 3:
            console.log("три");
            break;
          case 4:
            console.log("четыре");
            break;
          case 5:
            console.log("пять");
            break;
          case 6:
            console.log("шесть");
            break;
          case 7:
            console.log("семь");
            break;
          case 8:
            console.log("восемь");
            break;
          case 9:
            console.log("девять");
            break;
          case 10:
            console.log("десять");
            break;
          default:
            switch (num !== null) {
              case true:
                console.log("Вы закрыли окно и ничего не ввели :(");
                break;
              default:
            }
        }
    }
}
