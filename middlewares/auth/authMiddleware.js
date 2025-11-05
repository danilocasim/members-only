module.exports.isAuth = async (req, res, next) => {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.redirect("/");
  }
};

module.exports.isUnAuth = async (req, res, next) => {
  if (req.isUnauthenticated()) {
    next();
  } else res.redirect("/");
};

module.exports.isAlreadyMember = async (req, res, next) => {
  if (req.user.ismember) {
    res.redirect("/");
  } else next();
};
