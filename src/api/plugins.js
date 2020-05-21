const { Router } = require('express')
const router = new Router()
const { plugins } = require('../lib/sql')
const RunQuery = require('../lib/connectionPool')

router.get('/', async (req, res) => {
  try {
    const { data } = await RunQuery(req.pg, plugins.list)
    return res.status(200).json(data)
  } catch (error) {
    console.log('throwing error')
    res.status(500).json({ error: 'Database error', status: 500 })
  }
})

module.exports = router