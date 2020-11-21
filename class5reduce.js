//reduce

const players = [
    {id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false,},
    {id: 'player-2', name: 'Cuba', timePlayed: 205, points: 30,online: true,},
    {id: 'player-3', name: 'Peter', timePlayed: 30, points: 51, online: true,},
    {id: 'player-4', name: 'Lake', timePlayed: 723, points: 101,online: false,},
    {id: 'player-5',name: 'Ananasina',timePlayed: 3100, points: 12, online: true,}
]

// общее количество часов игроков

const totalTime = players.reduce (function(time, player){
    return time + player.timePlayed
}, 0)

console.log (totalTime)


// задача 2

const cart = [
    {label: 'apple', price:15, quantity: 2},
    {label: 'rum', price: 300, quantity:18},
    {label:'cup', price:18, quantity:16}
]

// общая сумма товаров

const totalCart = cart.reduce (function(acc, item){
return acc + item.price * item.quantity
},0)

console.log (totalCart)

// собираем теги

const tweets = [
{id: 100, likes: 8, tags: ['node', 'js', 'react']},
{id: 181, likes: 2, tags: ['css', 'html', 'js']},
{id: 143, likes: 81, tags: ['react', 'angular', 'css']},
{id: 237, likes: 78, tags: ['git', 'css', 'html']},
{id: 456, likes: 14, tags: ['sass', 'css', 'html', 'angular']}
]

const allTags = tweets.reduce (function (tags, tweet){
tags.push (...tweet.tags);
return tags
},[]);

console.log (allTags)

// ведем статистику тегов

const tagStats = allTags.reduce (function (acc, tag){

    // // console.log ('tag', tag);
    // // console.log ('acc', acc);

    // if (acc.hasOwnProperty(tag)){
    //     // console.log ('такое свойство есть. увеличиваем значение');

    // acc[tag] +=1;
    // return acc;}

    // // console.log ('ефкого свойства нет, добавляем на обїект');
    // acc[tag] = 1;

    // // вариант 2 с тернарным оператором
    // acc[tag] = acc.hasOwnProperty(tag) ? acc[tag] + 1 : 1;
    // return acc;

    // чистая функция, но медленная (распыление медленное)
    return {
        ...acc,
        [tag]: acc.hasOwnProperty(tag) ? acc[tag] + 1 : 1
    }
}, {})

console.log (tagStats)

// reduce своими руками

Array.prototype.reduce = function (callback, initialValue = this[0]){
    let accumulator = initialValue;

    for (let i = 0; i < this.length; i +=1){
        accumulator = callback (this [i], i, this);
       }
return accumulator
    }