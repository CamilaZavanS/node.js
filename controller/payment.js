const urlDefault = '/v1/payment/';
var Validator = require('jsonschema').Validator;
var v = new Validator();
var dao = require('../model/paymentDAO');
var schema =   {"type": "object","properties": {
    "methodpayment": {"type": "string"},
    "amount":{"type": "numeric"},
    "duedate":{"type": "date"},
    "paiddate":{"type": "date"},
    "status":{"type": "string"},
    "contract_id":{"type": "bigint"},
    "checknumber":{"type": "string"},
    "checkbank":{"type": "string"},
    "manually":{"type": "boolean"},
    "entrydate":{"type": "date"}
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
        result = v.validate(req.body , schema);
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
      
