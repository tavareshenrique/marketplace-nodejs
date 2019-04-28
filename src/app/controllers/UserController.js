const User = require('../models/User')
const errorConfig = require('../../config/error')

class UserController {
  async store (req, res) {
    const { email } = req.body

    if (await User.findOne({ email })) {
      return res.status(400).json(errorConfig.UserAlreadyExists)
    }

    const user = await User.create(req.body)

    return res.json(user)
  }
}

module.exports = new UserController()
