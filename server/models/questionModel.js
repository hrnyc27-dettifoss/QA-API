const db = require('../../db/index.js');

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

// working query
// let queryString = `
//       SELECT 
//         *
//       FROM 
//         questions
//       WHERE
//         product_id = ${product_id} 
//       ORDER BY
//         question_helpfulness DESC 
//       LIMIT 
//         ${count} 
//       OFFSET 
//         ${offset}
//     `;

// SELECT 
//         q.id AS question_id,
//         q.question_body,
//         q.question_date,
//         q.asker_name,
//         q.question_helpfulness,
//         q.reported,
//         a.id,
//         a.body,
//         a.answer_date AS date,
//         a.answerer_name,
//         a.helpfulness,
//         p.id AS photo_id,
//         p.url
//       FROM 
//         questions q
//       INNER JOIN answers a ON a.question_id = question_id
//       INNER JOIN photos p ON p.answer_id = a.id
//       WHERE
//         q.product_id = ${product_id} 
//       ORDER BY
//         q.question_helpfulness DESC 
//       LIMIT 
//         ${count} 
//       OFFSET 
//         ${offset}

// select row_to_json(art) as artists
// from(
//   select a.id, a.name, 
//   (select json_agg(alb)
//   from (
//     select * from albums where artist_id = a.id
//   ) alb
// ) as albums
// from artists as a) art;

// {"id":1,"name":"AC/DC","albums":[
//   {"id":1,"title":"For Those About To Rock We Salute You","artist_id":1}, +
//   {"id":4,"title":"Let There Be Rock","artist_id":1}
// ]}
// {"id":2,"name":"Accept","albums":[
//   {"id":2,"title":"Balls to the Wall","artist_id":2},                    +
//   {"id":3,"title":"Restless and Wild","artist_id":2}
// ]}
// {"id":3,"name":"Aerosmith","albums":[
//   {"id":5,"title":"Big Ones","artist_id":3}
// ]}

module.exports = {
  read: ({product_id}, page, count) => {
    let offset = (page - 1) * count;

    let queryString = `
      SELECT row_to_json(ans) AS answers
      FROM (
        SELECT a.id, a.body, a.answer_date AS date, a.answerer_name, a.helpfulness,
        (SELECT json_agg(p)
          FROM (
            SELECT id, url from photos WHERE answer_id = a.id
          ) p
        ) AS photos
      FROM answers AS a) ans
    `;

    // let queryString = `
    //   SELECT
    //     id,
    //     body,
    //     answer_date AS date,
    //     answerer_name,
    //     helpfulness
    //   FROM
    //     answers
    //   WHERE EXISTS
    //     question_id  (
    //       SELECT
    //         x.question_id
    //       FROM (
    //         SELECT 
    //           id AS question_id,
    //           question_body,
    //           question_date,
    //           asker_name,
    //           question_helpfulness,
    //           reported
    //         FROM
    //           questions
    //         WHERE
    //           product_id = ${product_id}
    //             AND
    //           reported = 0
    //         ORDER BY
    //           question_helpfulness DESC 
    //         LIMIT 
    //           ${count} 
    //         OFFSET 
    //           ${offset}
    //       ) AS x
    //     )
    // `;

    return db.query(queryString);
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