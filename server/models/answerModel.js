const db = require('../../db/index.js');

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

// SELECT json_agg(p) FROM (SELECT id, url from photos WHERE answer_id = 5) p
// SELECT a.id, a.body, a.answer_date AS date, a.answerer_name, a.helpfulness, (SELECT json_agg(p) FROM (SELECT id, url from photos WHERE answer_id = a.id) p) AS photos FROM answers AS a WHERE a.question_id = 1 ORDER BY a.helpfulness DESC LIMIT 5 OFFSET 0

// SELECT row_to_json(ans) AS answers
// FROM (
//   SELECT a.id, a.body, a.answer_date AS date, a.answerer_name, a.helpfulness,
//   (SELECT json_agg(p)
//     FROM (
//       SELECT id, url from photos WHERE answer_id = a.id
//     ) p
//   ) AS photos
// FROM answers AS a
// WHERE a.question_id = ${question_id}
// ORDER BY a.helpfulness DESC
// LIMIT ${count}
// OFFSET ${offset}) ans

// SELECT answer_id, body, answer_date as date, answerer_name, helpfulness,
//   (
//     SELECT array_to_json(coalesce(array_agg(row_to_json(d)),'{}'))
//     FROM (
//       SELECT id, url
//       FROM photos
//       WHERE answer_id=answers.answer_id
//     ) d
//   ) AS photos
// FROM answers
// WHERE question_id = ${questionId} AND reported = 0 LIMIT ${count} OFFSET ${(page -
//   1) *
//   count}`

// SELECT a.id AS answer_id, a.body, a.answer_date as date, a.answerer_name, a.helpfulness, (SELECT array_to_json(coalesce(array_agg(row_to_json(d)),'{}')) FROM (SELECT id, url FROM photos WHERE answer_id = a.id) d) AS photos FROM answers AS a WHERE question_id = 1 AND reported = 0 LIMIT 5 OFFSET 0
// SELECT a.id AS answer_id, a.body, a.answer_date as date, a.answerer_name, a.helpfulness,
//       (
//         SELECT array_to_json(coalesce(array_agg(row_to_json(d)),'{}'))
//         FROM (
//           SELECT id, url
//           FROM photos
//           WHERE answer_id = a._id
//         ) d
//       ) AS photos
//     FROM answers a
//     WHERE question_id = ${question_id} AND reported = 0 
//     LIMIT ${count} 
//     OFFSET ${offset}

// SELECT id AS answer_id, body, answer_date as date, answerer_name, helpfulness FROM answers WHERE question_id = 1 AND reported = 0 LIMIT 5 OFFSET 0

module.exports = {
  read: async ({question_id}, page, count) => {
    let offset = (page - 1) * count;

    let queryString = `
    SELECT id AS answer_id, body, answer_date as date, answerer_name, helpfulness
    FROM answers
    WHERE question_id = ${question_id} AND reported = 0 
    LIMIT ${count} 
    OFFSET ${offset}
    `;

    let query = await db.query(queryString);

    return query;
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