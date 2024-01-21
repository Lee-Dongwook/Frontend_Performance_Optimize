import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import BoardPage from "./03-ui/Board";

const App = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<BoardPage />} />
        </Routes>
      </Suspense>
      <ReactQueryDevtools initialIsOpen={true} />
    </Router>
  );
};

export default App;
