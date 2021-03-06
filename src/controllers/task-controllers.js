var express = require('express');
var model = require('../models/task')();
var taskControllers = {};

// ------------- Listar tareas ------------
taskControllers.list = function (req,res) {
    model.find({}, (err,tasks) => {
        console.log('aqui llega2')
        if(err) throw err;
        res.render('index', {
            title: 'CRUD',
            tasks: tasks
        });
    });
}

// ------------- Agregar tarea ------------
taskControllers.add = function (req,res) {
    let body = req.body;
    body.status = false;

    model.create(body, (err, task) => {
        if(err) throw err;
        res.redirect('/');
        
    })
}

// ------------- Cambiar tarea ------------
taskControllers.turn = function (req,res){
    let id=req.body.id;
    model.findById(id, (err, task) => {
        if(err) throw err;
        task.status = !task.status;
        task.save()
            .then(() => res.send(task.status))
            //return res.send(task.status);
    });
}

// ------------- Eliminar Tarea ------------
taskControllers.delete = function (req,res){
    let id=req.params.id;
    model.remove({_id: id}, (err,task) => {
        if(err) throw err;
        res.redirect('/')
        
    });
}

// ------------- Editar Tarea ------------
taskControllers.edit = function (req,res){
    let id=req.body.id;
    console.log(id);
    model.findById(id, (err, task) => {
        if(err) throw err;
        res.send(task)
            //return res.send(task.status);
    });
}

// ------------- Editar Tarea ------------
taskControllers.update = function (req, res){
    
}


module.exports = taskControllers;