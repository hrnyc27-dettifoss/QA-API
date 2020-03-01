const Promise = require('bluebird');
const questionModel = require('../models/questionModel.js');
const answerModel = require('../models/answerModel.js');
const photoModel = require('../models/photoModel.js');

// req.params => { product_id: '1' }
// req.query => { page: '1', count: '5' }
// req.body = {
//   body: 'Mi amigo pato es jefe pato Mi amigo pato es jefe pato ',
//   name: 'Patotato',
//   email: 'pqpagba@gmail.com'
// }

module.exports = {
  getQuestions: (req, res) => {
    let page = req.query.page ? parseInt(req.query.page) : 1;
    let count = req.query.count ? parseInt(req.query.count) : 5;
    let result = {
      product_id: req.params.product_id,
      page: page,
      count: count
    }

    questionModel.read(req.params, page, count)
      .then((data) => {

        data.forEach((question) => {
          question.answers = {};
          delete question._id;
          delete question.product_id;
          delete question.asker_email;

          question.temp_answers.forEach((tAnswer) => {
            let id = tAnswer.answer_id;
            delete tAnswer._id;
            delete tAnswer.answer_id;
            tAnswer.id = id;
            delete tAnswer.question_id;
            delete tAnswer.answerer_email;
            delete tAnswer.reported;
            
            tAnswer.photos.forEach((photo) => {
              delete photo._id;
              delete photo.answer_id;
            })

            question.answers[parseInt(id)] = tAnswer;
          })
          delete question.temp_answers;
        })
        result.results = data;
        res.send(result);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(404);
      });

    // questionModel.read(req.params, page, count)
    //   .then((questions) => {
    //     return (
    //       questions.map((question) => {
    //       question.answers = [];
    //       // console.log(question.answers);
    //       return answerModel.readAll(question.question_id)
    //         .then((answers) => {
    //           return answers.map((answer) => {
    //             question.answers.push(answer);
    //           })
    //         })
    //       })
    //     )
    //     // return questions;
    //   })
    //   .then((results) => {
    //     console.log(results)
    //     res.send(results);
    //   })
    //   .catch((err) => {
    //     console.error(err);
    //     res.sendStatus(404)
    //   });
  },

  addQuestion: (req, res) => {
    questionModel.create(req.params, req.body)
      .then((data) => {
        console.log(data);
        res.sendStatus(201);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(400);
      });
  },

  markHelpful: (req, res) => {
    //questionModel.updateHelpfulness(req.params);

    res.send('question helpful');
  },

  reportQuestion: (req, res) => {
    //questionModel.updateReported(req.params);

    res.send('question report');
  },
}