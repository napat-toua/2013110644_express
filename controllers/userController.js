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
  const { name, email, password } = req.body

  let user = new User();
  user.name = name,
  user.email = email,
  user.password = await user.encryptPassword(password)

  await user.save()

  res.status(201).json({
    message: "Register Successfully"
  })
}