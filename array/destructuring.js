

// const source = target

// const [variable1, variable2] = [Item1, Item2]

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

const [{name: firstColor},{name: secondColor}] = game.suspects;