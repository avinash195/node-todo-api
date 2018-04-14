const { MongoClient, ObjectId } = require('mongodb');

const url = 'mongodb://localhost:27017';

MongoClient.connect(url, (err, client) => {
  if (err) {
    console.log('Could not establish connection...');
  }

  console.log('Connection established');

  const db = client.db('TodoApp');
  
  // deleteMany
  // db.collection('Users').deleteMany({name: 'Avinash'}).then((result) => {
  //   console.log(result);
  // });

  // deleteOne
  // db.collection('Users').deleteOne({age: "24"}).then((result) => {
  //   console.log(result);
  // })

  // // findOneAndDelete
  // db.collection('Users').findOneAndDelete({age: "26"}).then((result) => {
  //   console.log(result);
  // })
  // client.close();
})