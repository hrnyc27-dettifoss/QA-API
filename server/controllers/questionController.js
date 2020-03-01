const questionModel = require('../models/questionModel.js');

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
            delete tAnswer._id;
            let id = tAnswer.answer_id;
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
  },

  addQuestion: (req, res) => {
    questionModel.create(req.params, req.body)
      .then((data) => {
        res.sendStatus(201);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(400);
      });
  },

  markHelpful: (req, res) => {
    questionModel.updateHelpfulness(req.params)
      .then((data) => {
        res.sendStatus(204);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(400);
      });
  },

  reportQuestion: (req, res) => {
    questionModel.updateReported(req.params)
      .then((data) => {
        res.sendStatus(204);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(400);
      });
  },
}