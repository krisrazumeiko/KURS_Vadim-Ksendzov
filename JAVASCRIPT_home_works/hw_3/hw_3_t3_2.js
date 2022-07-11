/*2. Написать функцию, которая будет принимать 1 аргумент (id отдела или название отдела и возвращать название предприятия, 
  к которому относится).

Пример:
getEnterpriseName(4) // Предприятие 1
getEnterpriseName("Отдел маркетинга") // Предприятие 2 */

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

  
function getEnterpriseName(key){
  let nameOrganization = [];
  for(let i=0; i<enterprises.length; i++){
    for(let j=0; j<enterprises[i].departments.length; j++){
      if(typeof key === 'number'){
        if(enterprises[i].departments[j].id == key){
          nameOrganization.push(enterprises[i].name)
        }
      }else if(typeof key === 'string'){
        if(enterprises[i].departments[j].name == key){
          nameOrganization.push(enterprises[i].name)
        }
      }else{
        throw new Error('Wrong type of arguments!');
      }
    }
  }
  return nameOrganization;
}

// console.log(getEnterpriseName(8));
// console.log(getEnterpriseName('Отдел маркетинга'));
// console.log(getEnterpriseName(''));


/*3. Написать функцию, которая будет добавлять предприятие. В качестве аргумента принимает название предприятия

Пример:
addEnterprise("Название нового предприятия")*/

function addEnterprise(newNameCompany){
 
  enterprises.push({'id' : getNextId(), 'name': newNameCompany, 'departments' : []});
}
addEnterprise('Предприятие 4');
addEnterprise('Предприятие 5');
//console.log(enterprises);

function getNextId(){
  let maxId = enterprises[enterprises.length-1].id;
  return ++maxId;
}

/*4. Написать функцию, которая будет добавлять отдел в предприятие. В качестве аргумента принимает id предприятия, 
в которое будет добавлен отдел и название отдела.

Пример:
addDepartment(1, "Название нового отдела")*/

function addDepartment(idCompany, newNameDepartmant){
  const index = enterprises.findIndex(obj => {return obj.id === idCompany});
  console.log(index);
  enterprises[index].departments.push({'id' : getNextDepartmentsId(index), 'name': newNameDepartmant, 'employees_count' : 0});
}

addDepartment(9, 'Новый отдел');
addDepartment(9, 'Новый отдел1');
addDepartment(5, 'Новый отдел');
// console.log(enterprises[2]);
// console.log(enterprises[2]);
// console.log(enterprises[1]);



function getNextDepartmentsId(index){
  let maxId = enterprises[index].departments[enterprises[index].departments.length-1].id;
  return ++maxId;

}

/*5. Написать функцию для редактирования названия предприятия. Принимает в качестве аргумента id предприятия 
и новое имя предприятия.

Пример:
editEnterprise(1, "Новое название предприятия") */

//function editEnterprise(idCompany, newNameCompany){
//   let objIndex = enterprises.findIndex((obj => obj.id == idCompany));
//   enterprises[objIndex].name = newNameCompany;

// }

// editEnterprise(1,'qa');
// editEnterprise(5, 'Testing');
// console.log(enterprises);

const editEnterprise = function(val, name){
  const enterprise = getEnterprise(val)
  if(enterprise) enterprise.name = name;
  else throw new Error('No such enterprise');
}

editEnterprise(1, 'QA');
console.log(enterprise[1]);



/* 6. Написать функцию для редактирования названия отдела. 
Принимает в качестве аргумента id отдела и новое имя отдела.

Пример:
editDepartment(7, "Новое название отдела")*/

function editDepartment(idDepartment, newNameDepartment){
  let objIndex = enterprises.departments.findIndex((obj => obj.id == idDepartment));
  enterprises[objIndex].departments.name = newNameDepartment;
}

editDepartment(8, 'Testing 1');
//console.log(enterprises);