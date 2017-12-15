const request = require("request");
const { Pool } = require("pg");
const pool = new Pool();

function renderproductsbycategories(ProductsByCategoriesJSON,identifier){
  const parsedResult = JSON.parse(ProductsByCategoriesJSON);
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
            "INSERT INTO categories_products (id_categories,id_products) VALUES ($1,$2);",
            [identifier,newResult.id],
            (error, result)=>{
              if (error){
                return console.error("Error acquiring client", error.stack);
              }
              return result;
            }
          );
        }
        );
        release();
      }
    }
  );
}


function apicallproductsbycategories(identifier,renderproductsbycategoriesCallback){
  request(
    {
      url: `https://decath-product-api.herokuapp.com/categories/${identifier}/products`,
      method: "GET",
    },
    function(error, response, ProductsByCategoriesJSON) {
      if (error) {
        console.warn("error:", error);
      }
      else {
        renderproductsbycategoriesCallback(ProductsByCategoriesJSON,identifier);
      }
    }
  );
}

function renderIdentifier(resultJSON, apicallproductsbycategoriesCallback){
  for (let i=1; i<200;i++){
    const identifier = JSON.parse(resultJSON)[i].id;
    apicallproductsbycategoriesCallback(identifier, renderproductsbycategories);
  }
  setTimeout(()=>{
    for (let j=200; j<400;j++){
      const identifier = JSON.parse(resultJSON)[j].id;
      apicallproductsbycategoriesCallback(identifier, renderproductsbycategories);
    }},100000);
  setTimeout(()=>{
    for (let k=400; k<600;k++){
      const identifier = JSON.parse(resultJSON)[k].id;
      apicallproductsbycategoriesCallback(identifier, renderproductsbycategories);
    }},100000);
  setTimeout(()=>{
    for (let l=600; l<800;l++){
      const identifier = JSON.parse(resultJSON)[l].id;
      apicallproductsbycategoriesCallback(identifier, renderproductsbycategories);
    }},100000);
  setTimeout(()=>{
    for (let m=800; m<1002;m++){
      const identifier = JSON.parse(resultJSON)[m].id;
      apicallproductsbycategoriesCallback(identifier, renderproductsbycategories);
    }},100000);
}


function apicallparameter (parameter, renderIdentifierCallback) {
  request(
    {
      url: `https://decath-product-api.herokuapp.com/${parameter}`,
      method: "GET"
    },
    function(error, response, resultJSON) {
      if (error){
        console.warn("error:", error);
      }
      else {
        renderIdentifierCallback(resultJSON, apicallproductsbycategories);
      }
    }
  );
}

apicallparameter("categories", renderIdentifier);



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


// apicallparameter("brands",renderBrands);
// apicallparameter("products",renderProducts);
// apicallparameter("categories",renderCategories);
