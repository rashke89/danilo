const express = require('express');


const app = express();
app.use(express.json());
app.post('/register', (req, res) => {
    console.log(req.body);
    res.send('OK')
})

app.post('/login', (req, res) => {
    console.log(req.body);
    res.send({
        first_name: "Rados",
        last_name: "Mijat",
        img: 'https://raw.githubusercontent.com/rashke89/test/master/SMAlltalk_Logo_DE_HEX.png',
        token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
    })
});
app.listen(9000, () => console.log('Server is runnning.'))

