const Promise = require('bluebird');
const {Answer, getNextId, mongooseTypes} = require('../../db/index.js');

module.exports = {
  read: ({question_id}, page, count) => {
    let skip = (parseInt(page) - 1) * parseInt(count);

    return Answer.find({question_id: parseInt(question_id), reported: 0},'answer_id body date answerer_name helpfulness photos -_id').sort({helpfulness: -1}).skip(skip).limit(count);
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
    return Answer.findOneAndUpdate({answer_id: answer_id}, {$inc:{helpfulness: 1}}, {new: true});
  },

  updateReported: ({answer_id}) => {
    return Answer.findOneAndUpdate({answer_id: answer_id}, {reported: 1}, {new: true});
  }
}