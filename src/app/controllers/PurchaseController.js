const Ad = require('../models/Ad')
const User = require('../models/User')
const Purchase = require('../models/Purchase')
const PurchaseMail = require('../jobs/PurchaseMail')
const Queue = require('../services/Queue')
const errorConfig = require('../../config/error')

class PurchaseController {
  async index (req, res) {
    const purchase = await Purchase.paginate(
      {},
      {
        page: req.query.page || 1,
        limit: 20,
        populate: ['ad', 'user_ad'],
        sort: '-createdAt'
      }
    )

    return res.json(purchase)
  }

  async store (req, res) {
    const { ad, content } = req.body

    const purchaseAd = await Ad.findById(ad).populate('author')
    const user = await User.findById(req.userId)

    if (purchaseAd.sold) {
      return res.status(400).json(errorConfig.ProductSold)
    }

    const PurchaseCreate = await Purchase.create({
      ...req.body,
      user_ad: purchaseAd.author._id,
      user_purchase: req.userId
    })

    Queue.create(PurchaseMail.key, {
      ad: purchaseAd,
      user,
      content
    }).save()

    return res.json(PurchaseCreate)
  }
}

module.exports = new PurchaseController()
