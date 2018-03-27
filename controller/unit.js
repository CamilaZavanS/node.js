const urlDefault = '/v1/unit/';
var Validator = require('jsonschema').Validator;
var v = new Validator();
var dao = require('../model/unitDAO');
var schema = {"type": "object","properties":{
"name":{"type": "string","minLength": 5, "maxLength": 50},
"address":{"type": "string"},
"city": {"type": "string"},
"neighborhood": {"type": "string"},
"phone":{"type": "string"},
"register":{"type": "string","minLength": 5, "maxLength": 50},
"state":{"type": "string"},
"zipcode":{"type": "string"},
"company": {"type": "string","minLength": 5, "maxLength": 50},
"trade": {"type": "string","minLength": 5, "maxLength": 50},
"extid":{"type": "string"},
"latitude":{"type": "string"},
"longitude":{"type": "string"}
},"required": ["name", "company", "trade", "register"]};


exports.create = function (req, res){
    res.set('Content-Type', 'application/json');
    result = v.validate(req.body , schema);
    if (result.valid){
        dao.create(req, res);
    }else{
        res.status(400).send(result.errors);        
    }
}

exports.delete = function (req, res){
    id = req.url.replace(urlDefault, '');
    res.status(200).send()
}

exports.update = function (req, res){
    res.set('Content-Type', 'application/json');
    result = v.validate(req.body , schema);
    if (result.valid){
        dao.update(req, res);
    }else{
        res.status(400).send(result.errors);        
    }
}

exports.getAll = function (req, res){
    res.set('Content-Type', 'application/json');
    dao.select(req, res);
}

    exports.getById = function (req, res, id){
        res.set('Content-Type', 'application/json');
        dao.selectById(req, res, id);
}