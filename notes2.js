const numbers = [5, 10, 15, 20, 25];

//Array.prototype.reduce ()

const total = numbers.reduce (function (accumulator,number){
return accumulator + number})

console.log ('total', total)

// считаем фонд зарплаты

const salary = {
    mango: 100,
    poly: 300,
    ajax: 120
}

// преобразовываем обїект в массив

const salaries = Object.values (salary);
console.log ('массив зарплат', salaries)

const totalSalary = salaries.reduce (function (accumulator = 0, salary){
    return accumulator + salary
})

console.log (totalSalary)

