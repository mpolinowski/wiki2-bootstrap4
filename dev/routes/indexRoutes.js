var express = require('express');
var indexRouter = express.Router();

/* GET home page. */
indexRouter.route('/')
    .get(function(req, res) {
        res.render('Index', {
            title: 'INSTAR Wiki',
            breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li>',
          });
      });

module.exports = indexRouter;
