var db = require('../util/pooldb.js')

exports.checkAuth = function(req, res, callback){
    sql = "select id from companygroup where apikey = '" + req.get('key') + "'";
    
    db.pool.connect().then( client => {
        client.query(sql, function(err, result){
            if (err){
                client.release()
                res.status(500).send(err);
            }else{
                client.release()
                if (result.rows.length == 0){
                    res.status(401).send();
                }else{
                    req.body.groupid = result.rows[0].id
                    callback(req, res, req.params.id)
                }
                
            }
        })
    })    
}
