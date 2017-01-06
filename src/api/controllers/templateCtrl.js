import Template from '../../models/template';
import Error from '../../models/error';
import DeleteResult from '../../models/deleteResult';

module.exports = {

    getTemplateById: (req, res) => {

        const templateId = req.swagger.params.id.value;

        Template
            .findById(templateId)
            .then((t) => {

                if (!t) {
                    res.status(404).send(new Error('Not Found'));
                    return;
                }

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
            {$set: req.swagger.params.template.value},
            {new: true}
        ).then((template) => {

            res.json(template);

        });
    },

    deleteTemplate: (req, res) => {

        Template.findByIdAndRemove(req.swagger.params.id.value)
            .then(() => {
                res.json(new DeleteResult(true));
            })
            .catch((err) => {
                console.error(err);
                res.error(err);
            });
    }
};