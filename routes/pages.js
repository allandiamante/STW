const express = require('express');

const router = express.Router();

router.get('/', (req, res) =>{
    res.render('index');

});

router.get('/register', (req, res) =>{
    res.render('register');

});

router.get('/cadastrov', function(req,res,next){
    res.render('cadastrov', {output: req.params.id});
});

router.get('/login', (req, res) =>{
    res.render('login');

});

router.get('/indexl', (req, res) =>{
    res.render('indexl');

});

router.get('/gerenciarv', (req, res) =>{
    res.render('gerenciarv');

});

router.get('/cadastrov', (req, res) =>{
    res.render('cadastrov');

});
module.exports = router;