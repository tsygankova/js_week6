// forEach

const numbers = [5, 10, 15, 20, 25];

/*динственный из функциональных методов который ничего не возвращает, а просто перебирает коллекцию. 
Используется как замена цикла for.

array.forEach(callback[currentValue, index, array])

!Copy
!Перебирает
!Может изменять
!Не возвращает*/

numbers.forEach (function (element, index, array){
    console.log (element);
    console.log (index);
    console.log (array);
})

