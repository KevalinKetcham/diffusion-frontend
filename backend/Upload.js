const express = require('express')
const router = express.Router()

const aws = require('aws-sdk')
aws.config.region = 'us-west-2';

require('./Database')
var UserModel = require('./User');
var UploadReference = require('./UploadReference');

const S3_BUCKET = process.env.S3_BUCKET;

router.post('/sreq', async (req, res) => {
    const s3 =  new aws.S3();
    const fileName = req.body.fileName;
    const fileType = req.body.fileType;

    const s3Params = {
        Bucket: S3_BUCKET,
        Key: fileName,
        Expires: 3600,
        ContentType: fileType,
        ACL: 'public-read'
    }

    s3.getSignedUrl('putObject', s3Params, (err, data) => {
        let returnData = null;
        if(err) {
            console.log(err);
        } else {
            returnData = {
                signedRequest: data,
                url: `https://${S3_BUCKET}.s3.amazonaws.com/${fileName}`
            }
        }
        res.json(returnData);
    })
})

router.post('/', async (req, res) => {
    UserModel.findOne({ email: req.body.email }, (err, user) => {
        if(err) {
            console.log('User with the provided email wasn\'t found. Error: ' + err);
        } else {
            UploadReference.create({
                title: req.body.title,
                penName: req.body.penName,
                description: req.body.description,
                tags: req.body.tags,
                email: req.body.email,
                s3File: req.body.s3File
            })
        }
    })

    res.json({ req: req.body })
})

router.post('/check', async (req, res) => {
    UploadReference.findOne({ email: req.body.email }, (err, user) => {
        if(user === null) {
            res.json({ published: false })
        } else {
            res.json({ published: true })
        }
    })
})

module.exports = router;
