var moongoose=require('mongoose');

moongoose.Promise=global.Promise;
moongoose.connect('mongodb://localhost:27017/TodoApp');

var Todo=moongoose.model('Todo',{
    text:{
        type:String
    },
    completed:{
        type:Boolean
    },
    completedAt:{
        type:Number
    }
});


var newTodo2= new Todo({
    text:'make homework',
    completed:false,
    completedAt:241094
});

newTodo2.save().then((doc)=>{
    console.log('save ', doc);
}, (e)=>{
    console.log('unnable to ssave todo')
});