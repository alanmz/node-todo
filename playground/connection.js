const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

   /* db.collection('Todos').insertOne({
        text:'something to do',
        completed:false
    },(err,result)=>{
        if(err){
            console.log('unable to insert to do ', err);
        }
        console.log(JSON.stringify(result.ops,undefined,2));
    });
    */


   db.collection('Users').insertOne({
       name:'alan munoz',
       age:22,
       location:'cdmx'
    },(err,result)=>{
        if(err){
            console.log('unable to insert to do ', err);
        }
        console.log(JSON.stringify(result.ops,undefined,2));
    });



    db.close();
});