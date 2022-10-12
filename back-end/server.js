const express = require('express')
const app = express()
app.use(express.json())
const cors = require('cors')
app.use(cors())
const { Client } = require('pg')
const config = require('./config.js')[process.env.NODE_ENV || 'dev']
const client = new Client({
    connectionString: config.connectionString
})
client.connect()
const PORT = config.port


app.get('/api/games', (req,res) => {
    client.query('SELECT * FROM games')
    .then(results => {
        res.send(results.rows)
    })
    .catch(error => {
        console.log(error)
    })
})



app.listen(PORT, () => {
    console.log('Server is running', PORT)
})