function index(req, res) {
    res.render('index', { title: 'Express' });
}
exports.index = index;
;

function users(req, res) {
    res.send("USERS2");
}
exports.users = users;
;

function login(req, res) {
    res.render('login');
}
exports.login = login;
;
//# sourceMappingURL=routes.js.map
