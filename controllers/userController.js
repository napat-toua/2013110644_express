const User = require("../models/user")
const { validationResult } = require('express-validator')
const router = require("../routes/users")
const jwt = require("jsonwebtoken")
const config = require('../config/index')

exports.index = (req, res, next) => {
  //res.send('Hello world');
  res.status(200).json({
    fullname: 'Napat Touangam'
  })
}

exports.bio = (req, res, next) => {
  //res.send('Hello world');
  res.status(200).json({
    fullname: 'Napat Touangam',
    nickname: 'Yuu',
    hobby: 'Sleep',
    gitusername: 'napat-toua'
  })
}

exports.register = async (req, res, next) => {
  try{

    const { name, email, password } = req.body

    const existEmail = await User.findOne({ email:email })

    //validation
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const error = new Error("Error: Insert Data Invalid")
        error.statusCode = 422;
        error.validation = errors.array()
        throw error;
      }

    if (existEmail){
      const error = new Error("Error: This email is already registered.")
      error.statusCode = 400
      throw error;
    }

    let user = new User();
    user.name = name,
    user.email = email,
    user.password = await user.encryptPassword(password)

    await user.save()

    res.status(201).json({
      message: "Register Successfully"
    })

  } catch ( error ) {
    next( error )
  }
}

exports.login = async (req, res, next) => {
  try{
    const { email, password } =req.body

    //validation
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const error = new Error("Error: Insert Data Invalid")
        error.statusCode = 422;
        error.validation = errors.array()
        throw error;
      }

    const user = await User.findOne({ email:email })

    if (!user){
      const error = new Error("Error: User not found")
      error.statusCode = 404
      throw error;
    }

    const isValid = await user.checkPassword(password)
    if (!isValid){
      const error = new Error("Error: Password incorrect")
      error.statusCode = 401
      throw error;
    }

    // creat token
    const token = await jwt.sign({
      id: user._id,
      role: user.role,
    }, config.SECRET_KEY, { expiresIn: "5 days"})

    const expire_in = jwt.decode(token)

    res.status(200).json({
      access_token: token,
      expire_in:  expire_in.exp,
      token_type: 'Bearar'
    })
  }
  catch ( error ) {
    next( error )
  }
  
}