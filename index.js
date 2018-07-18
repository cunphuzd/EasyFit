const express = require('express');
const app = express();
const hb = require('express-handlebars');

app.engine('handlebars', hb({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(express.static('public'));

app.get('/', function(req, res){
    res.render('home');
});

app.get('/about', function(req, res){
    res.render('about');
});

app.get('/signIn', function(req, res){
    res.render('signIn');
});

app.get('/otherPage', (req, res) => {
    res.render('person', {layout:"otherPage"})
})

app.listen(8080);