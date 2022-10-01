//Connect to server localhost:3000 by pulling from controller and router and load modules

//3rd party modules 
import express from 'express';
import cookieParser from 'cookie-parser'; 
import logger from 'morgan'; 
import session from 'express-session'; 

//ES modules fix for __dirname
import path, { dirname } from 'path'; 
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));

//import routes
import indexRouter from './app/routes/index.route.server.js'

//instantiate express app
const app = express();

//set up middleware

//setup ViewEngine EJS
app.set('views', path.join(__dirname, '/app/views') );
app.set('view engine', 'ejs');

app.use(logger('dev')); 
app.use(express.json()); 
app.use(express.urlencoded({extended: false}));
app.use(cookieParser()); 
app.use(express.static(path.join(__dirname, '/client'))); 
app.use(session({
    secret: 'My Secret', 
    saveUninitialized: false,
    resave: false
}))


// use Routes
app.use('/', indexRouter);

app.listen(3000);