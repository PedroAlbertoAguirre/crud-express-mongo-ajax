const express = require('express');
const router = express.Router();
var taskControllers = require('../controllers/task-controllers');
//const model = require('../models/task')();

router.get('/',  taskControllers.list);
router.post('/add', taskControllers.add);
router.post('/turn/:id', taskControllers.turn);
router.get('/delete/:id', taskControllers.delete);

/*
router.post('/add', (req,res) => {
    let body = req.body;
    body.status = false;

    model.create(body, (err, task) => {
        if(err) throw err;
        res.redirect('/');
    })
});

router.get('/turn/:id', (req,res) => {
    let id=req.params.id;
    model.findById(id, (err, task) => {
        if(err) throw err;
        task.status = !task.status;
        task.save()
            .then(() => res.redirect('/'))
    });
});

router.get('/delete/:id', (req,res) => {
    let id=req.params.id;
    model.remove({_id: id}, (err,task) => {
        if(err) throw err;
        res.redirect('/')

    });

    });
*/
module.exports = router;