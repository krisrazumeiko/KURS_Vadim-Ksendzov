/*1. Вывести все предприятия и их отделы. Рядом указать количество сотрудников. 
Для предприятия посчитать сумму всех сотрудников во всех отделах.

**Пример:**

Предприятие 1 (45 сотрудников)
- Отдел тестирования (10 сотрудников)
- Отдел маркетинга (20 сотрудников)
- Администрация (15 человек)
Предприятие 2 (75 сотрудников)
- Отдел разработки (50 сотрудников)
- Отдел маркетинга (20 сотрудников)
- Отдел охраны труда (5 сотрудников)
Предприятие 3 (нет сотрудников)
- Отдел аналитики (нет сотрудников) */

const enterprises = [
    {
      id: 1,
      name: "Предприятие 1",
      departments: [
        {
          id: 2,
          name: "Отдел тестирования",
          employees_count: 10,
        },
        {
          id: 3,
          name: "Отдел маркетинга",
          employees_count: 20,
        },
        {
          id: 4,
          name: "Администрация",
          employees_count: 15,
        },
      ]
    },
    {
      id: 5,
      name: "Предприятие 2",
      departments: [
        {
          id: 6,
          name: "Отдел разработки",
          employees_count: 50,
        },
        {
          id: 7,
          name: "Отдел маркетинга",
          employees_count: 20,
        },
        {
          id: 8,
          name: "Отдел охраны труда",
          employees_count: 5,
        },
      ]
    },
    {
      id: 9,
      name: "Предприятие 3",
      departments: [
        {
          id: 10,
          name: "Отдел аналитики",
          employees_count: 0,
        },
      ]
    }
  ]

  
function getStatistic(companies){
    for(let i=0; i<companies.length; i++){
        let count = getCompanyCount(companies[i]);
        console.log(companies[i].name + " (" + count + " сотрудников)");
        for(let j=0; j<companies[i].departments.length; j++){
            console.log("- " + companies[i].departments[j].name + " (" + companies[i].departments[j].employees_count + " сотрудников)");
        }
    }
}

function getCompanyCount(company){
    let tmpCount = 0;
    for(let i=0; i<company.departments.length; i++){
        tmpCount+=company.departments[i].employees_count;
    }
    return tmpCount;
}

getStatistic(enterprises);
console.log(getCompanyCount(enterprises[0]));



// function getKeyByValue(object, value) {
//     return Object.keys(object).find(key => object[key] === value);
//   }


// console.log(getKeyByValue(enterprises[0], 8));

//let keys = Object.keys(enterprises).filter(k=>JSON.stringify(enterprises[k])===JSON.stringify(9));
//let keys = Object.keys(enterprises).filter(k=>enterprises[k]===1);
//let key = Object.keys(enterprises[0]).find(k=>enterprises[k]===1);
