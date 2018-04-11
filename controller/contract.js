const urlDefault = '/v1/contract/';
var Validator = require('jsonschema').Validator;
var v = new Validator();
var dao = require('../model/contractDAO');
var schema =   {"type": "object","properties": { "unit": {"type": "string"},
    "enddate":{ "type": "date"},
    "methodpayment":{"type": "string"},
    "numberofpayments":{"type": "bigint"},
    "price":{"type": "string"},
    "startdate":{"type": "date"},
    "plan":{"type": "string"},
    "account":{"type": "string"},
    "agency":{"type": "string"},
    "bank":{"type": "string"},
    "brandcc":{"type": "string"},
    "ccvcc":{"type": "string"},
    "discount":{"type": "string"},
    "numbercc":{"type": "string"},
    "promocode":{"type": "string"},
    "validcc": { "type": "string"},
    "member_id":{"type": "bigint"}
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
  