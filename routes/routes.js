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
//# sourceMappingURL=routes.js.map
