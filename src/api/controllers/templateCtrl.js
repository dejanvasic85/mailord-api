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

        // Fetch the original template
        Template.findByIdAndUpdate(
            req.swagger.params.id.value,
            {$set : req.swagger.params.template.value },
            {new : true}
        ).then((template) => {

            res.json(template);

        });
    }
};