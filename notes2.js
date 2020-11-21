const numbers = [5, 3 , 12, 6, 18, 9];

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


// Array.prototype.sort - сортирует и ИЗМЕНЯЕТ МАССИВ

numbers.sort ()

console.log (numbers)

numbers.sort (function (prev, next){
return prev - next;
})

console.log (numbers)

numbers.sort (function (prev, next){
    return next - prev;
})

console.log (numbers)

const letters = ['a', 'A', 'b', 'B']

letters.sort()

console.log (letters)

// копия массива

const copy = numbers.slice();
console.log (copy);

const copy2 = [...numbers];
console.log (copy2)