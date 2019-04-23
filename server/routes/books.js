var mongodb = require('mongodb');
var express = require('express');
const { ObjectId } = require('mongodb');

var router = express.Router();

router.get('/', function (req, res, next) {

    mongodb.MongoClient.connect('mongodb://localhost', { useNewUrlParser: true }, async (err, client) => {
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

router.get('/:id', function (req, res, next) {
    mongodb.MongoClient.connect('mongodb://localhost', { useNewUrlParser: true }, async (err, client) => {
        const id = req.params.id;
        if (err) {
            console.error(err);
            return;
        } else {
            const db = await client.db('library-manage-system').collection('book').find({
                _id: ObjectId(id)
            }).toArray();
            client.close();
            res.send(db[0]);
        }
    });
});

router.post('/', function (req, res, next) {
    mongodb.MongoClient.connect('mongodb://localhost', { useNewUrlParser: true }, async (err, client) => {
        const book = req.body;
        if (err) {
            console.error(err);
            return;
        } else {
            const db = client.db('library-manage-system').collection('book').insertOne(book).toArray();
            client.close();
            res.send(db);
        }
    });
});

router.delete('/', function (req, res, next) {
    mongodb.MongoClient.connect('mongodb://localhost', { useNewUrlParser: true }, async (err, client) => {
        const id = req.query.id;
        if (err) {
            console.error(err);
            return;
        } else {
            const db = client.db('library-manage-system').collection('book').deleteOne({ "_id": ObjectId(id) });
            client.close();
            res.send(db);
        }
    });
});

router.put('/:id', function (req, res, next) {
    mongodb.MongoClient.connect('mongodb://localhost', { useNewUrlParser: true }, async (err, client) => {
        const id = req.params.id;
        const book = req.body;
        console.log(book);
        
        if (err) {
            console.error(err);
            return;
        } else {
            const db = client.db('library-manage-system').collection('book').updateOne({ "_id": ObjectId(id) }, { $set: {
                name: book.name,
                author: book.author,
                desc: book.desc
            } });
            client.close();
            res.send('success');
        }
    });
});

module.exports = router;
