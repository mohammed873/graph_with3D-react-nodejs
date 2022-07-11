const mongoose = require("mongoose");

const genZSchema = new mongoose.Schema({
    "date": {
      "$date": {
        "type": "Date"
      }
    },
    "category": {
      "type": "String"
    },
    "sentence": {
      "type": "String"
    },
    "sentence_short": {
      "type": "String"
    },
    "sentence_keywords": {
      "type": "String"
    },
    "sentence_sentiment": {
      "type": "String"
    },
    "sentence_sentiment_net": {
      "type": "String"
    },
    "sentence_sent_score": {
      "type": "String"
    },
    "sentence_sentiment_label": {
      "type": "Date"
    },
    "sentence_entities": {
      "type": "String"
    },
    "sentence_non_entities": {
      "type": "String"
    }
  });

const genZ = mongoose.model("genZ", genZSchema);
module.exports = genZ;
