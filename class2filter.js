//filter

const players = [
    {id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false,},
    {id: 'player-2', name: 'Cuba', timePlayed: 205, points: 30,online: true,},
    {id: 'player-3', name: 'Peter', timePlayed: 30, points: 51, online: true,},
    {id: 'player-4', name: 'Lake', timePlayed: 723, points: 101,online: false,},
    {id: 'player-5',name: 'Ananasina',timePlayed: 3100, points: 12, online: true,}
]

// получаем массив онлайн игроков

const onlinePlayers = players.filter (function (player){
return player.online === true;
})

console.table (onlinePlayers);

// получаем массив оффлайн игроков

const offlinePlayers = players.filter (function (player){
    return player.online === false;
    })
    
    console.table (offlinePlayers);
    
    