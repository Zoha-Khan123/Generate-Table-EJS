import express from 'express'
const app = express();
app.use(express.json())
app.set('view engine', 'ejs')


app.listen(5000, () => {
    console.log('server runing on port 5000');
})

// Table of 2
app.get('/', (req, res) => {
    let number = parseInt(req.query.number)  ||  2
    let length = parseInt(req.query.length)  ||  10
    let tablePrepare = []
    for (let i = 1; i <= length; i++) {
        tablePrepare.push(`${number} X ${i} = ${number * i}`);
    }
    res.render('table', { tablePrepare })
})