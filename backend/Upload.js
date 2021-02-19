const express = require('express')
const router = express.Router()

const aws = require('aws-sdk')
aws.config.region = 'us-west-2';

require('./Database')
var UserModel = require('./User');

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
    res.json({ req: req.body })

    // append author object to user sent in email
    // { isPublished: true, writing: <file here>, [other details]... }
})

router.post('/check', async (req, res) => {
    res.send('Not published!')

    // await UserModel.findOne({ email: req.body.email }, async (err, docs) => {
    //     if(docs.isPublished) {
    //         res.send('Published!')
    //     } else {
    //         res.send('Not published!')
    //     }
    // })
})

module.exports = router;
