const {Question, getNextId} = require('../../db/index.js');

module.exports = {
  read: ({product_id}, page, count) => {
    let skip = (page - 1) * count;

    return (
      Question.aggregate([
        {$match: {product_id: parseInt(product_id), reported: 0}},
        {$sort: {question_helpfulness: -1}},
        {$skip: skip},
        {$limit: count},
        {$lookup: {from: 'combined_answers', localField: 'question_id', foreignField: 'question_id', as: 'temp_answers'}}
      ])
    );
  },

  create: async ({product_id}, {body, name, email}) => {
    let question_id = await getNextId('questionid');
    let today = new Date();
    let date = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;

    return Question.create({
      question_id: question_id,
      question_body: body,
      question_date: date,
      asker_name: name,
      asker_email: email,
      question_helpfulness: 0,
      reported: 0,
      product_id: product_id
    })
  },

  updateHelpfulness: ({question_id}) => {
    return Question.findOneAndUpdate({question_id: question_id}, {$inc:{question_helpfulness: 1}}, {new: true});
  },

  updateReported: ({question_id}) => {
    return Question.findOneAndUpdate({question_id: question_id}, {reported: 1}, {new: true});
  }
}