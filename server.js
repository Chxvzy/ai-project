const express = require('express')

const app = express()

app.use(express.json())

app.get('/', (request, response) => {
    return response.status(200).json({
        message: "Olá, mundo. Estou utilizando IA"
    })
})

app.listen(3333, () => console.log('Server is running on port http://localhost:3333'))
