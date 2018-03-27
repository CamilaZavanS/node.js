const urlDefault = '/v1/member/';
var Validator = require('jsonschema').Validator;
var v = new Validator();
var dao = require('../model/memberDAO');
var schema = {"type": "object","properties": {
    "name": { "type": "string"},
    "cpf": {"type": "string"},
    "rg": {"type": "string","minLength": 9,"maxLength": 9},
    "gender": {"type": "string", "emum": ["M", "F", "J"]},
    "birthday": {"type": "string", "type": "date"},
    "email": {"type": "string","minLength": 2,"maxLength": 30},
    "phonenumber": {"type": "string","pattern": "^[1-9]{2}[1-9][0-9]{8}$}"},
    "cellphonenumber": {"type": "string","pattern": "^[1-9]{2}[2-9][0-9]{7,8}$"},
    "address": {"type": "string"},
    "complement": {"type":"string"},
    "neighborhood": {"type": "string"},
    "city": {"type": "string"},
    "state": {"type": "string"},
    "zipcode": {"type": "string"},
    "latitude": {"type": "double precision"},
    "longitude": {"type": "double precision"},
    "responsible": {"type": "string"},
    "anotation": {"type": "string"},
    "creationdate": {"type": "date"},
    "companygroupid": {"type": "string"}
    },"required": ["name", "rg", "email", "latitude", "longitude"]};  
    
    var schemaUpdate = {"type": "object","properties": {
        "name": { "type": "string"},
        "cpf": {"type": "string"},
        "rg": {"type": "string","minLength": 9,"maxLength": 9},
        "gender": {"type": "string", "emum": ["M", "F", "J"]},
        "birthday": {"type": "string", "type": "date"},
        "email": {"type": "string","minLength": 2,"maxLength": 30},
        "phonenumber": {"type": "string","pattern": "^[1-9]{2}[1-9][0-9]{8}$}"},
        "cellphonenumber": {"type": "string","pattern": "^[1-9]{2}[2-9][0-9]{7,8}$"},
        "address": {"type": "string"},
        "complement": {"type":"string"},
        "neighborhood": {"type": "string"},
        "city": {"type": "string"},
        "state": {"type": "string"},
        "zipcode": {"type": "string"},
        "latitude": {"type": "double precision"},
        "longitude": {"type": "double precision"},
        "responsible": {"type": "string"},
        "anotation": {"type": "string"},
        "creationdate": {"type": "date"},
        "companygroupid": {"type": "string"}
        }};  

exports.create = function (req, res){
    res.set('Content-Type', 'application/json');
    result = v.validate(req.body , schema);
    if (result.valid){
        dao.create(req, res);
    }else{
        res.status(400).send(result.errors);        
    }
}

exports.update = function (req, res, id){
    res.set('Content-Type', 'application/json');
    result = v.validate(req.body , schemaUpdate);
    if (result.valid){
        dao.update(req, res, id);
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