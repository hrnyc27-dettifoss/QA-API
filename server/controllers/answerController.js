const answerModel = require('../models/answerModel.js');

module.exports = {
  getAnswers: (req, res) => {
    let page = req.query.page ? parseInt(req.query.page) : 1;
    let count = req.query.count ? parseInt(req.query.count) : 5;
    let result = {
      question: req.params.question_id,
      page: page,
      count: count
    };

    answerModel.read(req.params, page, count)
      .then((data) => {
        data.forEach((answer) => {
          answer.photos.forEach((photo) => {
            delete photo._id;
            delete photo.answer_id;
          })
        })
        result.results = data;
        res.send(result);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(404);
      });
  },

  addAnswer: (req, res) => {
    answerModel.create(req.params, req.body)
      .then((data) => {
        res.sendStatus(201);
      }).catch((err) => {
        console.error(err);
        res.sendStatus(400);
      })
  },

  markHelpful: (req, res) => {
    answerModel.updateHelpfulness(req.params)
      .then((data) => {
        res.sendStatus(204);
      }).catch((err) => {
        console.error(err);
        res.sendStatus(400);
      });
  },

  reportAnswer: (req, res) => {
    answerModel.updateReported(req.params)
      .then((data) => {
        res.sendStatus(204);
      }).catch((err) => {
        console.error(err);
        res.sendStatus(400);
      });
  },
}