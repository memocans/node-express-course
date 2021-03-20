const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

const mockUserData=[
    {name: 'Mike'},
    {name: 'Jane'}
]

app.get('/users', function(req, res){
    res.json({
        success: true,
        message: 'successfully got users. Nice!',
        users: mockUserData
    })
})

app.get('/users/:id', function(req, res){
    console.log(req.params.id)
    res.json({
        success: true,
        message: 'got one user: ',
        user: req.params.id
    })
})

app.post('/login', function(req, res){
    const username = req.body.username;
    const password = req.body.password;

    const mockUserName = "coniTheWalker";
    const mockPassword = "ultraSecret";

    if(username===mockUserName && password === mockPassword){
        res.json({
            success: true,
            message: `logged in as ${mockUserName}`,
            token: 'token will be here'
        })
    }
    else {
        res.json({
            success: false,
            message: 'username and password do not match'
        })
    }
})

app.listen(8000, function(){ console.log('server is listening') })