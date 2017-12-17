'use strict';


class Icebreaker{
  question(){
    Question.Find()
  }
}
const Question = require(`./models/Question.js`)
module.exports = Icebreaker
