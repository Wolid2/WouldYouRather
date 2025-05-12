// import the module
const express = require('express');
//  importing the router in routes
const  indexRouter = require('./routes');
//creating a new express
const app = express();
//Using the indexRouter for all routes
app.use('/', indexRouter)
// starting a server for the specific port
const server = app.listen(process.env.PORT ||3000, function(){
    console.log("Server is running on port: " , server.address().port);
})


// const port = process.env.PORT || 3000;
//
// app.listen(port, function () {
//     console.log(`Server is running on port ${port}`);
// });
