import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import Board from "./Board";

const App = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Board />} />
        </Routes>
      </Suspense>
      <ReactQueryDevtools initialIsOpen={true} />
    </Router>
  );
};

export default App;
