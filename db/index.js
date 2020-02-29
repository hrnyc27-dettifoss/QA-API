const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/qa', {useNewUrlParser: true});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to db...');
})

const questionsSchema = new mongoose.Schema({
  id: Number,
  question_body: String,
  question_date: Date,
  asker_name: String,
  asker_email: String,
  question_helpfulness: Number,
  reported: Number,
  product_id: Number
  // answers: [{type: mongoose.Schema.Types.ObjectId, ref: 'Answer'}]
}, {collection: 'questions'});

const answersSchema = new mongoose.Schema({
  id: Number,
  body: String,
  answer_date: Date,
  answerer_name: String,
  email: String,
  helpfulness: Number,
  reported: Number,
  question_id: Number,
  photos: Array
}, {collection: 'combined_answers'});

const Question = mongoose.model('Question', questionsSchema);
const Answer = mongoose.model('Answer', answersSchema);

module.exports.Question = Question;
module.exports.Answer = Answer;
module.exports.connection = db;