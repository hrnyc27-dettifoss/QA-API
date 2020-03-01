const {Answer, getNextId, mongooseTypes} = require('../../db/index.js');

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

    return Answer.find({question_id: parseInt(question_id)},'answer_id body date answerer_name helpfulness photos -_id').sort({helpfulness: -1}).skip(skip).limit(count);
  },

  create: async ({question_id}, {body, name, email, photos}) => {
    let answer_id = await getNextId('answerid');
    let today = new Date();
    let date = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
    let transformPhotos;
    
    if (photos.length > 0) {
      transformPhotos = Promise.all(photos.map(async (url) => {
        let photo_id = await getNextId('photoid');
        return {
          _id: new mongooseTypes.ObjectId(),
          id: photo_id,
          url: url,
          answer_id: answer_id
        };
      }));
    } else {
      transformedPhotos = [];
    }

    return transformPhotos
      .then((transformedPhotos) => {
        return Answer.create({
          answer_id: answer_id,
          body: body,
          date: date,
          answerer_name: name,
          email: email,
          helpfulness: 0,
          reported: 0,
          question_id: question_id,
          photos: transformedPhotos
        });
      });
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