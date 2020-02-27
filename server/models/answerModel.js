const db = require('../../db/index.js');

module.exports = {
  read: ({question_id}, page, count) => {
    let queryString = `
      
    `;

    db.query(queryString);
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