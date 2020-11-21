// sort на массиве

const players = [
    {id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false,},
    {id: 'player-2', name: 'Cuba', timePlayed: 205, points: 30,online: true,},
    {id: 'player-3', name: 'Peter', timePlayed: 30, points: 51, online: true,},
    {id: 'player-4', name: 'Lake', timePlayed: 723, points: 101,online: false,},
    {id: 'player-5',name: 'Ananasina',timePlayed: 3100, points: 12, online: true,}
]

const playersSorted = [...players].sort (function(prevPlayer, nextPlayer){
    // по возрастанию значения свойствa
    // return prevPlayer.timePlayed - nextPlayer.timePlayed
   

    // по убыванию значения свойства
    return nextPlayer.points - prevPlayer.points
   
})

console.table (playersSorted)