import express, { application, json } from "express";
import cors from 'cors';

const server = express();
server.use(cors());
server.use(json());

const PORT = 5000;

const users = [];
server.post('/sign-up', (req, res) => {
    const body = req.body;
    const user = {
        username: body.username,
        avatar: body.avatar
    };
    users.push(user);
    console.log('Foi!');
    res.send('OK');
});

server.listen(PORT,() =>{console.log('Server Rodando na porta', PORT)})