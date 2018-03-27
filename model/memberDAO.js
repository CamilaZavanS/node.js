var db = require('../util/pooldb.js')

exports.select = function (req, res){
    selectSQL = "select * from member where companygroupid = " + req.body.groupid + " limit 10"
    db.execSelect(req, res, selectSQL)    
}

exports.selectById = function (req, res, id){
    selectSQL = "select * from member where companygroupid = " + req.body.groupid + " and id = " + id
    db.execSelect(req, res, selectSQL)    
} 

exports.create = function(req, res){
    insertSQL = "insert into member (id, name, cpf, rg, gender, birthday, email, phonenumber, cellphonenumber, address, complement, neighborhood, city, state, zipcode, latitude, longitude, responsible, annotation, creationdate, companygroupid) values ( "
    insertSQL += "nextval('member_id'), "
    insertSQL += "'" + req.body.name + "', "
    if (req.body.cpf != null){
        insertSQL += "'" + req.body.cpf + "', "
    }else{
        insertSQL += "'', "
    }

    insertSQL += "'" + req.body.rg + "', "

    if (req.body.gender != null){
        insertSQL += "'" + req.body.gender + "', "
    }else{
        insertSQL += "'M', "
    }

    if (req.body.birthday != null){
        insertSQL += "'" + req.body.birthday + "', "
    }else{
        insertSQL += "null, " 
    }

    insertSQL += "'" + req.body.email + "', "

    if (req.body.phonenumber != null){
        insertSQL += "'" + req.body.phonenumber + "', "
    }else{
        insertSQL += "'', "
    }

    if (req.body.cellphonenumber != null){
        insertSQL += "'" + req.body.cellphonenumber + "', "
    }else{
        insertSQL += "'', "
    }

    if (req.body.adress != null){
        insertSQL += "'" + req.body.address + "', "
    }else{
        insertSQL += "'', "
    }

    if (req.body.complement != null){
        insertSQL += "'" + req.body.complement + "', "
    }else{
        insertSQL += "'', "
    }

    if (req.body.neighborhood != null){
        insertSQL += "'" + req.body.neighborhood + "', "
    }else{
        insertSQL += "'', "
    }

    if (req.body.city != null){
        insertSQL += "'" + req.body.city + "', "
    }else{
        insertSQL += "'', "
    }

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
    insertSQL += req.body.latitude + ", "
    insertSQL += req.body.longitude + ", "
    if (req.body.responsible != null){
        insertSQL += "'" + req.body.responsible + "', "
    }else{
        insertSQL += "'', "
    }
    
    insertSQL += "'Created from API', "
    insertSQL += "current_date,"
    insertSQL += req.body.groupid
    insertSQL += ") RETURNING id" 
    console.log(insertSQL)

    db.execInsert(req, res, insertSQL)
}

exports.update = function(req, res, id){
    updateSQL = "update member set "
    auxComma = "";

    if (req.body.name != null){
        updateSQL += auxComma + "name = '" + req.body.name + "' "
        auxComma = ","
    }
    if (req.body.cpf != null){
        updateSQL += auxComma + "cpf = '" + req.body.cpf + "' "
        auxComma = ","
    }

    if (req.body.rg != null){
        updateSQL += auxComma + "rg = '" + req.body.rg + "' "
        auxComma = ","
    }

    if (req.body.gender != null){
        updateSQL += auxComma + "gender = '" + req.body.gender + "' "
        auxComma = ","
    }

    if (req.body.birthday != null){
        updateSQL += auxComma + "birthday = '" + req.body.birthday + "' "
        auxComma = ","
    }

    if (req.body.email  != null){
        updateSQL += auxComma + "email = '" + req.body.email + "' "
        auxComma = ","
    }
    if (req.body.phonenumber != null){
        updateSQL += auxComma + "phonenumber = '" + req.body.phonenumber + "' "
        auxComma = ","
    }

    if (req.body.cellphonenumber != null){
        updateSQL += auxComma + "cellphonenumber = '" + req.body.cellphonenumber + "' "
        auxComma = ","
    }

    if (req.body.adress != null){
        updateSQL += auxComma + "address = '" + req.body.adress + "' "
        auxComma = ","
    }

    if (req.body.complement != null){
        updateSQL += auxComma + "complement = '"+ req.body.complement + "' "
        auxComma = ","
    }

    if (req.body.neighborhood != null){
        updateSQL += auxComma + "neighborhood = '" + req.body.neighborhood + "' "
        auxComma = ","
    }

    if (req.body.city != null){
        updateSQL += auxComma + "city = '" + req.body.city + "' "
        auxComma = ","
    }

    if (req.body.state != null){
        updateSQL += auxComma + "state = '" + req.body.state + "' "
        auxComma = ","
    }

    if (req.body.zipcode != null){
        updateSQL += auxComma + "zipcode = '" + req.body.zipcode + "' "
        auxComma = ","
    }


    if (req.body.longitude != null){
        updateSQL += auxComma + "longitude = '" + req.body.longitude + "' "
        auxComma = ","
    }

    if (req.body.latitude != null){
        updateSQL += auxComma + "latitude = '" + req.body.latitude + "' "
        auxComma = ","
    }

    if (req.body.responsible != null){
        updateSQL += auxComma + "responsible = '" + req.body.responsible + "' "
        auxComma = ","
    }

    updateSQL += "where id = " + id + " and companygroupid = " + req.body.groupid

    console.log(updateSQL)
   
    db.execUpdate(req, res, updateSQL)
}