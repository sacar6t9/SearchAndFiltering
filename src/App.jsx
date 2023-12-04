import React, { useState } from "react";
import Nav from "./Navigation/Nav";
import Products from "./Products/Products";
import Recommendend from "./Recommendend/Recommendend";
import Sidebar from "./Sidebar/Sidebar";
//DATABASE
import products from "./db/data";
import Card from "./components/Card";

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [query, setQuery] = useState("");
  //inputfilter
  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };
  const filteredItems = products.filter((product) =>
    product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase() !== -1)
  );
  //radio filter
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };
  //button filter
  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };
  function filteredData(products, selected, query) {
    let filteredProducts = products;

    //filtering the input iterms
    if (query) {
      filteredProducts = filteredItems;
    }
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, newPrice, title }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          newPrice === selected ||
          title === selected
      );
    }
    return filteredProducts.map(({img,title,star,reviews,prevPrice,newPrice})=>{
      return(<Card key={Math.random()}
      img={img}
      title={title} 
      star={star}
      reviews={reviews}
      prevPrice={prevPrice}
      newPrice={newPrice}

      />)
    })
  }
  const result=filteredData(products,selectedCategory,query)
  return (
    <>
      <Sidebar handleChange={handleChange} />
      <Nav query={query} handleChange={handleChange} />
      <Recommendend handleClick={handleClick}/>
      <Products result={result}/>
    </>
  );
};

export default App;
//13746