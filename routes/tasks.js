const express = require('express')
const router = express.Router()

const { getUser, AddUser, Payment } = require('../controllers/tasks')

router.route('/').get(getUser).post(AddUser)
router.route('/pay').patch(Payment)


module.exports = router;