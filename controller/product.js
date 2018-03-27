const urlDefault = '/v1/product/';
var Validator = require('jsonschema').Validator;
var v = new Validator();
var dao = require('../model/productDAO');
var schema = {"type": "object","properties": {
    "allowsellnostock": {"type": "boolean"},
    "buyprice":{"type": "string"},
    "category":{"type": "string"},
    "chartaccountid":{"type": "string"},
    "code":{"type": "string"},
    "controlstock":{"type": "boolean"},
    "minstock":{"type": "string"},
    "name": { "type": "string","minLength": 5,"maxLength": 50},
    "price":{ "type": "string","minLength": 2,"maxLength": 50},
    "stock": {"type": "string"},
    "unit": {"type": "string"}
    },"required": ["name", "price", "chartaccountid"]};

var schemaUpdate = {"type": "object","properties": {
    "allowsellnostock": {"type": "boolean"},
    "buyprice":{"type": "string"},
    "category":{"type": "string"},
    "chartaccountid":{"type": "string"},
    "code":{"type": "string"},
    "controlstock":{"type": "boolean"},
    "minstock":{"type": "string"},
    "name": { "type": "string","minLength": 5,"maxLength": 50},
    "price":{ "type": "string","minLength": 2,"maxLength": 50},
    "stock": {"type": "string"}
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
      