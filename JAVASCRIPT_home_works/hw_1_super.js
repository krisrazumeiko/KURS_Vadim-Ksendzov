// 1*:Преобразовать написанный код в 26-33 пунктах в функцию,
//принимающую на вход возраст. Пример: const checkAge = function(age) {Ваши преобразования}
//Вывести в консоль результат работы функции с возрастами 17, 18, 61

// let age_2 = 18                       
// let age_3 = 61                      

// function CheckAge(age)
// {
//     if (age < age_2){    
//         console.log("You don't have access cause your age is" + " " + age + "." + " " + "It's less then")
//     }else if (age >= age_2 && age < age_3){  
//         console.log("Welcome !")
//     }else if (age > age_3){ 
//         console.log("Keep calm and look Culture channel")
//     }else{  
//         console.log("Technical work")
//     }
// }

// CheckAge(17);
// CheckAge(18);
// CheckAge(60);
// CheckAge(61);



//2*:Преобразовать задание 1* таким образом, чтобы первым делом в функции проверялся тип данных. 
//И если он не Number - кидалась ошибка.

// let age_2 = 18                       
// let age_3 = 61                      

// function CheckAge(age){
//     // age = Number(age);            //преобразовать значение age в number
//     // console.log(age);             //вывод переданных значений в функцию
//     //if(typeof age == 'number')  //если тип данных age является number
//     //if(age)                     //NaN - not a number, тип данных number, всегда true. Автоматически преобразует в число
//     if(!isNaN(age)){               //проверка преобразованных значений на является ли значение NaN или нет
//         if (age < age_2){    
//             console.log("You don't have access cause your age is" + " " + age + "." + " " + "It's less then");
//         }else if (age >= age_2 && age < age_3){  
//             console.log("Welcome !");
//         }else if (age > age_3){ 
//             console.log("Keep calm and look Culture channel");
//         }else{  
//             console.log("Technical work");
//         }
//     }else
//         console.log("This value is not integer");  
// }

// CheckAge(17);
// CheckAge(18);
// CheckAge(60);
// CheckAge(61);
// CheckAge('dfdsf');




//3**:Преобразовать 2* таким образом, чтобы значение '2' (строка в которой лежит ТОЛЬКО ЦИФРА) пропускалось, 
//преобразовываясь в number

// let age_2 = 18                       
// let age_3 = 61                      

// function CheckAge(age){
//     //age = Number(age);            //преобразовать значение age в number
//     //console.log(age);             //вывод переданных значений в функцию
//     //if(typeof age == 'number')  //если тип данных age является number
//     //if(age)                     //NaN - not a number, тип данных number, всегда true. Автоматически преобразует в число
//     //if(!isNaN(age))               //проверка преобразованных значений на является ли значение NaN или нет
//     if(age && !isNaN(age)){       //проверяем пустое значение и не NaN       
//         if (age < age_2){    
//             console.log("You don't have access cause your age is" + " " + age + "." + " " + "It's less then");
//         }else if (age >= age_2 && age < age_3){  
//             console.log("Welcome !");
//         }else if (age > age_3){ 
//             console.log("Keep calm and look Culture channel");
//         }else{  
//             console.log("Technical work");
//         }
//     }else
//         console.log("This value is not integer");  
// }

// CheckAge(17);
// CheckAge(18);
// CheckAge(60);
// //CheckAge(61);
// CheckAge('dfdsf');
// CheckAge('55');
// CheckAge('61');



//4***:Преобразовать задание 3* таким образом, 
//чтобы возраст вводится используя функцию prompt в привязанной верстке

let age_2 = 18                       
let age_3 = 61                      

function CheckAge(age){
    //age = Number(age);            //преобразовать значение age в number
    //console.log(age);             //вывод переданных значений в функцию
    //if(typeof age == 'number')  //если тип данных age является number
    //if(age)                     //NaN - not a number, тип данных number, всегда true. Автоматически преобразует в число
    //if(!isNaN(age))               //проверка преобразованных значений на является ли значение NaN или нет
    if(age && !isNaN(age)){       //проверяем пустое значение и не NaN       
        if (age < age_2){    
            alert("You don't have access cause your age is" + " " + age + "." + " " + "It's less then");
        }else if (age >= age_2 && age < age_3){  
            alert("Welcome !");
        }else if (age > age_3){ 
            alert("Keep calm and look Culture channel");
        }else{  
            alert("Technical work");
        }
    }else
        alert("This value is not integer");  
}

let b = prompt('Enter your name');

CheckAge(b);