//map

const players = [
    {id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false,},
    {id: 'player-2', name: 'Cuba', timePlayed: 205, points: 30,online: true,},
    {id: 'player-3', name: 'Peter', timePlayed: 30, points: 51, online: true,},
    {id: 'player-4', name: 'Lake', timePlayed: 723, points: 101,online: false,},
    {id: 'player-5',name: 'Ananasina',timePlayed: 3100, points: 12, online: true,}
]

// получаем массив всех имен игроков

const playersNames = players.map (function (player){
    return player.name;
})

console.log (playersNames)

// увеличиваем количество поинтов для каждого игрока

const increasedPoints = players.map (function(player){
    return {...player,
    points: Math.round (player.points * 1.1)}
})

console.table (increasedPoints)

// увеличиваем количество часов игрока по id 

const playerIdToUpdate = 'player-3'

const updatedPlayers = players.map(function (player){
console.log (player.id);

if (player.id === playerIdToUpdate){
    return {...player, 
        timePlayed: player.timePlayed + 50} 
}
return player;
})

console.table (updatedPlayers)

