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