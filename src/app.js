const path = require('path');
const express = require('express');  //importo express
const app = express();              //ejecuto express
const logger = require('morgan');   //importo morgan
const bodyParser = require('body-parser')

const indexRoutes = require('./routes/index');

//settings
app.set('port', process.env.PORT || 3000 )  //establecer el puerto
app.set('views', path.join(__dirname, 'views'));
app.set('view engine','ejs'); //para que entienda ejs

//middleware
app.use(logger('dev'));
app.use(bodyParser.urlencoded({extended: false}));

//routes
app.use('/', indexRoutes); 

app.listen(app.get('port'), () => { //escucho peticiones 
    console.log('Server on port ',app.get('port'));
});

