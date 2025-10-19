const db = require ('../../data/db-config')
const { checkAccountId } = require('./accounts-middleware')
const getAll = () => {
  // DO YOUR MAGIC
  //  .select('phone', 'shippername')
  return result
}

const getById = id => {
  // DO YOUR MAGIC
  const result = await db ('account').where('accountid',checkAccountId)
  
}

const create = account => {
  // DO YOUR MAGIC
}

const updateById = (id, account) => {
  // DO YOUR MAGIC
}

const deleteById = id => {
  // DO YOUR MAGIC
}

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
}
