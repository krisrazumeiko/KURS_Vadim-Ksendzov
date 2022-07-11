//1. Написать скриптик, который сосчитает и выведет результат от возведения 2 в степень 10, начиная со степени 1

// let a = 2;
// let i = 1;

// while(i <= 10){
//     let c = a**i;
//     console.log("2**" + i + "=" + c);
//     i++;
// }



//1*. Преобразовать 1 задачу в функцию, принимающую на вход степень, в которую будет возводиться число 2

// let a = 2;

// function getDegree(i){
//      while(i <= 10){
//         let c = a**i;
//         console.log("2**" + i + "=" + c);
//         i++;
//     }
// }

// getDegree(1);



// 2. Написать скрипт, который выведет 5 строк в консоль таким образом, чтобы в первой строчке выводилось :), 
// во второй :):) и так далее
// Пример в консоли:
// :)
// :):)
// :):):)
// :):):):)
// :):):):):)

// a = ':)';
// b = 0;
// tmp = a;
// while(b < 5){
//     console.log(tmp);
//     b++;
//     tmp=tmp + a;
// }



//2*. Преобразовать 2 задачу в функцию, принимающую на вход строку, которая и будет выводиться в консоль (как в условии смайлик), а также количество строк для вывода 
//e.g. function printSmile(stroka, numberOfRows)

// function printSmile(stroka, numberOfRows){
//     tmp = stroka;
//     currentLine = 0;
//         while(currentLine < numberOfRows){
//             console.log(tmp);
//             currentLine++;
//             tmp=tmp + stroka;
//         }
// }

// printSmile(':)',50);





//3**.  Написать функцию, которая принимает на вход слово. Задача функции посчитать и вывести в консоль, сколько в слове гласных, и сколько согласных букв.
//e.g. function getWordStructure(word)
//В консоли: 
//Слово (word) состоит из  (число) гласных и (число) согласных букв
//Проверки: 'case', 'Case', 'Check-list'

// function getWordStructure(word){
//     tmp = word.toLowerCase();
//     listOfVowels = "aeiou";
//     listOfConsonants = "bcdfghjklmnpqrstvwxyz";
//     countVowel = 0;
//     countConsonant = 0;
//     for(i=0; i<word.length; i++){
//         if(listOfVowels.indexOf(tmp[i]) != -1){
//             countVowel++;
//         }else if(listOfConsonants.indexOf(tmp[i]) != -1){
//             countConsonant++;
//         }
//     }
    
//     console.log("Слово " + word + " " + "состоит из "  + countVowel + " " + "гласных и " + countConsonant + " " + "согласных букв!");
// }

// getWordStructure('Check-list');
// getWordStructure('case');
// getWordStructure('Case');





// 4**. Написать функцию, которая проверяет, является ли слово палиндромом
// e.g. function isPalindrom(word)
// Проверки: 'abba', 'Abba'


function isPalindrom(stroka){                                           //split('') используется для разделения строки на символы через указанный разделитель в скобках. Вызывается для строки, а на выходе массив
    strokaSorted = stroka.toLowerCase().split('').reverse().join('');   //reverse() метод меняет порядок элементов массива на обратный (было "12345", стало "54321")
    console.log(strokaSorted);                                          //join('') объединяет массив в строку через указанный разделитель в скобках
    if(stroka.toLowerCase() == strokaSorted){
        console.log("This is a palindrom");
    }else{
        console.log("This is not a palindrom")
    }
}

isPalindrom('abba');
isPalindrom('Abba');
isPalindrom('poTop');

