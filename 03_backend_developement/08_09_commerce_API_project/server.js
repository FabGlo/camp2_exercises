const express = require("express");
const app = express();
const PG = require("pg");

const port = process.env.PORT || 3000;

app.get("/", function (request, result) {
  result.send("Hello World!");
});

function route(parameter){
  app.get(
    `/${parameter}`,
    function(request, result) {
      const client = new PG.Client();
      client.connect();
      client.query(
        `SELECT * FROM ${parameter};`,
        function(error, resultQuery) {
          if (error) {
            result.send(error);
          } else {
            result.json(resultQuery.rows);
          }
          client.end();
        }
      );
    }
  );
}

function routeid(parameter){
  app.get(
    `/${parameter}/:id`,
    function(request, result) {
      const client = new PG.Client();
      client.connect();
      client.query(
        `SELECT * FROM ${parameter} WHERE id = $1;`,
        [request.params.id],
        function(error, resultQuery) {
          if (error) {
            result.send(error);
          } else {
            result.json(resultQuery.rows);
          }
          client.end();
        }
      );
    }
  );
}

app.get(
  "/categories/:id/products",
  function(request, result) {
    const client = new PG.Client();
    client.connect();
    client.query(
      "SELECT products.* FROM products INNER JOIN categories_products on (products.id=categories_products.id_products) WHERE categories_products.id_categories = $1;",
      [request.params.id],
      function(error, resultQuery) {
        if (error) {
          result.send(error);
        } else {
          result.json(resultQuery.rows);
        }
        client.end();
      }
    );
  }
);




app.listen(port, function () {
  console.log("Server listening on port:" + port);
});
