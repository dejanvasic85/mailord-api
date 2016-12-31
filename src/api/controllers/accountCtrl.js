'use strict';

module.exports = {
    getAccountById: getAccountById
};

function getAccountById(req, res) {
    console.log('fetching account for ', req.swagger.params.id);

    res.json({
        accountId: req.swagger.params.id.value,
        accountName: 'Account ' + req.swagger.params.id.value
    });
}
