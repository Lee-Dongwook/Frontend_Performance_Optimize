import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ShoppingCartPage from "./ShoppingCart";
import ShoppingCartMemoizationPage from "./ShoppingCartMemoization";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ShoppingCartPage />}></Route>
        <Route
          path="/memoization"
          element={<ShoppingCartMemoizationPage />}
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
