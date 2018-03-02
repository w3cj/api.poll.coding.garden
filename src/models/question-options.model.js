// question-options-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const questionOptions = new Schema({
    text: {
      type: String,
      required: true
    },
    question: {
      type: Schema.Types.ObjectId,
      ref: 'questions',
      required: true
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'users',
      required: true
    }
  }, {
    timestamps: true
  });

  return mongooseClient.model('questionOptions', questionOptions);
};
