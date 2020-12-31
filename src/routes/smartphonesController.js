const MdlSmartphone = require('../models/smartphonesSchema');
const { param } = require('./smartphonesRoutes');

exports.getSmartphone = async(req, res) => {
    try {
        const smartphonesFound = await MdlSmartphone.find();
        return res.json(smartphonesFound);
    } catch (error) {
        res.json(error)
    }
}

exports.getOneSmartphone = async(req, res) => {
    try {
        const oneSmartphoneFound = await MdlSmartphone.findById(req.params.id);
            if (oneSmartphoneFound) {
                return res.json(oneSmartphoneFound);
            } else {
                return res.status(204).json()
            }
    } catch (error) {
        res.json(error)
    }
}

exports.createSmartphone = async(req, res) => {
    try {
        const smartphoneData = new MdlSmartphone(req.body);
        const smartphoneSaved = await smartphoneData.save();
        res.json(smartphoneSaved);
    } catch (error) {
        res.json(error)
    }
}

exports.deleteSmartphone = async(req, res) => {
    try {
        const smartphoneDeleted = await MdlSmartphone.findByIdAndDelete(req.params.id);
        if(smartphoneDeleted) {
            return res.json(smartphoneDeleted);
        } else {
            return res.status(204).json()
        }
    } catch (error) {
        res.json(error)
    }
}

exports.updateSmartphone = async(req, res) => {
    try {
        const smartphoneUpdated = await MdlSmartphone.findByIdAndUpdate(req.params.id, req.body, {new: true});
        if (smartphoneUpdated) {
            res.json(smartphoneUpdated)
        } else {
            res.status(204).json()
        }
    } catch (error) {
        res.json(error)
    }
    
}
