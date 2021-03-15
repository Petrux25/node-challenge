var express = require('express');
var router = express.Router();
import {saveCVS} from '../controllers/csv'

router.post('/', (req, res, next) => {
  console.log(req.files)
  saveCVS(req);
  console.log(req.body)
  res.json({hello: 'world'})
});

module.exports = router;
