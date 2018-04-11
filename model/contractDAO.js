var db = require('../util/pooldb.js')

exports.select = function (req, res){
    selectSQL = "select * from contract where companygroupid = " + req.body.groupid + " limit 10"
    db.execSelect(req, res, selectSQL)    
}

 exports.selectById = function (req, res, id){
    selectSQL = "select * from member where contract = " + req.body.groupid + " and id = " + id
    db.execSelect(req, res, selectSQL)    
}

exports.create = function(req, res){
    insertSQL = "insert into contract (id, returncode, userid, unit, enddate, methodpayment, numberofpayments, price, startdate, plan, account, agency, bank, bandcc, ccvcc, disconunt, numbercc, promocode, validcc, member_id, creationdate) values ( "
    insertSQL += "nextval('contract_id'), "


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
    
    if (req.body.unit != null){
        insertSQL += "'" + req.body.unit + "', "
    }else{
        insertSQL += "'', "
    }
    if (req.body.enddate != null){
        insertSQL += "'" + req.body.enddate + "', "
    }else{
        insertSQL += "'', "
    }

    if (req.body.methodpayment != null){
        insertSQL += "'" + req.body.methodpayment + "', "
    }else{
        insertSQL += "'', "
    }

    if (req.body.numberofpayments != null){
        insertSQL += "'" + req.body.numberofpayments + "', "
    }else{
        insertSQL += "'', "
    }

    if (req.body.price != null){
        insertSQL += "'" + req.body.price + "', "
    }else{
        insertSQL += "'', "
    }

    if (req.body.startdate != null){
        insertSQL += "'" + req.body.startdate + "', "
    }else{
        insertSQL += "'', "
    }

    if (req.body.plan != null){
        insertSQL += "'" + req.body.plan + "', "
    }else{
        insertSQL += "'', "
    }

    if (req.body.account != null){
        insertSQL += "'" + req.body.account + "', "
    }else{
        insertSQL += "'', "
    }

    if (req.body.agency != null){
        insertSQL += "'" + req.body.agency + "', "
    }else{
        insertSQL += "'', "
    }

    if (req.body.bank != null){
        insertSQL += "'" + req.body.bank + "', "
    }else{
        insertSQL += "'', "
    }

    if (req.body.brandcc != null){
        insertSQL += "'" + req.body.brandcc + "', "
    }else{
        insertSQL += "'', "
    }

    if (req.body.ccvcc != null){
        insertSQL += "'" + req.body.ccvcc + "', "
    }else{
        insertSQL += "'', "
    }

    if (req.body.discount != null){
        insertSQL += "'" + req.body.discount + "', "
    }else{
        insertSQL += "'', "
    }

    if (req.body.numbercc != null){
        insertSQL += "'" + req.body.numbercc + "', "
    }else{
        insertSQL += "'', "
    }

    if (req.body.promocode != null){
        insertSQL += "'" + req.body.promocode + "', "
    }else{
        insertSQL += "'', "
    }

    if (req.body.validcc != null){
        insertSQL += "'" + req.body.validcc + "', "
    }else{
        insertSQL += "'', "
    }

    if (req.body.member_id != null){
        insertSQL += "'" + req.body.member_id + "', "
    }else{
        insertSQL += "'', "
    }

    if (req.body.creationdate != null){
        insertSQL += "'" + req.body.creationdate + "', "
    }else{
        insertSQL += "'', "
    }

    db.execInsert(req, res, insertSQL)
}


 exports.update = function(req, res, id){
    updateSQL = "update contract set "
    auxComma = "";

    if (req.body.returncode != null){
        updateSQL += auxComma + "returncode = '" + req.body.returncode + "0' "
        auxComma = ","
    }

    if (req.body.userid != null){
        updateSQL += auxComma + "userid = '" + req.body.userid + "-1' "
        auxComma = ","
    }

    if (req.body.unit != null){
        updateSQL += auxComma + "unit = '" + req.body.unit + "' "
        auxComma = ","
    }

    if (req.body.unit != null){
        updateSQL += auxComma + "enddate = '" + req.body.enddate + "' "
        auxComma = ","
    }
    
    if (req.body.methodpayment != null){
        updateSQL += auxComma + "methodpayment = '" + req.body.methodpayment + "' "
        auxComma = ","
    }

    if (req.body.numberofpayments != null){
        updateSQL += auxComma + "numberofpayments = '" + req.body.numberofpayments + "' "
        auxComma = ","
    }
    if (req.body.price != null){
        updateSQL += auxComma + "price = '" + req.body.unit + "' "
        auxComma = ","
    }

    if (req.body.startdate != null){
        updateSQL += auxComma + "startdate = '" + req.body.startdate + "' "
        auxComma = ","
    }

    if (req.body.plan != null){
        updateSQL += auxComma + "plan = '" + req.body.plan + "' "
        auxComma = ","
    }

    if (req.body.account != null){
        updateSQL += auxComma + "account = '" + req.body.account + "' "
        auxComma = ","
    }

    if (req.body.agency != null){
        updateSQL += auxComma + "agency = '" + req.body.agency + "' "
        auxComma = ","
    }

    if (req.body.bank != null){
        updateSQL += auxComma + "bank = '" + req.body.bank + "' "
        auxComma = ","
    }

    if (req.body.brandcc != null){
        updateSQL += auxComma + "brandcc = '" + req.body.brandcc + "' "
        auxComma = ","
    }

    if (req.body.discount != null){
        updateSQL += auxComma + "discount = '" + req.body.discount + "' "
        auxComma = ","
    }

    if (req.body.numbercc != null){
        updateSQL += auxComma + "numbercc = '" + req.body.numbercc + "' "
        auxComma = ","
    }

    if (req.body.promocode != null){
        updateSQL += auxComma + "promocode = '" + req.body.promocode + "' "
        auxComma = ","
    }

    if (req.body.validcc != null){
        updateSQL += auxComma + "validcc = '" + req.body.validcc + "' "
        auxComma = ","
    }

    if (req.body.member_id != null){
        updateSQL += auxComma + "member_id = '" + req.body.member_id + "' "
        auxComma = ","
    }

    if (req.body.creationdate != null){
        updateSQL += auxComma + "creationdate = '" + req.body.creationdate + "' "
        auxComma = ","
    }
    updateSQL += "where id = " + id + " and companygroupid = " + req.body.groupid

    console.log(updateSQL)
   
    db.execUpdate(req, res, updateSQL)
    
} 