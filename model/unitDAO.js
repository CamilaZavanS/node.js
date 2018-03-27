var db = require('../util/pooldb.js')

exports.select = function (req, res){
    selectSQL = "select * from unit where companygroupid = " + req.body.groupid + " limit 10"
    db.execSelect(req, res, selectSQL)    
}

exports.selectById = function (req, res, id){
    selectSQL = "select * from unit where companygroupid = " + req.body.groupid + " and id = " + id
    db.execSelect(req, res, selectSQL)    
} 

exports.create = function(req, res){
        insertSQL = "insert into unit (id, name, address, city, neighborhood, phone, register, state, zipcode, company, trade, extid, latitude, longitude) values ( "
        insertSQL += "nextval('unit_id'), "
        insertSQL += "'" + req.body.name + "', "

        if (req.body.addres != null){
            insertSQL += "'" + req.body.addres + "', "
        }else{
            insertSQL += "'', "
        }
        
        if (req.body.city != null){
            insertSQL += "'" + req.body.city + "', "
        }else{
            insertSQL += "'', "
        }

        if (req.body.neighborhood != null){
            insertSQL += "'" + req.body.neighborhood + "', "
        }else{
            insertSQL += "'', "
        }

        if (req.body.phone != null){
            insertSQL += "'" + req.body.phone + "', "
        }else{
            insertSQL += "'', "
        }
        insertSQL += "'" + req.body.register + "', "

        if (req.body.state != null){
            insertSQL += "'" + req.body.state + "', "
        }else{
            insertSQL += "'', "
        }

        if (req.body.zipcode != null){
            insertSQL += "'" + req.body.zipcode + "', "
        }else{
            insertSQL += "'', "
        }

        insertSQL += "'" + req.body.company + "', "
        insertSQL += "'" + req.body.trade + "', "

        if (req.body.extid != null){
            insertSQL += "'" + req.body.extid + "', "
        }else{
            insertSQL += "'', "
        }

        insertSQL += "'" + req.body.latitude + "', "
        insertSQL += "'" + req.body.longitude + "' "
        insertSQL += ") RETURNING id" 
        console.log(insertSQL)

        db.execInsert(req, res, insertSQL)
    }
    
