const answerModel = require('../models/answerModel.js');
const photoModel = require('../models/photoModel.js');

// {
//   "question": "1",
//   "page": 0,
//   "count": 5,
//   "results": [
//     {
//       "answer_id": 8,
//       "body": "What a great question!",
//       "date": "2018-01-04T00:00:00.000Z",
//       "answerer_name": "metslover",
//       "helpfulness": 8,
//       "photos": [],
//     },
//     {
//       "answer_id": 5,
//       "body": "Something pretty durable but I can't be sure",
//       "date": "2018-01-04T00:00:00.000Z",
//       "answerer_name": "metslover",
//       "helpfulness": 5,
//       "photos": [{
//           "id": 1,
//           "url": "urlplaceholder/answer_5_photo_number_1.jpg"
//         },
//         {
//           "id": 2,
//           "url": "urlplaceholder/answer_5_photo_number_2.jpg"
//         },
//         // ...
//       ]
//     },
//     // ...
//   ]
// }

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
        console.log(data);
        res.sendStatus(201);
      }).catch((err) => {
        console.error(err);
        res.send(400);
      })
  },

  markHelpful: (req, res) => {
    answerModel.updateHelpfulness(req.params)
      .then((data) => {
        console.log(data);
        res.sendStatus(201);
      }).catch((err) => {
        console.error(err);
        res.send(400);
      });
  },

  reportAnswer: (req, res) => {
    //answerModel.updateReported(req.params);

    res.send('answer report');
  },
}