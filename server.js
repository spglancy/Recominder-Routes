const express = require('express')
const app = Express()
const apiRoutes = require('./controllers/apiRoutes')

app.use('/', apiRoutes)

app.get('*', (req, res) => {
    res.status(404).send("This page does not exist.")
})

app.listen(config.port, () => {
    console.log(`App running on port ${config.port}`)
})