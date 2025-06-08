import React, { useState, useCallback } from "react";

function ProductList() {
  const [products, setProducts] = useState(["Jabłko", "Gruszka", "Banan"]);

  const removeProduct = useCallback((item) => {
    setProducts((prev) => prev.filter((p) => p !== item));
  }, []);

  return (
    <div>
      <h2>Lista produktów</h2>
      <ul>
        {products.map((product) => (
          <li key={product}>
            {product}{" "}
            <button onClick={() => removeProduct(product)}>Usuń</button>
          </li>
        ))}
      </ul>
      {products.length === 0 && <p>Brak produktów.</p>}
    </div>
  );
}

export default ProductList;
