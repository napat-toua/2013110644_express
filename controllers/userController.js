const User = require("../models/user")


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