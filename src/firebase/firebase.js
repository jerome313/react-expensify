import * as firebase from 'firebase';

var config = {
   apiKey:process.env.FIREBASE_API_KEY,
   authDomain:process.env.FIREBASE_AUTH_DOMAIN,  
   databaseURL:process.env.FIREBASE_DATABASE_URL,
   projectId:process.env.FIREBASE_PROJECT_ID ,
   storageBucket:process.env.FIREBASE_STORAGE_BUCKET,
   messagingSenderId:process.env.FIREBASE_MESSAGING_SENDER_ID
  };
  
  
firebase.initializeApp(config);

  const database = firebase.database();

  export {firebase, database as default};
//    database.ref().set('expenses');
//    database.ref('expenses').push({
//      description:'dummy',
//      note:'dummy',
//      amount:500,
//      createdAt:123  
//    });

//  database.ref('expenses')
//  .once('value')
//  .then((snapshot)=>{
//    console.log(snapshot.val())
//  })

  // database.ref().set({
//  attributes: {
//    age:24,
//    weight:87
//  } 
// })

// database.ref('attributes/weight').set(90);
// database.ref('attributes/age').remove()
// .then(()=>{
//   console.log('remove succesful');
// }).catch((e)=>{
//   consle.log('remove failed',e)
// })


// database.ref().on('value', (snapshot)=>{
//   const val = snapshot.val();
//   console.log(`the age is ${val.attributes.age} the weight is ${val.attributes.weight}`);
// });