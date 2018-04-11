var express = require('express');
var bodyParser = require('body-parser');
var member = require('./controller/member.js');
var product = require('./controller/product.js');
var plan = require('./controller/plan.js');
var aclass = require('./controller/aclass.js');
var unit = require('./controller/unit.js');
var promotion = require('./controller/promotion.js');
var payment = require('./controller/payment.js');
var contract = require('./controller/contract.js');
var security = require('./security/auth.js');
var app = express();

app.disable('x-powered-by')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));
        
app.get('/v1/member', function (req, res) {
    security.checkAuth(req, res, member.getAll);
})

app.get('/v1/member/:id', function (req, res) {
    security.checkAuth(req, res, member.getById); 
})

app.put('/v1/member/:id', function (req, res) {
    security.checkAuth(req, res, member.update);
})

app.post('/v1/member', function (req, res) {
    security.checkAuth(req, res, member.create);
})

app.post('/v1/product', function (req, res) {
    security.checkAuth(req, res, product.create);
})

app.put('/v1/product/:id', function (req, res) {
    security.checkAuth(req, res, product.update);
})

app.get('/v1/product/:id', function (req, res) {
    security.checkAuth(req, res, product.getById); 
})

app.get('/v1/product', function (req, res) {
    security.checkAuth(req, res, product.getAll);
 })

app.post('/v1/promotion', function (req, res) {
    security.checkAuth(req, res, promotion.create);
})

app.put('/v1/promotion/:id', function (req, res) {
    security.checkAuth(req, res, promotion.update);
})

app.get('/v1/promotion/:id', function (req, res) {
    security.checkAuth(req, res, promotion.getById); 
})

app.get('/v1/promotion', function (req, res) {
    security.checkAuth(req, res, promotion.getAll);
})

app.post('/v1/aclass', function (req, res) {
    security.checkAuth(req, res, aclass.create);
})

app.put('/v1/aclass/:id', function (req, res, id) {
    security.checkAuth(req, res, aclass.update);
})

app.get('/v1/aclass/:id', function (req, res) {
    security.checkAuth(req, res, aclass.getById); 
})

app.get('/v1/aclass', function (req, res) {
    security.checkAuth(req, res, aclass.getAll);
})

app.get('/v1/unit/:id', function (req, res) {
    security.checkAuth(req, res, unit.getById); 
})

app.get('/v1/unit', function (req, res) {
    security.checkAuth(req, res, unit.getAll);
})

app.post('/v1/plan', function (req, res) {
    security.checkAuth(req, res, member.create);
})

app.put('/v1/plan/:id', function (req, res) {
    security.checkAuth(req, res, plan.update);
})

app.get('/v1/plan/:id', function (req, res) {
    security.checkAuth(req, res, plan.getById); 
})

app.get('/v1/plan', function (req, res) {
    security.checkAuth(req, res, plan.getAll);
})

app.get('/v1/payment', function (req, res) {
    security.checkAuth(req, res, payment.getAll);
})

app.get('/v1/payment/:id', function (req, res) {
    security.checkAuth(req, res, payment.getById); 
})

app.put('/v1/payment/:id', function (req, res) {
    security.checkAuth(req, res, payment.update);
})

app.post('/v1/payment', function (req, res) {
    security.checkAuth(req, res, payment.create);
})

app.get('/v1/contract', function (req, res) {
    security.checkAuth(req, res, member.getAll);
})

app.get('/v1/contract/:id', function (req, res) {
    security.checkAuth(req, res, member.getById); 
})

app.put('/v1/contract/:id', function (req, res) {
    security.checkAuth(req, res, member.update);
})

app.post('/v1/contract', function (req, res) {
    security.checkAuth(req, res, member.create);
})

var server = app.listen(3000, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})