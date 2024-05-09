const Animal = require('../models/Animal');

module.exports.sendAnimalArray = async (req,res,next) => {
    const {id} = res.locals.user;
    try{
        const animalArray = await Animal.findByOwnerId(id);
        res.send(animalArray);
    }
    catch(err)
    {
        console.error(err);
        res.status(500).send('Something Went Wrong!');
    }
}

module.exports.addAnimal = async (req,res,next) => {
    const {name, birthDate, weight, description} = req.body;
    const owner = res.locals.user.id;

    try{
        let birth = new Date(birthDate);
        const animal = await Animal.create(
            {
                photo: req.file.path, 
                name, owner, birth, weight, description
            });
        res.status(201).json({name: animal.name});
    }
    catch(err)
    {
        console.error(error)
        res.status(500).send('Animal not created!');
    }
}

module.exports.uploadImage = async(req,res,next) => {
    try{
        await Animal.uploadImage(id, );
    }
    catch(err)
    {
        console.error(err);
        res.status(500).send("Image not uploaded");
    }
}

module.exports.showimage = async (req,res,next) => {
    const user = res.locals.user;
    const animal = req.img;
    try{
        const {photo} = await Animal.findOne({id: animal, owner: user.id}, 'photo').exec();
        res.sendFile(photo);
    }
    catch(err){
        console.error(err);
        res.status(404).send('Image not found');
    }
}
