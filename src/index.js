import express, { application, json } from "express";
import cors from 'cors';

const server = express();
server.use(cors());
server.use(json());

const PORT = 8080;

const users = [];
const tweets = [];

server.post('/sign-up', (req, res) => {
    const body = req.body;
    const user = {
        username: body.username,
        avatar: body.avatar
    };
    users.push(user);
    res.send('OK');
});

server.get('/sign-up', (req,res) => {
    res.send(users);
});

server.post('/tweets', (req,res) => {
    const body = req.body;
    const tweet = {
        username: body.username,
        tweet: body.tweet
    };
    tweets.push(tweet);
    res.send('OK');
});

server.get('/tweets', (req, res) => {
    res.send(tweets.slice(tweets.length - 10));
});

server.listen(PORT,() =>{console.log('Server Rodando na porta', PORT)})