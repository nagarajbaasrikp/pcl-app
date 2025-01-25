const User = require('../models/user')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { body, validationResult } = require('express-validator');

const authMiddleware = require('../middleware/authentication');

exports.createUser = [
    body('name').notEmpty().withMessage('Name cannot be blank').isAlpha().withMessage('Invalid characters in name').isLength({ min: 3, max: 100 }).trim().withMessage('Name is too long/short'),
    body('age').isNumeric().withMessage('Age must be a number').custom(age => {
        return new Promise((resolve, reject) => {
            age >= 18 && age <= 120 ? resolve(true) : reject('Age Must be between 18 and 120');
        })
    }),
    body('email').notEmpty().withMessage('Email cannot be blank').isEmail().withMessage('Please Enter Valid Email').custom(email => {
        /*return new Promise((resolve, reject) => {
            User.findOne({ email: email }, (err, user) => {
                if (err)
                    reject('Error');
                if(user)
                    reject('User already exists');
                resolve(true);
            });
        });*/
        return new Promise((resolve, reject) => {
            User.findOne({email: email}).then((err, user) => {
                if (err)
                    reject('Error');
                if(user)
                    reject('User already exists');
                resolve(true);
            });
        });

    }),
    (req, res) => {
        const errors = validationResult(req);
        console.log(req.body);
        console.log(errors);
        if (!errors.isEmpty())
            res.json({
                status: 0,
                data: 'validation failed',
                debug_data: errors.array()
            });
        else {
            console.log(req.body);
            let encryptedPassword;
            try {
                let salt = bcrypt.genSaltSync(10);
                console.log(salt);
                encryptedPassword = bcrypt.hashSync(req.body.password, salt);
                console.log(encryptedPassword);
            }
            catch (err) {
                console.log(err);
                console.log('error in bcrypt');
            }
            const userOb = new User({
                name: req.body.name,
                age: req.body.age,
                dob: req.body.dob,
                password: encryptedPassword,
                email: req.body.email
            });
            /*userOb.save(function (err) {
                if (err) {
                    console.log(err)
                }
                else {
                    res.json('User created successfully');
                }
            });*/
            userOb.save().then(() => {
                console.log('User created Successfully')
            }).catch(err => console.log(err))
        }
    }
];

exports.listUsers = [authMiddleware, function(req,res){
    User.find(function (err, users_list) {
        if (err) {
            console.log(err)
        }
        else {
            console.log(users_list);
            res.json(users_list);
        }
    });
}]

exports.getUserDetails = function (req, res) {
    User.findById(req.params.id).then(user => res.json(user)).catch(err => console.log(err));
}

exports.deleteUser = function (req, res) {
    User.findByIdAndDelete(req.params.id, function (err) {
        if (err) {
            console.log(err);
        }
        else {
            res.json({
                status: 1,
                msg: 'Successfully Deleted User  with ID ' + req.params.id
            });
        }
    });
}

exports.editUser = function (req, res) {
    let updateOb = req.body;
    console.log(updateOb);
    User.findByIdAndUpdate(req.params.id, updateOb, function (err) {
        if (err) {
            console.log(err);
        }
        else {
            res.json({
                status: 1,
                msg: 'Successfully Edited User with ID ' + req.params.id
            });
        }
    });
}

exports.loginUser = async (req, res) => {
    const { email, password } = req.body;
    let userOb = await User.findOne({ email: req.body.email });
    console.log(userOb);
    if(userOb) {
        const correctPassword = bcrypt.compareSync(password, userOb.password);
        if (!correctPassword) {
            res.status(400).json({
                status: 0,
                msg: 'User credentials incorrect'
            });
        }
        const payload = {
            user: {
                email: email
            },
        }
        jwt.sign(
            payload,
            //below string is used to decode the token
            'secretstring',
            {
                expiresIn: 1200
            },
            (err, token) => {
                if (err) throw err;
                res.status(200).json({ token, id: userOb.id });
            }
        );
    }
    if (!userOb) {
        res.status(400).json({
            status: 0,
            msg: 'User doesn\'t Exist'
        });
    }
    //we need to prepare to web token. we prepare the payload - the data sent to the browser - it contains the user id and email.
    //the payload can hold any data we want.
    //payload gets sent with the jwt to the user
}