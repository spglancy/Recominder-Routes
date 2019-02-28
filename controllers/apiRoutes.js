const router = Express.router()

router.get('/login', (req, res) => {
    fetch('https://recominder-api.herokuapp.com/login').then(res => {
        res.cookie('nToken', res.token, { maxAge: 900000, httpOnly: true });
        res.redirected('/')
    })
})

module.exports = router