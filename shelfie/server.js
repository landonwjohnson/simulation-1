const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const massive = require('massive');
require('dotenv').config();

const port = process.env.PORT || 3000;
const app = express();
app.use(bodyParser.json());

massive( process.env.CONNECTION_STRING )
  .then( dbInstance => {
      app.set('db', dbInstance) 
      return dbInstance
  })
  .then( (dbInstance) => {
      return dbInstance.setTables()
  })
  .catch( err  => {
    console.error(err)
  });

app.put('/api/bin', (req, res, next) => {
const dbInstance = req.app.get('db');
dbInstance.updateBin([req.body.id, req.body.name, req.body.price, req.body.url])
    .then( () => res.status(200).send() )
    .catch( (err) => res.status(500).send(err) );

});


app.get('/api/bin/:id', (req, res, next) => {
    const dbInstance = req.app.get('db');
    dbInstance.getBin([req.params.id])
        .then( (binInfo) => res.status(200).send(binInfo) )
        .catch( (err) => res.status(500).send(err) );
    });


app.listen(port, function(){
    console.log(`Listening to ${port} `);
})