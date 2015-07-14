var express = require('express');
var router = express.Router();

var marklogic = require("marklogic");
var conn = require("../env.js").connection;

var db = marklogic.createDatabaseClient(conn);
var q = marklogic.queryBuilder;

/* GET home page. */
router.get('/', function(req, res, next) {
  db.documents.query(
    q.where(
      q.byExample(
        {
          gender: "male",
          age: { $gt: 25 },
          tags: ["ex"],
          $filtered: true
        }   
      )
    )
  )
  .stream().
    on("data", function(document) {
      res.json(document);
    }).
    on("error", function(error) {
      console.error(error)
    });
    
});

module.exports = router;
