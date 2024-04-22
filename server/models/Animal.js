const mongoose = require('mongoose');
const animalSchema = new mongoose.Schema({
    photo:{
        type: String
    },
    name:{
        type: String,
        required: [true, 'Name is required'],
    },
    owner:{
        type: String,
        required: [true, "You're not logged in"],
    },
    birthDate:{
        type: Date,
    },
    weight:{
        type: Number
    },
    description:{
        type: String,
    },
});

animalSchema.statics.findByOwnerId = async function(owner){
    const animalArray = await this.find({owner}, 'name id').exec();
    return animalArray;
}

const Animal = mongoose.model('Animal', animalSchema);

module.exports = Animal;
