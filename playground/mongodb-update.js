const { MongoClient, ObjectId } = require('mongodb');

const url = 'mongodb://localhost:27017';

MongoClient.connect(url, (err, client) => {
  if (err) {
    console.log('Could not establish connection...');
  }

  console.log('Connection established');

  const db = client.db('TodoApp');
  
  db.collection('Todos').findOneAndUpdate({
    _id: new ObjectId('5ad2defc2927f910c00879c0')
  }, {
    $set: { completed: true }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });


  // client.close();
})