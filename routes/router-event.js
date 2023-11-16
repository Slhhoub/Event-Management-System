const express = require('express');
const router = express.Router();
const Event = require('../models/Event');
const bodyParser = require('body-parser');
const { check, validationResult } = require('express-validator');
const moment =require('moment');
moment().format();


// parse application/x-www-form-urlencoded
router.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
router.use(bodyParser.json())
router.get('/', (req, res) => {
    Event.find()
        .then((events) => {
            let chunk = [];
            let chunkSize = 3;
            for (let i = 0; i < events.length; i += chunkSize) {
                chunk.push(events.slice(i, chunkSize + i));
            }
            // res.json(chunk);
            //res.render('event/index');
            res.render('event/index', {
                chunk: chunk,
                message: req.flash('info')
            });
        })
        .catch((err) => {
            console.log(err);
        })
    // res.render('event/index');
});

// show event
router.get('/events/:id', (req, res) => {

    Event.findOne({ _id: req.params.id })
        .then((event) => {
            res.render('event/show', {
                event: event
            });
        })
        .catch((err) => {
            console.log(err);
        })
});

// create new events
router.get('/create', (req, res) => {
    res.render('event/create', {
        errors: req.flash('errors')
    });
});
// save create event
router.post('/create', [
    check('title').isLength({ min: 5 }).withMessage('Title should be more than 5 char'),
    check('description').isLength({ min: 5 }).withMessage('description should be more than 5 char'),
    check('location').isLength({ min: 5 }).withMessage('location should be more than 5 char'),
    check('date').isLength({ min: 5 }).withMessage('date should be valid date'),
], (req, res) => {
    const error = validationResult(req);

    if (!error.isEmpty()) {
        req.flash('errors', error.array())
        // res.render('event/create',{
        //     errors:error.array()
        // })
        res.redirect('/create/')
    } else {

        let newEvent = new Event({
            title: req.body.title,
            description: req.body.description,
            location: req.body.location,
            date: req.body.date,
            created_at: Date.now()
        });
        newEvent.save()
            .then(() => {

                req.flash('info', 'event was added')
                res.redirect('/');
            })
            .catch((err) => {
                console.log(err);
            });
    }
});
// edit event
router.get('/edit/:id', (req, res) => {

    Event.findOne({ _id: req.params.id })
        .then((event) => {
            res.render('event/edit', {
                event: event,
                eventDate:moment(event.date).format('YYYY-MM-DD'),
                errors: req.flash('errors'),
                message: req.flash('info')
            });
        })
        .catch((err) => {
            console.log(err);
        })
});
// update the form
router.post('/update',[
    check('title').isLength({ min: 5 }).withMessage('Title should be more than 5 char'),
    check('description').isLength({ min: 5 }).withMessage('description should be more than 5 char'),
    check('location').isLength({ min: 5 }).withMessage('location should be more than 5 char'),
    check('date').isLength({ min: 5 }).withMessage('date should be valid date'),  
],(req,res)=>{
    const error = validationResult(req);
    if (!error.isEmpty()) {
        req.flash('errors', error.array());
        res.redirect('/edit/'+req.body.id);
    } else {
        //create object
        let newFileds={
            title:req.body.title,
            description:req.body.description,
        }
    }        
})

module.exports = router;