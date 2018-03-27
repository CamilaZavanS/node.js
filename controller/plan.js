const urlDefault = '/v1/plan/';
var Validator = require('jsonschema').Validator;
var v = new Validator();
var dao = require('../model/planDAO');
var schema = {"type": "object","properties": {
    "name": { "type": "string","minLength": 5,"maxLength": 50},
    "type":{ "type": "string","minLength": 1,"maxLength": 50},
    "months":{"type": "string"},
    "price":{ "type": "string","minLength": 1,"maxLength": 50},
    "maintenancefee":{"type": "string"},
    "registrationfee":{"type": "string"},
    "gracemaintenancefee":{"type": "string"},
    "graceregistrationfee":{"type": "string"},
    "accessfrom":{"type": "string"},
    "accessto": {"type": "string"},
    "renew": {"type": "boolean"},
    "extid": {"type": "string"},
    "duration": { "type": "string","minLength": 1,"maxLength": 50},
    "installman": {"type": "string"},       
    "installreg": {"type": "string"},       
    "nsessions": {"type": "string"},   
    "status": {"type": "string"}
    },"required": ["name", "type", "duration"]};

var schemaUpdate = {"type": "object","properties": {
    "name": { "type": "string","minLength": 5,"maxLength": 50},
    "type":{ "type": "string","minLength": 1,"maxLength": 50},
    "months":{"type": "string"},
    "price":{ "type": "string","minLength": 1,"maxLength": 50},
    "maintenancefee":{"type": "string"},
    "registrationfee":{"type": "string"},
    "gracemaintenancefee":{"type": "string"},
    "graceregistrationfee":{"type": "string"},
    "accessfrom":{"type": "string"},
    "accessto": {"type": "string"},
    "renew": {"type": "boolean"},
    "extid": {"type": "string"},
    "duration": { "type": "string","minLength": 1,"maxLength": 50},
    "installman": {"type": "string"},       
    "installreg": {"type": "string"},       
    "nsessions": {"type": "string"},   
    "status": {"type": "string"}
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
    
      