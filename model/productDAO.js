var db = require('../util/pooldb.js')

exports.select = function (req, res){
    selectSQL = "select * from product where companygroupid = " + req.body.groupid + " limit 10"
    db.execSelect(req, res, selectSQL)    
}

exports.selectById = function (req, res, id){
    selectSQL = "select * from product where companygroupid = " + req.body.groupid + " and id = " + id
    db.execSelect(req, res, selectSQL)    
} 

exports.create = function(req, res){
    insertSQL = "insert into product (id, allowsellnostock, buyprice, category, chartaccountid, code, controlstock, minstock, name, price, stock, unit) values ( "
    insertSQL += "nextval('product_id'), "

        if (req.body.allownostock != null){
            insertSQL += "" + req.body.allowsellnostock + ", "
        }else{
            insertSQL += "false, "
        }


        if (req.body.buyprice != null){
          insertSQL += "'" + req.body.buyprice + "', "
        }else{
           insertSQL += "null, "
        }

        if (req.body.category != null){
            insertSQL += "'" + req.body.category + "', "
        }else{
            insertSQL += "'', "
        }

        insertSQL += "'" + req.body.chartaccountid + "', "

        if (req.body.code != null){
            insertSQL += "'" + req.body.code + "', "
        }else{
            insertSQL += "null, " 
        }

        if (req.body.controlstock != null){
            insertSQL += "" + req.body.controlstock + ", "
        }else{
            insertSQL += "false, "
        }
       
        if (req.body.mainstock != null){
            insertSQL += "'" + req.body.minstock + "', "
        }else{
            insertSQL += "null, "
        }
        
        insertSQL += "'" + req.body.name + "', "
        insertSQL += "'" + req.body.price + "', "
       
        if (req.body.stock != null){
            insertSQL += "'" + req.body.stock + "', "
        }else{
            insertSQL += "null, "
        }

        if (req.body.unit != null){
            insertSQL += "'" + req.body.unit + "' "
        }else{
            insertSQL += "null "
        }
        
        insertSQL += ") RETURNING id" 
        console.log(insertSQL)

        db.execInsert(req, res, insertSQL)
    }
    
 exports.update = function(req, res, id){
        updateSQL = "update product set "
        auxComma = "";

    if (req.body.allowsellnostock != null){
        updateSQL += auxComma + "allowsellnostock = '" + req.body.allowsellnostock + "' "
        auxComma = ","
    }

    if (req.body.buyprice != null){
        updateSQL += auxComma + "buyprice = '" + req.body.buyprice + "' "
        auxComma = ","
    }
    
    if (req.body.category != null){
        updateSQL += auxComma + "category = '" + req.body.category + "' "
        auxComma = ","
    }

    if (req.body.chartaccountid != null){
        updateSQL += auxComma + "chartaccountid = '" + req.body.chartaccountid + "' "
        auxComma = ","
    }

    if (req.body.code != null){
        updateSQL += auxComma + "code = '" + req.body.code + "' "
        auxComma = ","
    }
    if (req.body.controlstock != null){
        updateSQL += auxComma + "controlstock = '" + req.body.controlstock + "' "
        auxComma = ","
    }
    if (req.body.minstock != null){
        updateSQL += auxComma + "minstock = '" + req.body.minstock + "' "
        auxComma = ","
    }
    if (req.body.name != null){
        updateSQL += auxComma + "name = '" + req.body.name + "' "
        auxComma = ","
    }
    if (req.body.price != null){
        updateSQL += auxComma + "price = '" + req.body.price + "' "
        auxComma = ","
    }

    if (req.body.stock != null){
        updateSQL += auxComma + "stock = '" + req.body.stock + "' "
        auxComma = ","
    }

    updateSQL += "where id = " + id + " and unit in (select id from unit where companygroupid = " + req.body.groupid + ")"

    console.log(updateSQL)
   
    db.execUpdate(req, res, updateSQL)

    }

    