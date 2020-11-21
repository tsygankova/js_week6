// chaining - цепочки вызовов

//берем массив чисел

const numbers = [1, 16, 2, 7, 15]

// отбираем те, что больше 2

const moreThanTwo = numbers.filter(function(number){
    return number > 2
})

console.log (moreThanTwo)

//  умножаем их на 2

const multByTwo = moreThanTwo.map (function (number){
    return number * 2
})

console.log (multByTwo)

// отсортировать в порядке возрастания

const sortedNumbers = multByTwo.sort(function(prev, next){
    return prev - next
})

console.log (sortedNumbers)

// цеопчка вызовов

const res = numbers.filter(function(number){
    return number > 2
})
.map (function (number){
    return number * 2
})
.sort(function(prev, next){
    return prev - next
})

console.log ('res', res)

// следующее задание

const players = [
    {id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false,},
    {id: 'player-2', name: 'Cuba', timePlayed: 205, points: 30,online: true,},
    {id: 'player-3', name: 'Peter', timePlayed: 30, points: 51, online: true,},
    {id: 'player-4', name: 'Lake', timePlayed: 723, points: 101,online: false,},
    {id: 'player-5',name: 'Ananasina',timePlayed: 3100, points: 12, online: true,}
]

// найти игроков онлайн

const onlinePlayers = players.filter (function(player){
    return player.online === true
})

console.log ('players online', onlinePlayers)

// отсортировать по количеству очков

const sortedPlayers = onlinePlayers.sort(function(prev, next){
    return prev.points - next.points
})

console.log (sortedPlayers)

//найти игроков онлайн и отсортировать по количеству очков

const newPlayers = players.filter (function(player){
    return player.online === true
})
.sort(function(prev, next){
    return prev.points - next.points
})

console.table (newPlayers)