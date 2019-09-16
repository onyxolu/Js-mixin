// The names have to match for objects

var obj = {
    first: 'Olumide',
    second: 'Ogundare'
}

const {first, second} = obj;  // works fine

// first = 'Olumide'
// last = 'Ogundare'

const {first1, second1} = obj;  // won't work

// first1 = undefined
// last1 = underfined



