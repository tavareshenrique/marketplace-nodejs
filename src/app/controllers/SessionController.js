const User = require('../models/User')
const errorConfig = require('../../config/error')

class SessionController {
  async store (req, res) {
    const { email, password } = req.body

    const user = await User.findOne({ email })

    if (!user) {
      return res.status(400).json(errorConfig.UserNotFound)
    }

    if (!(await user.compareHash(password))) {
      return res.status(400).json(errorConfig.UserInvalidPassword)
    }

    return res.json({ user, token: User.generateToken(user) })
  }
}

module.exports = new SessionController()
