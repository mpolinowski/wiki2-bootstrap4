var express = require('express');
var searchRouter = express.Router();
var elasticsearch = require('elasticsearch');

var connectionString = 'localhost:9200';
var _index = 'wiki2_en';
var _type = 'article';

var client = new elasticsearch.Client({
    host: connectionString,
    log: 'trace',
  });


/* GET Search page. */
searchRouter.route('/')
    .get(function(req, res) {
        res.render('Search', {
            title: 'INSTAR Wiki Suche',
            breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Search/">Suche</a></li>',
          });
      });


// Search
searchRouter.route('/Results')
    .get(function(req, res) {

            client.search({
                index: _index,
                type: _type,
                body: {
                  query: {
                      multi_match: {
                          query: req.query.q,
                          fields: ['title^100', 'tags^50', 'abstract^20', 'description^10', 'models^5', 'chapter^5', 'title2^5'],
                          fuzziness: 1,
                        },
                    },
                },
              }).then(function(resp) {
                res.render('Search_Results', {
                    title: 'INSTAR Wiki Suchergebnisse',
                    response: resp,
                    query: req.query.q,
                    breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Search/">Suche</a></li><li class="breadcrumb-item"><a href="/Search/Results/">Suchergebnisse</a></li>',
                  });
              }, function(err) {
                console.trace(err.message);
                res.render('Search_Results', {
                    title: 'INSTAR Wiki Suchergebnisse',
                    response: err.message,
                    breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Search/">Suche</a></li><li class="breadcrumb-item"><a href="/Search/Results/">Suchergebnisse</a></li>',
                  });
              });
          });

module.exports = searchRouter;
