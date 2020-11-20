// forEach

const numbers = [5, 10, 15, 20, 25];

/*единственный из функциональных методов который ничего не возвращает, а просто перебирает коллекцию. 
Используется как замена цикла for.

array.forEach(callback[currentValue, index, array])

!Copy
!Перебирает
!Может изменять
!Не возвращает
!Если не надо прерывать цикл*/

// numbers.forEach (function (element, index, array){
//     console.log (element);
//     console.log (index);
//     console.log (array);
// })

//map

/*
Используется для трансформации массива
Перебирает
Не изменяет
Возвращает коллекцию
*/ 

const mappedNumbers = numbers.map (function (element, index, array){
  return element * 2
})

console.log ('basic', numbers)
console.log ('new by map', mappedNumbers)

// filter

/* возвращает новый массив с отфильтрованными элементами*/

const filteredNumbers = numbers.filter (function(element){
  return element > 15
})

console.log (filteredNumbers)

//find  - чтобы найти один элемент

const fifteen = numbers.find (function (element){
  return element === 15;
})

console.log (fifteen)
