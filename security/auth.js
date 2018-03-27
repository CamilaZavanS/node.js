exports.checkAuth = function(req, res, callback){
    if (req.get('key') == "1232"){
        req.body.groupid = 1
        callback(req, res, req.params.id)
    }else{
        res.status(401).send();
    }

}



