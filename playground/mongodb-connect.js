const { MongoClient, ObjectId } = require('mongodb');

let obj = new ObjectId();
console.log(obj);

// const url = 'mongodb://localhost:27017';

// MongoClient.connect(url, (err, client) => {
//   if (err) {
//     console.log('Could not establish connection...');
//   }

//   console.log('Connection established');

//   const db = client.db('TodoApp');

//   // db.collection('Todos').insertOne({
//   //   text: 'Something to do',
//   //   completed: false
//   // }, (err, result) => {
//   //   if (err) {
//   //     console.log('Unable to insert todo', err);
//   //   }

//   //   console.log(JSON.stringify(result.ops, undefined, 2));
//   // })

//   db.collection('Users').insertOne({
//     name: 'Avinash',
//     age: '23',
//     location: 'Faridabad'
//   }, (err, result) => {
//     if (err) {
//       console.log('Unable to insert the user');
//     }

//     console.log(result.ops);
//   })

//   client.close();
// })