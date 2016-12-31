module.exports = {

    getTemplateById: (req, res) => {

        res.json({
            'foo': 'bar'
        }).status(200);

    },

    createTemplate: (req, res) => {

        let template = req.swagger.params.template.value;

        // Todo - store in mongo

        res.json(template);

    }
};