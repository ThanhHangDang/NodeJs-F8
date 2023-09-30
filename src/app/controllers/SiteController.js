class SiteController {
    //[GET] /
    index(req, res) {
        res.render('Home');
    }

    //[GET] /search
    search(req, res) {
        res.send('abc');
    }
}

module.exports = new SiteController();
