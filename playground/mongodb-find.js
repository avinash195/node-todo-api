const { MongoClient, ObjectId } = require('mongodb');

const url = 'mongodb://localhost:27017';

MongoClient.connect(url, (err, client) => {
  if (err) {
    console.log('Could not establish connection...');
  }

  console.log('Connection established');

  const db = client.db('TodoApp');

  // db.collection('Todos').find().toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // })

  db.collection('Users').find({name: 'Avinash'}).toArray().then((result) => {
    console.log(JSON.stringify(result, undefined, 2));
  }, (err) => {
    console.log('Unable to fetch user', err);
  })
  // client.close();
})