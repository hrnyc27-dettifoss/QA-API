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
    let skip = (page - 1) * count;

    return Answer.find({question_id: question_id},'answer_id body date answerer_name helpfulness photos -_id').skip(skip).limit(count);
  },

  readAll: (question_id) => {
    let queryString = `
      SELECT 
        * 
      FROM 
        answers 
      WHERE 
        question_id = ${question_id}
          AND
        reported = 0
      ORDER BY
        helpfulness DESC
    `;

    return db.query(queryString);
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