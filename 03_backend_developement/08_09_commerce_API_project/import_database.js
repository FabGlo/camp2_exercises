const PG = require("pg");
const express = require("express");
const app = express();


app.get(
  "/products/:id",
  function(request, result) {
    const client = new PG.Client();
    client.connect();
    client.query(
      "SELECT * FROM products WHERE id = $1::text",
      ["452a5e91-1e50-4b55-95ef-0ecab330297e"],
      [request.params.id],
      function(error, resultQuery) {
        if (error) {
          result.send(error);
        } else {
          result.send(resultQuery);
        }
        client.end();
      }
    );
  }
);
