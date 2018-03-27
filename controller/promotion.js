const urlDefault = '/v1/promotion/';
var Validator = require('jsonschema').Validator;
var v = new Validator();
var dao = require('../model/promotionDAO');
var schema = {"type": "object","properties": {
    "active": {"type": "boolean"},
    "code":{ "type": "string","minLength": 1,"maxLength": 10},
    "description":{"type": "string"},
    "discount":{"type": "string"},
    "discountfee":{"type": "string"},
    "max":{ "type": "string","minLength": 2,"maxLength": 10},
    "used":{"type": "string"},
    "maintancediscountfee": {"type": "string"},
    "companygroupid": {"type": "string"},
    },"required": ["max", "discount","discountfee", "used", "maintancediscountfee"]};
    

 var schemaUpdate = {"type": "object","properties": {
    "active": {"type": "boolean"},
    "code":{ "type": "string","minLength": 1,"maxLength": 10},
    "description":{"type": "string"},
    "discount":{"type": "string"},
    "discountfee":{"type": "string"},
    "max":{ "type": "string","minLength": 2,"maxLength": 10},
    "used":{"type": "string"},
    "maintancediscountfee": {"type": "string"},
    "companygroupid": {"type": "string"},
    }};

 exports.create = function (req, res){
    res.set('Content-Type', 'application/json');
    result = v.validate(req.body , schemaUpdate);
    if (result.valid){
        dao.create(req, res);
    }else{
        res.status(400).send(result.errors);        
    }
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