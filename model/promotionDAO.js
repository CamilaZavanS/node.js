var db = require('../util/pooldb.js')

exports.select = function (req, res){
    selectSQL = "select * from offer where companygroupid = " + req.body.groupid + " limit 10"
    db.execSelect(req, res, selectSQL)    
}

exports.selectById = function (req, res, id){
    selectSQL = "select * from offer where companygroupid = " + req.body.groupid + " and id = " + id
    db.execSelect(req, res, selectSQL)    
} 

    exports.create = function(req, res){
       insertSQL = "insert into offer (id, active, code, description, discount, discountfee, max, used, maintancediscountfee, companygroupid) values ( "
       insertSQL += "nextval('offer_id'), "
    
        if (req.body.active != null){
            insertSQL += "'" + req.body.active + "', "
        }else{
            insertSQL += "false,"
        }

        insertSQL += "'" + req.body.code + "',"

        if (req.body.description != null){
            insertSQL += "'" + req.body.description + "', "
        }else{
            insertSQL += "'', "
        }

        insertSQL += "'" + req.body.discount +  "', "
        insertSQL += "'" + req.body.discountfee + "', "
        insertSQL += "'" + req.body.max +  "', "
        insertSQL += "'" + req.body.used + "', "
        insertSQL += "'" + req.body.maintancediscountfee + "', "
        insertSQL += req.body.groupid
        insertSQL += ") RETURNING id" 
        console.log(insertSQL)

        db.execInsert(req, res, insertSQL)
    }
    
    exports.update = function(req, res, id){
        updateSQL = "update promotion set "
        auxComma = "";
    
    
        if (req.body.code != null){
            updateSQL += auxComma + "code = '" + req.body.code + "' "
            auxComma = ","
        }

        if (req.body.description != null){
            updateSQL += auxComma + "description = '" + req.body.description + "' "
            auxComma = ","
        }

        if (req.body.discount != null){
            updateSQL += auxComma + "discount = '" + req.body.discount + "' "
            auxComma = ","
        }

        if (req.body.discountfee != null){
            updateSQL += auxComma + "discountfee = '" + req.body.discountfee + "' "
            auxComma = ","
        }

        if (req.body.max != null){
            updateSQL += auxComma + "max = '" + req.body.max + "' "
            auxComma = ","
        }

        if (req.body.used != null){
            updateSQL += auxComma + "used = '" + req.body.used + "' "
            auxComma = ","
        }

        if (req.body.maintancediscountfee != null){
            updateSQL += auxComma + "maintancediscountfee = '" + req.body.maintancediscountfee + "' "
            auxComma = ","
        }

        if (req.body.companygroupid != null){
            updateSQL += auxComma + "companygroupid = '" + req.body.companygroupid + "' "
            auxComma = ","
        }

        updateSQL += "where id = " + id + " and companygroupid = " + req.body.groupid

            console.log(updateSQL)
   
        db.execUpdate(req, res, updateSQL)
    }