var db = require('../util/pooldb.js')

exports.select = function (req, res){
    selectSQL = "select * from aclass where companygroupid = " + req.body.groupid + " limit 10"
    db.execSelect(req, res, selectSQL)    
}

exports.selectById = function (req, res, id){
    selectSQL = "select * from aclass where companygroupid = " + req.body.groupid + " and id = " + id
    db.execSelect(req, res, selectSQL)    
} 

exports.create = function(req, res){
        insertSQL = "insert into aclass (id, dayofweek, name, time, unit, capacity, description, endtime, instructorid) values ( "
        insertSQL += "nextval('member_id'), "
        insertSQL += "'" + req.body.dayofweek + "', "
        insertSQL += "'" + req.body.name + "', "
        insertSQL += "'" + req.body.time + "', "

        if (req.body.unit != null){
            insertSQL += "'" + req.body.unit + "', "
        }else{
            insertSQL += "null, " 
        }

        if (req.body.capacity != null){
            insertSQL += "'" + req.body.capacity + "', "
        }else{
            insertSQL += "null, " 
        }

        if (req.body.description != null){
            insertSQL += "'" + req.body.description + "', "
        }else{
            insertSQL +=  "'', "
        }

        if (req.body.endtime != null){
            insertSQL += "'" + req.body.endtime + "', "
        }else{
            insertSQL += "null, "
        }

        if (req.body.instructorid != null){
            insertSQL += "'" + req.body.instructorid + "'"
        }else{
            insertSQL += "null "
        }
        
        insertSQL += ") RETURNING id" 
        console.log(insertSQL)

        db.execInsert(req, res, insertSQL)
        }
    
    exports.update = function(req, res, id){
            updateSQL = "update aclass set "
            auxComma = "";
        
        if (req.body.dayofweek != null){
            updateSQL += auxComma + "dayofweek = '" + req.body.dayofweek + "' "
            auxComma = ","
        }

        if (req.body.name != null){
            updateSQL += auxComma + "name = '" + req.body.name + "' "
            auxComma = ","
        }

        if (req.body.time != null){
            updateSQL += auxComma + "time = '" + req.body.time + "' "
            auxComma = ","
        }  

        if (req.body.unit != null){
            updateSQL += auxComma + "unit = '" + req.body.unit + "' "
            auxComma = ","
        }

        if (req.body.capacity != null){
            updateSQL += auxComma + "capacity = '" + req.body.capacity + "' "
                auxComma = ","
        }
       
        if (req.body.description != null){
            updateSQL += auxComma + "description = '" + req.body.description + "' "
                auxComma = ","
        }

        if (req.body.endtime != null){
            updateSQL += auxComma + "endtime = '" + req.body.endtime + "' "
                auxComma = ","
        }

        if (req.body.instructorid != null){
            updateSQL += auxComma + "instructorid = '" + req.body.instructorid + "' "
                auxComma = ","
        }

        updateSQL += "where id = " + id + " and unit in (select id from unit where companygroupid = " + req.body.groupid + ")"

        console.log(updateSQL)
       
        db.execUpdate(req, res, updateSQL)
            
        
    }

  