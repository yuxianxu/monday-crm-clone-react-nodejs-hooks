const express = require('express')
const app = express()
const PORT = 8000
const cors = require('cors')

require('dotenv').config()

const axios = require('axios')

app.use(cors())
app.use(express.json())

const url = 'https://f6fb52ce-163a-4b21-95d5-99f1e25aebf0-us-east1.apps.astra.datastax.com/api/rest/v2/namespaces/tickets/collections/task'
const token = 'AstraCS:ekDYqpRheYIkmlOEHQjnIBvf:c58d45ba0215ab007a3ae37a4e62489c6e0871d19ef63a4a156fcb63eb2f24d1'


app.get('/tickets', async (req, res) => {
    const options = {
        method: 'GET',
        headers: {
            Accepts: 'application/json',
            'X-Cassandra-Token': token,
        }
    }

    try {
        const response = await axios(`${url}?page-size=20`, options)
        res.status(200).json(response.data)
    } catch(err){
        console.log(err)
        res.status(500).json({message: err})
    }
})


app.post('/tickets', async (req, res) => {
    const formData = req.body.formData

    const options = {
        method: 'POST',
        headers: {
            Accepts: 'application/json',
            'X-Cassandra-Token': token,
            'Content-Type': 'application/json'
        },
        data: formData
    }

    try {
        const response = await axios(url, options)
        res.status(200).json(response.data)
    } catch(err){
        console.log(err)
        res.status(500).json({message: err})
    }
})



app.listen(PORT, () => console.log('server running on PORT: ' + PORT))