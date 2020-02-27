const questionRouter = require('express').Router();
const questionController = require('../controllers/questionController.js');

questionRouter.get('/:product_id', questionController.getQuestions);
questionRouter.post('/:product_id', questionController.addQuestion);
questionRouter.put('/question/:question_id/helpful', questionController.markHelpful);
questionRouter.put('question/:question_id/report', questionController.reportQuestion);

module.exports = questionRouter;