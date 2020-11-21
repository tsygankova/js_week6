// every & some

const players = [
    {id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false,},
    {id: 'player-2', name: 'Cuba', timePlayed: 205, points: 30,online: true,},
    {id: 'player-3', name: 'Peter', timePlayed: 30, points: 51, online: true,},
    {id: 'player-4', name: 'Lake', timePlayed: 723, points: 101,online: false,},
    {id: 'player-5',name: 'Ananasina',timePlayed: 3100, points: 12, online: true,}
]


// все ли игроки онлайн

const isAllOnline = players.every (function (player){
    return players.online
})

console.log (isAllOnline)

// все ли наиграли больше 20 часов

const isAllMore20 = players.every (function(player){
    return player.timePlayed > 20;
})

console.log (isAllMore20)


// ну хоть кто-то есть онлайн?

const isAnyOnline = players.some (function (player){
    return player.online;
})

console.log (isAnyOnline)

//есть ли активные игроки с временем больше 400 часов

const isAnyHardcore = players.some (function (player){
    return player.timePlayed > 400;
})

console.log (isAnyHardcore)