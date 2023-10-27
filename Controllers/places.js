const router = require('express').Router()

router.get('/', (req, res) => {
    let places = [{
        name: 'BBQ&MORE',
        city: 'Austin',
        state: 'Texas',
        cuisines: 'American, BQQ',
        pic: '/images/BBQ.jpg'
    }, {
        name: 'Nigh Out Bar',
        city: 'L.A',
        state: 'California',
        cuisines: 'Snacks, Drinks',
        pic: '/images/BarScene.jpg'
    }]
    res.render('places/index', { places })
})

router.post('/', (req, res) => {
    console.log(req.body)
    res.send('POST /places')
})

router.get('/new', (req, res) => {
    res.render('places/new')
})

router.get('/:id', (req, res) => {
    res.send('GET /places/:id')
})

router.put('/:id', (req, res) => {
    res.send('PUT /places/:id')
})

router.delete('/:id', (req, res) => {
    res.send('DELETE /places/:id')
})

router.get('/:id/edit', (req, res) => {
    res.send('GET /places/:id/edit')
})

router.post('/:id/rant', (req, res) => {
    res.send('GET /places/:id/rant')
})

router.delete('/:id/rant/:rantId', (req, res) => {
    res.send('GET /places/:id/rant/:rantId')
})


module.exports = router