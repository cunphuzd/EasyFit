const express = require('express');
const app = express();
const hb = require('express-handlebars');

app.engine('handlebars', hb({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(express.static('public'));

app.get('/', function(req, res){
    res.render('base-home', {layout:"base-main"});
});

app.get('/home', function(req, res){
    res.render('home');
});

app.get('/program', function(req, res){
    res.render('program');
});

app.get('/test', (req, res) => {
    res.render('home', {layout:"base-main"})
})

app.listen(8080);