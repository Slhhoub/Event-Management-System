const db=require('../config/dataebase');

const Event=require('../models/Event');

let newEvent=[
    new Event({
        title:'this is event',
        description:'this is the best event in world ',
        location:'morroco',
        date:Date.now(),
        created_at:Date.now()
    }),
    new Event({
        title:'this is event',
        description:'this is the best event in world ',
        location:'morroco',
        date:Date.now(),
        created_at:Date.now()
    }),
    new Event({
        title:'this is event',
        description:'this is the best event in world ',
        location:'morroco',
        date:Date.now(),
        created_at:Date.now()
    }),
    new Event({
        title:'this is event',
        description:'this is the best event in world ',
        location:'morroco',
        date:Date.now(),
        created_at:Date.now()
    }),
    new Event({
        title:'this is event',
        description:'this is the best event in world ',
        location:'morroco',
        date:Date.now(),
        created_at:Date.now()
    }),
    new Event({
        title:'this is event',
        description:'this is the best event in world ',
        location:'morroco',
        date:Date.now(),
        created_at:Date.now()
    }),
    new Event({
        title:'this is event',
        description:'this is the best event in world ',
        location:'morroco',
        date:Date.now(),
        created_at:Date.now()
    }),
    new Event({
        title:'this is event',
        description:'this is the best event in world ',
        location:'morroco',
        date:Date.now(),
        created_at:Date.now()
    }),
    new Event({
        title:'this is event',
        description:'this is the best event in world ',
        location:'morroco',
        date:Date.now(),
        created_at:Date.now()
    }),

] ;

newEvent.forEach((event)=>{
    event.save()
    .then(()=>{
        console.log('record was added');
    })
    .catch((err)=>{
        console.log(err);
    });
});


