const request = require("request");
const { Pool } = require("pg");
const pool = new Pool();


function apicall (parameter,callback) {
  request(
    {
      url: `https://decath-product-api.herokuapp.com/${parameter}`,
      method: "GET"
    },
    function(error, response, result) {
      if (error){
        console.warn("error:", error);
      }
      else {
        callback(result);
      }
    }
  );
}

function renderBrands(result){
  const parsedResult = JSON.parse(result);
  pool.connect(
    (error, client, release) =>{
      if (error){
        release();
        return console.error("Error acquiring client", error.stack);
      }
      else
      {
        parsedResult.map((newResult) => {
          return client.query(
            "INSERT INTO brands VALUES ($1, $2);",
            [newResult.id,newResult.title],
            (error, result)=>{
              if (error){
                return console.error("Error acquiring client", error.stack);
              }
              return console.log(result);
            }
          );
        }
        );
        release();
      }
    }
  );
}

function renderProducts(result){
  const parsedResult = JSON.parse(result);
  pool.connect(
    (error, client, release) =>{
      if (error){
        release();
        return console.error("Error acquiring client", error.stack);
      }
      else
      {
        parsedResult.map((newResult) => {
          return client.query(
            "INSERT INTO Products VALUES ($1, $2,$3,$4,$5,$6,$7,$8,$9,$10,$11);",
            [newResult.id,newResult.decathlon_id,newResult.title,newResult.description,newResult.brand_id,newResult.min_price,newResult.max_price,newResult.crossed_price,newResult.percent_reduction,newResult.image_path,newResult.rating],
            (error, result)=>{
              if (error){
                return console.error("Error acquiring client", error.stack);
              }
              return console.log(result);
            }
          );
        }
        );
        release();
      }
    }
  );
}

function renderCategories(result){
  const parsedResult = JSON.parse(result);
  pool.connect(
    (error, client, release) =>{
      if (error){
        release();
        return console.error("Error acquiring client", error.stack);
      }
      else
      {
        parsedResult.map((newResult) => {
          return client.query(
            "INSERT INTO categories VALUES ($1, $2, $3);",
            [newResult.id,newResult.decathlon_id,newResult.label],
            (error, result)=>{
              if (error){
                return console.error("Error acquiring client", error.stack);
              }
              return console.log(result);
            }
          );
        }
        );
        release();
      }
    }
  );
}




apicall("brands",renderBrands);
apicall("products",renderProducts);
apicall("categories",renderCategories);
