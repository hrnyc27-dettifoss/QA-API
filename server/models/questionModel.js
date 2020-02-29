const {connection, Question} = require('../../db/index.js');

// expected data
// {
//   "product_id": "5",
//   "results": [{
//         "question_id": 37,
//         "question_body": "Why is this product cheaper here than other sites?",
//         "question_date": "2018-10-18T00:00:00.000Z",
//         "asker_name": "williamsmith",
//         "question_helpfulness": 4,
//         "reported": 0,
//         "answers": {
//           68: {
//             "id": 68,
//             "body": "We are selling it here without any markup from the middleman!",
//             "date": "2018-08-18T00:00:00.000Z",
//             "answerer_name": "Seller",
//             "helpfulness": 4,
//             "photos": []
//             // ...
//           }
//         }
//       },
//       {
//         "question_id": 38,
//         "question_body": "How long does it last?",
//         "question_date": "2019-06-28T00:00:00.000Z",
//         "asker_name": "funnygirl",
//         "question_helpfulness": 2,
//         "reported": 0,
//         "answers": {
//           70: {
//             "id": 70,
//             "body": "Some of the seams started splitting the first time I wore it!",
//             "date": "2019-11-28T00:00:00.000Z",
//             "answerer_name": "sillyguy",
//             "helpfulness": 6,
//             "photos": [],
//           },
//           78: {
//             "id": 78,
//             "body": "9 lives",
//             "date": "2019-11-12T00:00:00.000Z",
//             "answerer_name": "iluvdogz",
//             "helpfulness": 31,
//             "photos": [],
//           }
//         }
//       },
//       // ...
//   ]
// }
// db.answers.aggregate([{$lookup: {from:"photos",localField:"answer_id",foreignField:"answer_id",as:"photos"}}, {$out: "combined_answers"}])

// , question_id: 1, question_body: 1, question_date: 1, asker_name: 1, question_helpfulness: 1, reported: 1
// {$project: {_id: 0, asker_email: 0, product_id: 0}},  

module.exports = {
  read: ({product_id}, page, count) => {
    let skip = (page - 1) * count;

    return (
      // Question
      //   .find({product_id: product_id}, 'question_id question_body question_date asker_name question_helpfulness reported answers -_id')
      //   .skip(skip)
      //   .limit(count)
        // .populate('answers')
    
      
      Question.aggregate([
        {$match: {product_id: parseInt(product_id)}},
        {$lookup: {from: 'combined_answers', localField: 'question_id', foreignField: 'question_id', as: 'temp_answers'}}
      ])
    );
  },

  create: ({product_id}, {body, name, email}) => {
    let queryString = `
      
    `;

    db.query(queryString);
  },

  updateHelpfulness: ({question_id}) => {
    let queryString = `
      
    `;

    db.query(queryString);
  },

  updateReported: ({question_id}) => {
    let queryString = `
      
    `;

    db.query(queryString);
  }
}