import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const templateSchema = new Schema({
    name: String,
    subject: String,
    body: String,
    created: {type: Date, default: Date.now},
    active: {type: Boolean, default: true},
    meta: {
        votes: Number,
        favs: Number
    }
});

templateSchema.post('save', (template) => {

    console.log('saved templateSchema successfully', template);

});

export default mongoose.model('Template', templateSchema);