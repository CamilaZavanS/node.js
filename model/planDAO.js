var db = require('../util/pooldb.js')

exports.select = function (req, res){
    selectSQL = "select * from plan where companygroupid = " + req.body.groupid + " limit 10"
    db.execSelect(req, res, selectSQL)    
}

exports.selectById = function (req, res, id){
    selectSQL = "select * from plan where companygroupid = " + req.body.groupid + " and id = " + id
    db.execSelect(req, res, selectSQL)    
} 

exports.create = function(req, res){
            insertSQL = "insert into plan (id, name, type, months, price, maintenancefee, registrationfee, gracemaintenancefee, graceregistrationfee, accessfrom, accessto, renew, extid, duration, installreg, installman, nsessions, status) values ( "
            insertSQL += "nextval('plan_id'), "
            insertSQL += "'" + req.body.name + "', "
            insertSQL += "'" + req.body.type + "', "
            insertSQL += "'" + req.body.months + "', "
            insertSQL += "'" + req.body.price + "', "

            if (req.body.maintenancefee != null){
                insertSQL += "'" + req.body.maintenancefee + "', "
            }else{
                insertSQL += "null, "
            }

            if (req.body.registrationfee != null){
                insertSQL += "'" + req.body.registrationfee + "', "
            }else{
                insertSQL += "null, "
            }

            insertSQL += "'" + req.body.gracemaintenancefee + "', "
            insertSQL += "'" + req.body.graceregistrationfee + "', "

            if (req.body.acessfrom != null){
                insertSQL += "'" + req.body.acessfrom + "', "
            }else{
                insertSQL += "null, "
            }

            if (req.body.acessto != null){
                insertSQL += "'" + req.body.acessto + "', "
            }else{
                insertSQL +="null, "
            }

            if (req.body.renew != null){
                insertSQL += "'" + req.body.renew + "', "
            }else{
                insertSQL +="false, "
            }
            
            if (req.body.extid != null){
                insertSQL += "'" + req.body.extid + "', "
            }else{
                insertSQL += "'', "
            }

            insertSQL += "'" + req.body.duration + "', "
            insertSQL += "'" + req.body.installreg + "', "
            insertSQL += "'" + req.body.installman + "', "
            insertSQL += "'" + req.body.nsessions + "', "
            
            if (req.body.status != null){
                insertSQL += "'" + req.body.status + "', "
            }else{
                insertSQL += "'' "
            }
        
            insertSQL += ") RETURNING id" 
            console.log(insertSQL)

            db.execInsert(req, res, insertSQL)
        }
        
    exports.update = function(req, res, id){
            updateSQL = "update plan set "
            auxComma = "";

            if (req.body.type != null){
                updateSQL += auxComma + "type = '" + req.body.type + "' "
                auxComma = ","
            }

            if (req.body.months != null){
                updateSQL += auxComma + "months = '" + req.body.months + "' "
                auxComma = ","
            }

            if (req.body.price != null){
                updateSQL += auxComma + "price = '" + req.body.price + "' "
                auxComma = ","
            }

            if (req.body.maintenancefee != null){
                updateSQL += auxComma + "maintenancefee = '" + req.body.maintenancefee + "' "
                auxComma = ","
            }

            if (req.body.registrationfee != null){
                updateSQL += auxComma + "registrationfee = '" + req.body.registrationfee + "' "
                auxComma = ","
            }

            if (req.body.gracemaintenancefee != null){
                updateSQL += auxComma + "gracemaintenancefee = '" + req.body.gracemaintenancefee + "' "
                auxComma = ","
            }

            if (req.body.graceregistrationfee != null){
                updateSQL += auxComma + "graceregistrationfee = '" + req.body.graceregistrationfee + "' "
                auxComma = ","
            }

            if (req.body.acessfrom != null){
                updateSQL += auxComma + "acessfrom = '" + req.body.acessfrom + "' "
                auxComma = ","
            }
            if (req.body.acessto != null){
                updateSQL += auxComma + "acessto = '" + req.body.acessto + "' "
                auxComma = ","
            }

            if (req.body.renew != null){
                updateSQL += auxComma + "renew = '" + req.body.renew + "' "
                auxComma = ","
            }

            if (req.body.extid != null){
                updateSQL += auxComma + "extid = '" + req.body.extid + "' "
                auxComma = ","
            }

            if (req.body.duration != null){
                updateSQL += auxComma + "duration = '" + req.body.duration + "' "
                auxComma = ","
            }

            if (req.body.installman != null){
                updateSQL += auxComma + "installman = '" + req.body.installman + "' "
                auxComma = ","
            }

            if (req.body.installreg != null){
                updateSQL += auxComma + "installreg = '" + req.body.installreg + "' "
                auxComma = ","
            }

            if (req.body.nsessions != null){
                updateSQL += auxComma + "nsessions = '" + req.body.nsessions + "' "
                auxComma = ","
            }

            if (req.body.status != null){
                updateSQL += auxComma + "status = '" + req.body.status + "' "
                auxComma = ""
            }

            updateSQL += "where id = " + id + " and unit in (select id from unit where companygroupid = " + req.body.groupid + ")"

            console.log(updateSQL)
   
            db.execUpdate(req, res, updateSQL)
        
    }


