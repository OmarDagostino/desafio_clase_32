# Desafío de la clase 32
# Comisión 55565  de CoderHouse

## Autor : Omar D'Agostino

## Funcionalidades agregadas 
    * Se creo una clase con un diccionario de errores en el archivo errorDictionary.js que devuelve el mensaje de error al solicitar el metodo getErrorMesage () con el codigo correspondiente.

    * Se creo la ruta '/mockingproducts' que devuelve el array products conteniendo 100 productos ficticios generados por faker-js con el formato solicitado. 


## Tecnologías utilizadas : 
- Node JS : v18.16.1
- Motor de plantillas : Handlebars
- Estrategias de autenticación : Passport local y Passport con Git Hub
- Hasheo de password : Bcrypt
- Websocket : socket.io
- Mongo DB Atlas usado con Mongoose
    -base de datos : ecommerce1
    -colecciones : products1 / carts1 / messages1 /sessions / users1
- Dependencias 
    "@faker-js/faker": "^8.2.0",
    "bcrypt": "^5.1.1",
    "commander": "^11.1.0",
    "connect-mongo": "^5.0.0",
    "crypto": "^1.0.1",
    "dotenv": "^16.3.1",
    "express": "^4.18.2",
    "express-handlebars": "^7.1.2",
    "express-session": "^1.17.3",
    "express-validator": "^7.0.1",
    "mongoose": "^7.5.1",
    "mongoose-paginate-v2": "^1.7.4",
    "nodemailer": "^6.9.7",
    "nodemon": "^3.0.1",
    "passport": "^0.6.0",
    "passport-github2": "^0.1.12",
    "passport-local": "^1.0.0",
    "socket.io": "^4.7.2",
    "socket.io-client": "^4.7.2"



   
   

   

   Nota : Se desconecto el manejador de rutas de File System , pero no se eliminó (quedo en un manager separado y se comento en el código de app.js)
