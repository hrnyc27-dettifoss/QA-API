const answerModel = require('../models/answerModel.js');
const photoModel = require('../models/photoModel.js');

module.exports = {
  getAnswers: async (req, res) => {
    let page = req.query.page ? req.query.page : 1;
    let count = req.query.count ? req.query.count : 5;

    let data = await answerModel.read(req.params, page, count);

    res.send(data);

    // answerModel.read(req.params, page, count)
    //   .then((data) => {
    //     res.send('answer get');
    //   });
  },

  addAnswer: (req, res) => {
    //answerModel.create(req.params, req.body);

    res.send('answer post');
  },

  markHelpful: (req, res) => {
    //answerModel.updateHelpfulness(req.params);

    res.send('answer helpful');
  },

  reportAnswer: (req, res) => {
    //answerModel.updateReported(req.params);

    res.send('answer report');
  },
}