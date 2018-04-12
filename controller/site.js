const urlDefault = '/v1/site/';
var dao = require('../model/siteDAO');

exports.data = function (req, res){
    res.set('Content-Type', 'application/json');
    dao.siteData(req, res);
}
