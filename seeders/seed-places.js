const db = require('../models')

db.Place.create([{
    name: 'BBQ & More',
    city: 'Memphis',
    state: 'TN',
    cuisines: 'American, BBQ',
    pic: '/images/BBQ.jpg',
    founded: 1994
}, {
    name: 'Coding Bar Lounge',
    city: 'Miami',
    state: 'FL',
    cuisines: 'Drinks and Snacks',
    pic: '/images/BarScene.jpg',
    founded: 2018
}])
.then(() => {
    console.log('Success!')
    process.exit()
})
.catch(err => {
    console.log('Failure!', err)
    process.exit()
})