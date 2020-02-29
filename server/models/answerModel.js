const {Answer} = require('../../db/index.js');

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
  read: ({question_id}, page, count) => {
    
    let skip = (parseInt(page) - 1) * parseInt(count);
    console.log(page, count, 2, 3);
    console.log(question_id, 1);

    return Answer.find({question_id: parseInt(question_id)},'answer_id body date answerer_name helpfulness photos -_id').sort({helpfulness: -1}).skip(skip).limit(count);
  },

  readAll: (question_id) => {
    return Answer.find({question_id: question_id},'answer_id body date answerer_name helpfulness photos -_id');
  },

  create: ({question_id}, {body, name, email}) => {
    let queryString = `
      
    `;

    db.query(queryString);
  },

  updateHelpfulness: ({answer_id}) => {
    let queryString = `
      
    `;

    db.query(queryString);
  },

  updateReported: ({answer_id}) => {
    let queryString = `
      
    `;

    db.query(queryString);
  }
}