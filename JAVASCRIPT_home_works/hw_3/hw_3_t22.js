//Task 2*** 
//Реализуйте считывание из JSONки из файла task2.json с помощью, например, модуля fs. 
//для дальнейшего использования в функции, описанной в задании



let path = 'task2.json';

function readData (path){
    const fs = require('fs');
    let sourcedata = fs.readFileSync(path, function(err){     
        if(err){
            console.log('Error: ', err);
        }
    });
    return sourcedata.toString();  
}

function uniquieNames(sourceData){
    let convertedData = JSON.parse(sourceData);
    let newArray = convertedData.map(names => names.name);
    let mySet = new Set(newArray);
    return mySet;
}


//вариант 1 короткий, но немного трудный для чтения:
console.log(uniquieNames(readData(path)));


//вариант 2 длинный, но более читабельный:
let a = readData(path);
let b = uniquieNames(a);
console.log(b);