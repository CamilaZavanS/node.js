var db = require('../util/pooldb.js')
var resultSite = ['', '', '', ''];

exports.siteData = function (req, res){
    classSQL = "select * from aclass where unit in (select id from unit where companygroupid = " + req.body.groupid + ")"
    planSQL = "select * from plan where unit_id in (select id from unit where companygroupid = " + req.body.groupid + ")"
    productSQL = "select * from product where unit in (select id from unit where companygroupid = " + req.body.groupid + ")"
    unitSQL = "select * from unit where companygroupid = " + req.body.groupid 
    groupSQL = "select facebook, instagram, twitter, youtube, slogan, slogan2, about, name, mainColor, bgImage, aboutImage, imageGallery  from CompanyGroup where id = " + req.body.groupid

    db.pool.connect().then( client => {
        client.query(classSQL, function(err, result){
            if (err){
                client.release()
                res.status(500).send(err);
            }else{
                resultSite[0] = {classes: result.rows}
                client.query(planSQL, function(err, result){
                    if (err){
                        client.release()
                        res.status(500).send(err);
                    }else{
                        resultSite[1] = {plans: result.rows}
                        client.query(productSQL, function(err, result){
                            if (err){
                                client.release()
                                res.status(500).send(err);
                            }else{
                                resultSite[2] = {products: result.rows}
                                client.query(unitSQL, function(err, result){
                                    if (err){
                                        client.release()
                                        res.status(500).send(err);
                                    }else{
                                        resultSite[3] = {units: result.rows}
                                        client.query(groupSQL, function(err, result){
                                            if (err){
                                                client.release()
                                                res.status(500).send(err);
                                            }else{
                                                client.release()
                                                resultSite[4] = {companyData:  result.rows}
                                                res.status(200).send( JSON.stringify({sitedata: resultSite}));
                                            }
                                        })                                         
                                    }
                                })
                            }
                        })                        
                    }
                })
            }
        })
    }) 
}
