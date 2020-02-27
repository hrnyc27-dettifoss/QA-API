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
    let page = req.query.page ? req.query.page : 1;
    let count = req.query.count ? req.query.count : 5;

    res.send(questionModel.read(req.params, page, count));
  },

  addQuestion: (req, res) => {
    //questionModel.create(req.params, req.body);

    res.send('question post');
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