const express = require('express');
const router = express.Router();
const SmartphoneCtrl = require('./smartphonesController')

router.get('/', SmartphoneCtrl.getSmartphone);
router.get('/:id', SmartphoneCtrl.getOneSmartphone);
router.post('/', SmartphoneCtrl.createSmartphone);
router.delete('/:id', SmartphoneCtrl.deleteSmartphone);
router.put('/:id', SmartphoneCtrl.updateSmartphone);

module.exports =  router;