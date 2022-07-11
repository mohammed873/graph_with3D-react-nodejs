const mongoose = require("mongoose");

const youngPeopleSchema = new mongoose.Schema({
    "date": {
      "$date": {
        "$numberLong": {
          "type": "String"
        }
      }
    },
    "logits": {
      "type": "String"
    },
    "net_sent": {
      "type": "String"
    },
    "logits_mean": {
      "type": "String"
    },
    "net_sent_mean": {
      "type": "String"
    },
    "MA_logits": {
      "type": "String"
    },
    "MA_net_sent": {
      "type": "String"
    },
    "MA_net_sent_ema_alpha_0": {
      "type": [
        "Mixed"
      ]
    }
  });

const youngPeople = mongoose.model("youngPeople", youngPeopleSchema);
module.exports = youngPeople;
