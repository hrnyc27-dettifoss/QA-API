const answerRouter = require('express').Router();
const answerController = require('../controllers/answerController.js');

answerRouter.get('/:question_id/answers', answerController.getAnswers);
answerRouter.post('/:question_id/answers', answerController.addAnswer);
answerRouter.put('/answer/:answer_id/helpful', answerController.markHelpful);
answerRouter.put('answer/:answer_id/report', answerController.reportAnswer);

module.exports = answerRouter;