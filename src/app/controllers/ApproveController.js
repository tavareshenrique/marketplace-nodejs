const Purchase = require('../models/Purchase')
const errorConfig = require('../../config/error')

class ApproveController {
  async update (req, res) {
    const { id } = req.params

    const { ad } = await Purchase.findById(id).populate({
      path: 'ad',
      populate: {
        path: 'author'
      }
    })

    if (!ad.author._id.equals(req.userId)) {
      return res.status(401).json(errorConfig.YouNotAuthor)
    }

    if (ad.purchasedBy) {
      return res.status(400).json(errorConfig.ProductSold)
    }

    ad.purchasedBy = id

    await ad.save()

    return res.json(ad)
  }
}

module.exports = new ApproveController()
