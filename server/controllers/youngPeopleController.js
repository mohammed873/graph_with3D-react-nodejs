const YoungPeople = require('../models/youngPeopleModel')


//get all youngPeople
exports.getAllYoungPeople = async (req, res) => {
    try {
      const youngPeople = await YoungPeople.find();
      res.status(200).json(youngPeople);
    } catch (error) {
      res.status(500).send({ message: error.message });
      
    }
};

//add new young person
exports.addPerson = async (req, res) => {
    const person = new YoungPeople({
        date: req.body.date,
        logits: req.body.logits,
        net_sent: req.body.net_sent,
        logits_mean: req.body.logits_mean,
        MA_net_sent_ema_alpha_0 : req.body.MA_net_sent_ema_alpha_0,
        MA_net_sent : req.body.MA_net_sent ,
        MA_logits : req.body.MA_logits ,
        net_sent_mean : req.body.net_sent_mean
    });
    
    try {
        const newPerson = await person.save();
        res.status(200).json({
          message: "Person successfully created",
          newPerson,
        });
    } catch (error) {
      res.status(500).send({ message: error.message });
      
    }
};