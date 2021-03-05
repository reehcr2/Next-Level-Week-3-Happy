import express from 'express';

import './database/connection'

const app = express();

app.use(express.json());

app.get('/users', (request, response) => {
    return response.json({message: 'To funcionando de boas ainda!'})
})

app.listen(3333)