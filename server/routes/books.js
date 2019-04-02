var mongodb = require('mongodb');
var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {

    mongodb.MongoClient.connect('mongodb://localhost', { useNewUrlParser: true }, async (err, client) => {
        console.log(req.query);
        
        if (err) {
            console.error(err);
            return;
        } else {
            const db = await client.db('library-manage-system').collection('book').find({}).toArray();
            client.close();
            res.send(db);
        }
    });
});

module.exports = router;
