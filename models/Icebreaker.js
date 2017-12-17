'use strict';


class Icebreaker{
  question(){
    Question.Find()
  }
}
const Question = require(`./Question.js`)
module.exports = Icebreaker
