const users = require('./users/users.service.js');
const questions = require('./questions/questions.service.js');
const questionOptions = require('./question-options/question-options.service.js');
const optionVotes = require('./option-votes/option-votes.service.js');
module.exports = function (app) {
  app.configure(users);
  app.configure(questions);
  app.configure(questionOptions);
  app.configure(optionVotes);
};
