import React, { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [message, setMessage] = useState("");

 
  useEffect(() => {
    const fetchData = async () => {
      try {
        
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  
  useEffect(() => {
    const timer = setTimeout(() => {
      setMessage("Check out our special discounts!");
    }, 5000); 

    return () => clearTimeout(timer); 
  }, []);

  
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ padding: "20px" }}>
      
      
      {message && (
        <div
          style={{
            padding: "10px",
            backgroundColor: "#ffef96",
            marginBottom: "20px",
            borderRadius: "5px",
          }}
        >
          {message}
        </div>
      )}

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          padding: "10px",
          width: "100%",
          marginBottom: "20px",
          border: "1px solid #ccc",
          borderRadius: "5px",
        }}
      />

      {/* Display Cards */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            style={{
              border: "1px solid #ddd",
              padding: "10px",
              width: "200px",
              borderRadius: "5px",
              textAlign: "center",
            }}
          >
            <img
              src={product.image}
              alt={product.title}
              style={{ width: "100px", height: "100px", objectFit: "contain" }}
            />
            <h3 style={{ fontSize: "16px", margin: "10px 0" }}>
              {product.title}
            </h3>
            <p style={{ fontWeight: "bold", color: "#333" }}>${product.price}</p>
          </div>
        ))}
      </div>

      
      {filteredProducts.length === 0 && (
        <p style={{ textAlign: "center", marginTop: "20px" }}>
          No products found!
        </p>
      )}
    </div>
  );
};

export default App;
