const ClientProfile = require('../models/ClientProfile');
const mongoose = require('mongoose')

exports.getProfile = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({error: 'No such user'})
    }
  
    const workout = await User.findById(id)
  
    if (!workout) {
      return res.status(404).json({error: 'No such user'})
    }
    
    res.status(200).json(workout)
};

exports.updateProfile = async (req, res) => {
  // update client profile
};