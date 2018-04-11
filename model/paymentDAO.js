var db = require('../util/pooldb.js')

exports.select = function (req, res){
    selectSQL = "select * from payment where companygroupid = " + req.body.groupid + " limit 10"
    db.execSelect(req, res, selectSQL)    
}

 exports.selectById = function (req, res, id){
    selectSQL = "select * from member where payment = " + req.body.groupid + " and id = " + id
    db.execSelect(req, res, selectSQL)    
}

exports.create = function(req, res){
    insertSQL = "insert into payment (id, returncode, userid, methodpayment, amount, duedate, paiddate, contract_id, checknumber, checkbank, manually, entrydate) values ( "
    insertSQL += "nextval('payment_id'), "

    if (req.body.returncode != null){
        insertSQL += "'" + req.body.returncode + "0', "
    }else{
        insertSQL += "'0', "
    }

    if (req.body.userid != null){
        insertSQL += "'" + req.body.userid + "-1', "
    }else{
        insertSQL += "'-1', "
    }

    if (req.body.methodpayment != null){
        insertSQL += "'" + req.body.methodpayment + "', "
    }else{
        insertSQL += "'', "
    }

    if (req.body.amount != null){
        insertSQL += "'" + req.body.amount + "', "
    }else{
        insertSQL += "'', "
    }

    if (req.body.duedate != null){
        insertSQL += "'" + req.body.duedate + "', "
    }else{
        insertSQL += "'', "
    }

    if (req.body.paiddate != null){
        insertSQL += "'" + req.body.paiddate + "', "
    }else{
        insertSQL += "'', "
    }
   
    if (req.body.contract_id != null){
        insertSQL += "'" + req.body.contract_id + "', "
    }else{
        insertSQL += "'', "
    }

    if (req.body.checknumber != null){
        insertSQL += "'" + req.body.checknumber + "', "
    }else{
        insertSQL += "'', "
    }

    if (req.body.checkbank != null){
        insertSQL += "'" + req.body.checkbank + "', "
    }else{
        insertSQL += "'', "
    }

    if (req.body.manually != null){
        insertSQL += "'" + req.body.manually + "', "
    }else{
        insertSQL += "'', "
    }

    if (req.body.entrydate != null){
        insertSQL += "'" + req.body.entrydate + "', "
    }else{
        insertSQL += "'', "
    }

   db.execInsert(req, res, insertSQL)
}


 exports.update = function(req, res, id){
    updateSQL = "update payment set "
    auxComma = "";

    if (req.body.returncode != null){
        updateSQL += auxComma + "returncode = '" + req.body.returncode + "0' "
        auxComma = ","
    }

    if (req.body.userid != null){
        updateSQL += auxComma + "userid = '" + req.body.userid + " -1' "
        auxComma = ","
    }

    if (req.body.amount != null){
        updateSQL += auxComma + "amount = '" + req.body.amount + "' "
        auxComma = ","
    }

    if (req.body.duedate != null){
        updateSQL += auxComma + "duedate = '" + req.body.duedate + "' "
        auxComma = ","
    }

    if (req.body.paiddate != null){
        updateSQL += auxComma + "paiddate = '" + req.body.paiddate + "' "
        auxComma = ","
    }

    if (req.body.contract_id != null){
        updateSQL += auxComma + "contract_id = '" + req.body.contract_id + "' "
        auxComma = ","
    }

    if (req.body.checknumber != null){
        updateSQL += auxComma + "checknumber = '" + req.body.checknumber + "'"
        auxComma = ","
    }

    if (req.body.checkbank != null){
        updateSQL += auxComma + "checkbank = '" + req.body.checkbank + "'"
        auxComma = ","
    }

    if (req.body.manually != null){
        updateSQL += auxComma + "manually = '" + req.body.manually + "'"
        auxComma = ","
    }

    if (req.body.entrydate != null){
        updateSQL += auxComma + "entrydate = '" + req.body.entrydate + "' "
        auxComma = ","
    }

    updateSQL += "where id = " + id + " and companygroupid = " + req.body.groupid

    console.log(updateSQL)
   
    db.execUpdate(req, res, updateSQL)
} 