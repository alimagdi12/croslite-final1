const path = require('path');

const express = require('express');

const router = express.Router();

const userControllers = require('../controllers/user');

const contactControllers = require('../controllers/contact')
// const email = require('../controllers/mail')

router.get('/',userControllers.getHome);
router.get('/about',userControllers.getAbout);
router.get('/contact',userControllers.getContact);
router.post('/contact',contactControllers.postContact)

// router.get('/mail',email.getmMail);
// router.post('/email',email.postMail);


module.exports = router;
