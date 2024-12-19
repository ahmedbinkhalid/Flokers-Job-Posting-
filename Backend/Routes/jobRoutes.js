const express = require('express');
const router = express.Router();
const path = require('path');

const jobController = require('../Controllers/jobsController');

router.post('/addJob', jobController.addJob);

module.exports = router;