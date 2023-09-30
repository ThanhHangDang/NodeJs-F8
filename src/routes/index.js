const newsRouter = require('./news');
const siteRouter = require('./site');

function route(app) {
    //Dành cho trang new
    app.use('/news', newsRouter);

    // Cho mấy trang như Home, Search,...
    app.use('/', siteRouter);
}

module.exports = route;
