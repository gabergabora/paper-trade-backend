const express = require('express');
const router = express.Router();
const { getAccountInfo, updateAccountInfo } = require('../controllres/user/accountInfoController');
const { getPorftfolio, updatePortfolioItem, deletePorfolioItem } = require('../controllres/user/portfolioController');

router.get('/accountinfo', getAccountInfo);
// router.post('/accountinfo/update', updateAccountInfo);

// router.get('/portfolio', getPortfolio);
// router.post('/portfolio/delete', deletePorfolioItem);
// router.post('/portfolio/update', updateAccountInfo);

// router.get('/funds', fundsController);


// router.get('/watchlist', watchlist.controller);


module.exports = router;