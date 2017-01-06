import Template from '../../models/template';

module.exports = {

    getTemplateById: (req, res) => {

        const templateId = req.swagger.params.id.value;

        Template
            .findById(templateId)
            .then((t) => {
                res.json(t);
            })
            .catch((err) => {
                throw err;
            });
    },

    createTemplate: (req, res) => {

        let templateDetails = new Template(req.swagger.params.template.value);

        templateDetails.save().then(() => {

            res.json(templateDetails);

        });
    },

    updateTemplate: (req, res) => {

        let templateDetails = new Template(req.swagger.params.template.value);
        let templateId = req.swagger.params.id.value;

        console.log('****** template Id', templateId);
        console.log('000000 template details', templateDetails);

        res.json({
            templateDetails
        });

    }
};