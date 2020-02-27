const router = require('express').Router();
const questionController = require('../controllers/questionController.js');
const answerController = require('../controllers/answerController.js');

router.get('/:product_id', questionController.getQuestions);
router.post('/:product_id', questionController.addQuestion);
router.put('/question/:question_id/helpful', questionController.markHelpful);
router.put('/question/:question_id/report', questionController.reportQuestion);

router.get('/:question_id/answers', answerController.getAnswers);
router.post('/:question_id/answers', answerController.addAnswer);
router.put('/answer/:answer_id/helpful', answerController.markHelpful);
router.put('/answer/:answer_id/report', answerController.reportAnswer);

module.exports = router;