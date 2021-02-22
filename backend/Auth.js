const express = require('express')
const router = express.Router()

require('./Database')
var UserModel = require('./User');

const CryptoJS = require('crypto-js');
let bcrypt = require('bcrypt');
const ENCRYPTION_KEY = process.env.ENCRYPTION_KEY;

const genVal = (email, password) => {
    let plainData = {
        email: email,
        password: password
    }
    let cipherData = CryptoJS.AES.encrypt(JSON.stringify(plainData), ENCRYPTION_KEY).toString();
    return cipherData;
}

router.post('/signup',
    async (req, res) => {
        console.log('User ' + req.body.email + ' with password ' + req.body.password + ' reached this route!')

        await UserModel.findOne({ email: req.body.email }, async (err, docs)=>{
            if(docs === null) {
                let password = await bcrypt.hash(req.body.password, 10)
                await UserModel.create({ email: req.body.email, password: password })

                console.log('User with email ' + req.body.email + ' created!')
                res.status(200).json({ status: 200, message: 'User with email ' + req.body.email + ' created!' })
            } else {
                console.log('Email already in use!')
                res.json({ message: 'Email already in use!' })
            }
        })
    }
)

router.post('/signin',
    async (req, res) => {
        console.log('User ' + req.body.email + ' with password ' + req.body.password + ' hit this route!')

        await UserModel.findOne({ email: req.body.email }, async (err, docs) => {
            if(docs === null) {
                res.send('No user with this email found!')
            } else {
                let userPassword = docs.password;
                let compare = await bcrypt.compare(req.body.password, userPassword)
                if(compare) {
                    let cipherData = genVal(req.body.email, req.body.password)

                    res.json({ session: cipherData })
                    console.log(req.body.email + ' signed in!')
                } else {
                    res.send('Incorrect password!')
                }
            }
        })

    }
);

router.post('/check', async (req, res)=>{
    let session = req.body.cookie;
    let byteData = CryptoJS.AES.decrypt(session, ENCRYPTION_KEY);
    let user = null;
    try {
        let plain = JSON.parse(byteData.toString(CryptoJS.enc.Utf8))
        user = plain;     
    } catch (error) {
        console.log('Token currupt ' + error)
        res.json({ message: 'Token currupt' })
        return;
    }

    let email = user.email;
    let password = user.password;

    await UserModel.findOne({ email: email }, async (err, docs) => {
        if(docs === null) {
            res.json({ message: 'Email in token is invalid. Please signin again.' })
        } else {
            let userPassword = docs.password;
            let compare = await bcrypt.compare(password, userPassword)
            if(compare) {
                let cipherData = genVal(email, password)

                res.json({ message: 'Check for email and password was successful!', email: email, session: cipherData })
            } else {
                res.json({ message: 'Incorrect password in token!' })
            }
        }
    })
})

module.exports = router;