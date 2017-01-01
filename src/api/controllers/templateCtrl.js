import Template from '../../models/template';
import mongoose from 'mongoose';

module.exports = {

    getTemplateById: (req, res) => {

        const templateId = req.swagger.params.id.value;

        Template
            .find({_id: mongoose.Types.ObjectId(templateId)})
            .then((t) => {
                console.log('here .... ', t);
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
    }
};