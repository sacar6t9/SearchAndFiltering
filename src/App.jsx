import React, { useState } from "react";
import Nav from "./Navigation/Nav";
import Products from "./Products/Products";
import Recommendend from "./Recommendend/Recommendend";
import Sidebar from "./Sidebar/Sidebar";
//DATABASE
import products from "./db/data";

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  //inputfilter
  const [query, setQuery] = useState("");
  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };
  const filteredItems = products.filter((product) =>
    product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase() !== -1)
  );
  //radio filter
  const handleChange=event=>{
    setSelectedCategory(event.target.value)
  }
  //button filter
  return (
    <>
      <Sidebar />
      <Nav />
      <Recommendend />
      <Products />
    </>
  );
};

export default App;
