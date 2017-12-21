const fetch = require("node-fetch");



function categoriesList(){
  return fetch(
    "https://decath-product-api.herokuapp.com/categories",
    {method: "GET"}
  )
    .then(response => response.json())
    .then(categories => categories.map((label)=>{
      return {id:label.id,name:label.label}}))
    .catch((error) => {console.warn(error);})
}

function productsByCategory(id){
  return fetch(
    `https://decath-product-api.herokuapp.com/categories/${id}`,
    {method: "GET"}
  )
    .then(response => response.json())
    .then(categories => categories.id)
    .then(category_id=>
      fetch(
        `https://decath-product-api.herokuapp.com/categories/${category_id}/products`,
        {method: "GET"}
      ))
    .then (resultProducts => resultProducts.json())
    .then((resultproductsparsed) =>resultproductsparsed.map((result)=>{
      return{
        idProduct: result.id,
        name:result.title,
        image:`https://www.decathlon.fr/media/${result.image_path}`
      }}))
    .catch((error) => {console.warn(error);})
}

function productsData(id){
  return fetch(
    `https://decath-product-api.herokuapp.com/products/${id}`,
    {method: "GET"}
  )
    .then(response => response.json())
    .then((result) =>{
      return ({
        name:result.title,
        price:`${result.min_price} €`,
        rating:result.rating,
        description:result.description,
        image:`https://www.decathlon.fr/media/${result.image_path}`
      })})
    .catch((error) => {console.warn(error);})
}

module.exports={
  categoriesList : categoriesList,
  productsByCategory : productsByCategory,
  productsData : productsData
}
