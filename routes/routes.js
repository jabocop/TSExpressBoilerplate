function index(req, res) {
    res.render('index', { title: 'Express' });
}
exports.index = index;
;

function profile(req, res) {
    res.render('profile', {
        user: req.user
    });
}
exports.profile = profile;
;

function login(req, res) {
    res.render('login');
}
exports.login = login;
;

function signup(req, res) {
    res.render('signup');
}
exports.signup = signup;
;

function logout(req, res) {
    req.logout();
    res.redirect('/');
}
exports.logout = logout;
;
//# sourceMappingURL=routes.js.map
