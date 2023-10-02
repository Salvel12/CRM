# Improve customer relationship management, in addition to buying and selling properties, by implementing a CRM system for effective communication and data handling by the company.

Crear un crm que maneje el crear, ver, modificar y borrar sobre los agentes, clientes, e inmuebles además de manejar una base de datos que almacene y que se pidan estos datos desde la misma. 

# Tabla de contenidos
1. Ejemplos del proyecto
2. Objetivo del proyecto
3. Caracteristicas principales
4. Instalación y ejecución del proyecto
5. Construcción
6. Recursos útiles
7. Estado del proyecto
8. Acreditación de colaboradores
9. Autores
10. Contactanos


## EJEMPLOS DEL PROYECTO


## OBJETIVO DEL PROYECTO
Este proyecto fue contruido con fines Educativos e institucionales, fue construido como parcial de la materia Proyecto de construcción de software de la universidad Politecnico Jaime Izasa Cadavid

## CARACTERISTICAS PRINCIPALES
Es un CRM de una empresa de inmobiliaria ficticia, llamada NexusInmobiliario. Las caracteristicas de este Proyecto consisten en tres CRUD's diferentes para que los usuarios puedan manejar apartamentos, empleados y clientes. 

## INSTALACIÓN Y EJECUCIÓN DEL PROYECTO
Antes de ejecutar el proyecto se deben seguir los siguientes pasos:
1. Descargar el proyecto de Github
2. Abrir Visual Studio Code, una vez ahí iniciar una terminal y poner los siguientes comandos:
   + `npm install ejs`
   + `npm install express`
   + `npm install mysql`
   + `npm install nodemon`
   + `npm install express-myconnection`
   + `npm install express-mysql-session`
   + `npm install bcryptjs`
   + `npm install body-parser`
   + `npm install connect-flash`
   + `npm install morgan`
   + `npm install timeago.js`
   + `npm install express-handelbars`
   + `npm install passport`
   + `npm install passport-local`
   + `npm install express-validator`
   + `npm install express-mysql`
3. Una vez instalado debes inciar una base de datos Mysql
4. En la base de datos debes poner el script que está en el archivo 'db.sql'
5. Para iniciar el programa debes volver a la terminal de Visual Studio Code y poner: `npm run dev`, la terminal le avisará que puerto usa esta página, en este caso es el 3000, así que una vez iniciado el proyecto debes ir a: http://localhost:3000
   - Si presenta fallas con la conección a la base de datos debes ir al archivo keys.js que se encuentra en la carpeta 'database', y verificar que en este fragmento de código:
     ```
     module.exports = { 
     database: { 
       host: 'localhost', 
       user: 'admin', 
       password: 'admin', 
       database: 'crm', 
     } 
   };
   La información de `user` este correcta, de igual manera la de `password`.

## CONSTRUCCIÓN

## RECURSOS ÚTILES
[Como hacer un CRUD con Nodejs parte 1](https://www.youtube.com/watch?v=VuMSq68h-H4)
[Como hacer un CURD con Nodejs parte 2](https://www.youtube.com/watch?v=fLIwK292RPY)
[Como hacer un CURD con Nodejs parte 3](https://www.youtube.com/watch?v=4ugXBRbo1J0&t=781s)
[GitHub del proyecto del video anterior](https://github.com/infodp/crud_nodejs)

## ESTADO DEL PROYECTO
En desarrollo

## ACREDITACIÓN DE COLABORADORES

## AUTORES
- Alejandro Alzate Usuga
- Samuel Alvarez Velasquez
- Julian pulgarin
- Diego Alejandro Zapata García

## CONTACTANOS
- alejandro_alzate80191@elpoli.edu.co
- samuel_alvarez82201@elpoli.edu.co
- julian_pulgarin23191@elpoli.edu.co
- diego_zapata82211@elpoli.edu.co
