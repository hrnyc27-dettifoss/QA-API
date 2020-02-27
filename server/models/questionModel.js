const db = require('../../db/index.js');

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

module.exports = {
  read: async ({product_id}, page, count) => {
    let offset = (page - 1) * count;

    let queryString = `
      SELECT 
        q.*,
        a.*,
        p.*
      FROM 
        questions q
      INNER JOIN answers a ON a.question_id = q.id
      INNER JOIN photos p ON p.answer_id = a.id
      WHERE
        q.product_id = ${product_id} 
      ORDER BY
        question_helpfulness DESC 
      LIMIT 
        ${count} 
      OFFSET 
        ${offset}
    `;

    return await db.query(queryString);
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