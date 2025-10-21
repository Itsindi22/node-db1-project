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
  next()
    console.log('checkAccountId middleware')

}
