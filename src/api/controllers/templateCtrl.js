module.exports = {
    getTemplateById : getTemplateById
};

function getTemplateById(req, res){

    res.json({
        'foo': 'bar'
    }).status(200);

}