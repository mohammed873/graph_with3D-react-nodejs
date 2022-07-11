const GenZ = require('../models/genZModel')


//get all youngPeople
exports.getAllSentences = async (req, res) => {
    try {
      const genZ = await GenZ.find().limit(10);
      res.status(200).json(genZ);
    } catch (error) {
      res.status(500).send({ message: error.message });
      
    }
};

//add new sentence detail
exports.addSentenceDetail =  async (req, res) => {
    const sentence = new GenZ({
        date: req.body.date,
        category: req.body.category,
        sentence: req.body.sentence,
        sentence_short: req.body.sentence_short,
        sentence_keywords : req.body.sentence_keywords,
        sentence_sentiment : req.body.sentence_sentiment ,
        sentence_sentiment_net : req.body.sentence_sentiment_net ,
        sentence_sent_score : req.body.sentence_sent_score ,
        sentence_sentiment_label : req.body.sentence_sentiment_label ,
        sentence_entities : req.body.sentence_entities ,
        sentence_non_entities : req.body.sentence_non_entities 
    });
    
    try {
        const newSentence = await sentence.save();
        res.status(200).json({
          message: "Sentence successfully created",
          newSentence,
        });
    } catch (error) {
      res.status(500).send({ message: error.message });
      
    }
};