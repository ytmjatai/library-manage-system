const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const categorySchema = new Schema(
    {
        name: String,
        parentId: String,
        code: String,
        order: Number,
        isView: Number
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
        res.send({
            msg: '连接数据库出错'
        });
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
        res.send({
            msg: '连接数据库出错'
        });
    })
    mongoose.connection.once('open', () => {
        const id = req.params.id;
        CategoryModel.findById(id, (err, doc) => {
            if (err) {
                console.error(err);
                res.send(err);
            }
            res.send(doc);
            mongoose.disconnect();
        })
    })
});

router.post('/', function (req, res, next) {
    mongoose.connect(
        'mongodb://localhost/library-manage-system',
        { useNewUrlParser: true }
    );
    mongoose.connection.on('error', () => {
        console.error('连接数据库出错');
        res.send({
            msg: '连接数据库出错'
        });
    })
    const model = Object.assign({}, req.body);
    CategoryModel.create(model, (err, doc) => {
        if (err) {
            res.send(err);
        }
        res.send(doc);
        mongoose.disconnect();
    });
});

router.delete('/:id', function (req, res, next) {
    mongoose.connect(
        'mongodb://localhost/library-manage-system',
        { useNewUrlParser: true }
    );
    mongoose.connection.on('error', () => {
        console.error('连接数据库出错');
        res.send({
            msg: '连接数据库出错'
        });
    })
    const id = req.params.id;
    CategoryModel.findByIdAndDelete(id, () => {
        res.send({ id: id });
        mongoose.disconnect();
    });
});

router.put('/:id', function (req, res, next) {
    mongoose.connect(
        'mongodb://localhost/library-manage-system',
        { useNewUrlParser: true }
    );
    mongoose.connection.on('error', () => {
        console.error('连接数据库出错');
        res.send({
            msg: '连接数据库出错'
        });
    })
    const id = req.params.id;
    const model = Object.assign({}, req.body);
    CategoryModel.findByIdAndUpdate(id, { $set: model }, (err, doc) => {
        if (err) {
            res.send(err);
        }
        res.send(doc);
        mongoose.disconnect();
    });
});

module.exports = router;
