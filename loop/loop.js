
// Looping through array of objects

const game = {
    'suspects': [
        {
            name: 'Rusty',
            color: 'orange',
        },
        {
            name: 'Miss Scarlet',
            color: 'red',
        }
    ]
}

for( let i = 0; i < game.suspects.length; i++) {
    console.log(game.suspects[i])
}