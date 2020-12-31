const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const smartphoneSchema = new Schema({
    name: {
        type: String,
        require: true,
        trim: true
    },
    urlImg: {
        type: String,
        require: true,
        trim: true
    },
    screenDimention: {
        type: Number,
        require: true,
        trim: true
    },
    cpu: {
        type: String,
        require: true,
        trim: true
    },
    power: {
        type: String,
        require: true,
        trim: true
    },
    mainCamera: {
        type: String,
        require: true,
        trim: true
    }
},{
    versionKey: false,
    timestamps: true
}
);

const modelSmartphone = model('smartphone', smartphoneSchema);

module.exports = modelSmartphone;