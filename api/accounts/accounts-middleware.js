const Account = require ('./accounts-model')


exports.checkAccountPayload = (req, res, next) => {
  console.log('checkAccountPayLoad middleware')
  next()
  // Note: you can either write "manual" validation logic
  // or use the Yup library (not currently installed)
}

exports.checkAccountNameUnique = (req, res, next) => {
  // DO YOUR MAGIC
  next()
  console.log('checkAccountNameUnique middleware')
}

exports.checkAccountId = (req, res, next) => {
  // DO YOUR MAGIC
  try {
    const account = await Account.getById(req.params.id)
    if(!account) {
      next({status :404, message: 'not found'})
    } else {
      req.account = account
      next()
    }
  } catch (err) {
    next(err)
  }
 
}
