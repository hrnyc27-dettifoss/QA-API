const fs = require('fs');
const etl = require('etl');
const {db} = require('./db/index.js');
const pool = db.$pool;

// questions
// fs.createReadStream('./csvs/questions.csv')
//   .pipe(etl.csv())
//   .pipe(
//     etl.map(function(obj) {
//       console.log('question id: ', obj.id);
//       this.push({
//         id: Number(obj.id),
//         product_id: Number(obj[' product_id']),
//         question_body: obj[' body'],
//         question_date: obj[' date_written'],
//         asker_name: obj[' asker_name'],
//         asker_email: obj[' asker_email'],
//         reported: Number(obj[' reported']),
//         question_helpfulness: Number(obj[' helpful'])
//       });
//     })
//   )
//   .pipe(etl.postgres.upsert(pool, 'public', 'questions'));

// answers
// fs.createReadStream('./csvs/answers.csv')
//   .pipe(etl.csv())
//   .pipe(
//     etl.map(function(obj) {
//       console.log('answer id: ', obj.id);
//       this.push({
//         id: Number(obj.id),
//         question_id: Number(obj[' question_id']),
//         body: obj[' body'],
//         answer_date: obj[' date_written'],
//         answerer_name: obj[' answerer_name'],
//         email: obj[' answerer_email'],
//         reported: Number(obj[' reported']),
//         helpfulness: Number(obj[' helpful'])
//       });
//     })
//     )
//   .pipe(etl.postgres.upsert(pool, 'public', 'answers'));

// photos
// fs.createReadStream('./csvs/answers_photos.csv')
//   .pipe(etl.csv())
//   .pipe(
//     etl.map(function(obj) {
//       console.log('photo id: ', obj.id);
//       this.push({
//         id: Number(obj.id),
//         answer_id: Number(obj[' answer_id']),
//         url: obj[' url']
//       });
//     })
//     )
//     .pipe(etl.postgres.upsert(pool, 'public', 'photos'));

// db.answers.aggregate([{$lookup: {from:"photos",localField:"answer_id",foreignField:"answer_id",as:"photos"}}, {$out: "combined_answers"}])