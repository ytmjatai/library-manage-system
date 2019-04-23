const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const categorySchema = new Schema(
    {
        name: String,
        parentId: String,
        tags: Array
    },
    { versionKey: null }
);
const CategoryModel = mongoose.model('CategoryModel', categorySchema, 'category');

router.get('/', function (req, res, next) {
    mongoose.connect(
        'mongodb://localhost/library-manage-system',
        { useNewUrlParser: true }
    );
    mongoose.connection.on('error', () => {
        console.error('连接数据库出错');
        res.send('连接数据库出错');
    })
    mongoose.connection.once('open', () => {
        CategoryModel.find((err, docs) => {
            if (err) {
                console.error(err);
                res.send(err);
            }
            res.send(docs);
            mongoose.disconnect();
        })
    })

});

router.get('/:id', (req, res, next) => {
    mongoose.connect(
        'mongodb://localhost/library-manage-system',
        { useNewUrlParser: true }
    );
    mongoose.connection.on('error', () => {
        console.error('连接数据库出错');
        res.send('连接数据库出错');
    })
    mongoose.connection.once('open', () => {
        console.log(req.query)
        // CategoryModel.find((err, docs) => {
        //     if (err) {
        //         console.error(err);
        //         res.send(err);
        //     }
        //     res.send(docs);
        //     mongoose.disconnect();
        // })
    })
});

router.post('/', function (req, res, next) {
    mongoose.connect(
        'mongodb://localhost/library-manage-system',
        { useNewUrlParser: true }
    );
    mongoose.connection.on('error', () => {
        console.error('连接数据库出错');
    })
    const model = Object.assign({}, req.body);
    CategoryModel.create(model, (err, doc) => {
        if (err) {
            res.send(err)
        }
        res.send(doc);
        mongoose.disconnect();
    });
});

router.delete('/', function (req, res, next) {
    mongodb.MongoClient.connect(
        'mongodb://localhost',
        { useNewUrlParser: true },
        async (err, client) => {
            const id = req.query.id;
            if (err) {
                console.error(err);
                return;
            }
            const db = client.db('library-manage-system')
                .collection('category')
                .deleteOne({ "_id": ObjectId(id) });
            client.close();
            res.send(db);
        }
    );
});

router.put('/:id', function (req, res, next) {
    mongodb.MongoClient.connect(
        'mongodb://localhost',
        { useNewUrlParser: true },
        async (err, client) => {
            const id = req.params.id;
            const book = req.body;
            if (err) {
                console.error(err);
                return;
            }
            const db = client.db('library-manage-system')
                .collection('category')
                .updateOne(
                    { "_id": ObjectId(id) },
                    {
                        $set: {
                            name: book.name,
                            author: book.author,
                            desc: book.desc
                        }
                    }
                );
            client.close();
            res.send('success');
        }
    );
});

module.exports = router;
