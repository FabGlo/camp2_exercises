const fetch = require("node-fetch");



function brandNameByProduct(idProduct){
  return fetch(
    `https://decath-product-api.herokuapp.com/products/${idProduct}`,
    {method: "GET"}
  )
    .then(response => response.json())
    .then(product => product.brand_id)
    .then(brand_id=>
      fetch(
        `https://decath-product-api.herokuapp.com/brands/${brand_id}`,
        {method: "GET"}
      ))
    .then (resultbrand => resultbrand.json())
    .then((resultbrandparsed) =>{
      return resultbrandparsed.title;
    })
    .catch((error) => {console.warn(error);});
}


module.exports=brandNameByProduct;
