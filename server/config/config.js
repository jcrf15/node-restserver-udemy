//===========
//Puerto

//=================

process.env.PORT = process.env.PORT || 3000;


//===========
//Entorno
//==========

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';



//===========
//Base de datos
//==========

let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe'

} else {

    urlDB = 'mongodb+srv://jcrf15:Jcrf151681.@cluster0.yn9pz.mongodb.net/cafe?retryWrites=true&w=majority'
}

process.env.URLDB = urlDB;
// mongodb + srv: //jcrf15:<password>@cluster0.yn9pz.mongodb.net/test


// mon