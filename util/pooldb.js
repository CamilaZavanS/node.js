var Pool = require('pg-pool')
var pool  = new Pool({
    database: 'gym',
    user: 'gymapp',
    password: 'gymapp',
    host : 'dev.cloudgym.com.br',
    port: 5432,
    ssl: false,
    max: 20,
    min : 4,
    idleTimeoutMillis: 1000,
    connectionTimeoutMillis: 2000,
})

exports.pool = pool;

exports.execInsert = function(req, res, sql){
    pool.connect().then( client => {
        client.query(sql, function(err, result){
            if (err){
                client.end()
                res.status(500).send(err);
            }else{
                client.end()
                res.status(200).send(result.rows);
            }
        })
    })    
}

exports.execUpdate = function(req, res, sql){
    pool.connect().then( client => {
        client.query(sql, function(err, result){
            if (err){
                client.end()
                res.status(500).send(err);
            }else{
                client.end()
                if (result.rowCount > 0){
                    res.status(200).send();
                }else{
                    res.status(404).send();
                }
            }
        })
    })    
}

exports.execSelect = function(req, res, sql){
    pool.connect().then( client => {
        client.query(sql, function(err, result){
            if (err){
                client.end()
                res.status(500).send(err);
            }else{
                client.end()
                res.status(200).send(JSON.stringify(result.rows));
            }
        })
    })    
}