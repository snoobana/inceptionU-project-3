const express = require('express')
const session = require("express-session")
const passport = require('passport')

const path = require('path')
const superheroRoutes = require('./routes/superheroRoutes')
const authRoutes = require('./routes/auth')

const app = express()
const port = process.env.PORT || 5000

app.use(session({ secret: "cats" }))
app.use(express.json())
app.use(passport.initialize())
app.use(passport.session())

app.use('/api',superheroRoutes)
app.use('/auth', authRoutes )

app.use('/', express.static('../client/build'))
app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname,"../client/build","index.html"))
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

