const db = require('../models')


async function seed() {

    let place = await db.Place.findOne({ name: 'H-Thai-ML' })

    let comment = await db.Comment.create({
        author: 'Famished Fran',
        rant: false,
        stars: 5.0,
        content: 'Wow, simply amazing food here. I highly recommend this to anyone visiting the area!'
    })


    place.comments.push(comment.id)


    process.exit()
}

seed()