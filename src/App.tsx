import React, { useEffect, useState } from "react";
import "./App.css";
import API_PRODUCTS from "./api/products";

function App() {
  const [data, setData] = useState();

  useEffect(() => {
    API_PRODUCTS.getAllProducts()
      .then((res) => setData(res.data))
      .catch((err) => err);
  }, []);
  console.log(data);
  return <div className="App">hello</div>;
}

export default App;
