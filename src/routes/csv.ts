var express = require('express');
var router = express.Router();
import {postCSV} from '../controllers/csv'

router.post('/', async (req, res, next) => {
  let response = await postCSV(req);
  res.json(response)
});

module.exports = router;
