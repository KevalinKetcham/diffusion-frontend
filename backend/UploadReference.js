let mongoose = require('mongoose');

let UploadReferenceModel = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    penName: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    tags: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    s3File: {
        type: String,
        required: true,
    }
})


module.exports = mongoose.model('UploadReference', UploadReferenceModel)