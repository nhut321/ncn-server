const AccountController = require('../controllers/AccountController')

const router = require('express').Router()

router.post('/login', AccountController.login)
router.post('/register', AccountController.register)
router.get('/', (req,res) => {
    res.json('auth router')
})

module.exports = router