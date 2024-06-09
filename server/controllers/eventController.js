const Event = require('../models/Event');

module.exports.addEvent = async (req,res,next) =>{
    const {id} = res.locals.user
    const {animalId, desc, date} = req.body
    try{
        const event = await Event.create(
            {
                owner: id,
                animal: animalId,
                description: desc,
                date:date,
            });
        res.status(201).json({id:event.id})
    }
    catch(err){
        console.log(err)
        res.status(400).send('server error: can\'t add new event')
    }
}

module.exports.deleteEvent = async (req,res,next) =>{
    const {id} = res.locals.user;
    const eventId = req.body.eventId
    try{
        const a = await Event.findOneAndDelete({_id: eventId, owner:id}).exec();
        if (a == null)
            res.json('ok, already deleted');
        else
            res.json('ok, deleted one');
    }
    catch(err){
        console.log(err);
        res.status(400).send('Server error: can\'t delete event');
    }
}

module.exports.showEvents = async (req,res,next) =>{
    const {id} = res.locals.user;
    const animal = req.params.animal;
    try{
        const tab = await Event.find({owner:id, animal}, 'id description date').exec();
        res.json(tab);
    }
    catch(err){
        console.log(err);
        res.status(400).send('Server error: can\'t show events');
    }
}
