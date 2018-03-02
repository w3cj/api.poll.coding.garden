function setUser(context) {
  context.data.user = context.params.user._id;
  return context;
}

module.exports = setUser;
