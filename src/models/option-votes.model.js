// option-votes-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const optionVotes = new Schema({
    option: {
      type: Schema.Types.ObjectId,
      ref: 'questionOptions',
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

  return mongooseClient.model('optionVotes', optionVotes);
};
