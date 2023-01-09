import express from "express";
import cors from 'cors';

const server = express();
server.use(cors());
server.use(express.json());

const PORT = 5000;

const users = [];
const tweets = [];

server.post('/sign-up', (req, res) => {
    const {username, avatar} = req.body;
   
    if(username === "" || avatar === "") return res.status(422).send("Todos os campos são obrigatórios");

    if(!username || typeof username !== 'string' || !avatar) return  res.sendStatus(400);

    users.push({ username, avatar });
    res.status(201).send('OK');
});

server.get('/sign-up', (req,res) => {
    res.send(users);
});

server.post('/tweets', (req,res) => {
/*     const tweet = req.body;
    const userSign = users.find(user => user.username === tweet.username);

    if(!userSign){
        res.sendStatus(401);
        return;
    }

    tweets.push(tweet);
    res.status(201).send('OK');
*/
    const {username, tweet} = req.body;

    if(username === "" || tweet === "") return res.status(422).send("Todos os campos são obrigatórios");

    tweets.push(username, tweet);
    res.send('OK');
}); 

server.get('/tweets', (req, res) => {
    const lastTenTweets = tweets.slice(tweets.length - 10);
    
    res.send(lastTenTweets);


});

server.listen(PORT,() =>{console.log('Server Rodando na porta', PORT)})