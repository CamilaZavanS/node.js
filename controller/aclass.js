const urlDefault = '/v1/aclass/';
var Validator = require('jsonschema').Validator;
var v = new Validator();
var dao = require('../model/aclassDAO');
var schema =   {"type": "object","properties": {
    "dayofweek": {"type": "string"},
    "name":{ "type": "string"},
    "time":{"type": "string"},
    "unit":{"type": "string"},
    "capacity":{"type": "string"},
    "description":{"type": "string"},
    "endtime":{"type": "string"},
    "instructorid": { "type": "string","minLength": 1,"maxLength": 50},
    },"required": ["name", "time", "dayofweek"]};  

    var schemaUp =   {"type": "object","properties": {
        "dayofweek": {"type": "string"},
        "name":{ "type": "string"},
        "time":{"type": "string"},
        "unit":{"type": "string"},
        "capacity":{"type": "string"},
        "description":{"type": "string"},
        "endtime":{"type": "string"},
        "instructorid": { "type": "string","minLength": 1,"maxLength": 50},
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
        result = v.validate(req.body , schemaUp);
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
      