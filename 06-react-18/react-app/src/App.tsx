import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UseId } from "./components/useId";
import { UseLayoutEffect } from "./components/useLayoutEffect";
import { UseTransition } from "./components/useTransition";
import { UseDeferredValue } from "./components/useDeferredValue";
import { UseSyncExternalStore } from "./components/useSyncExternalStore";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/useId" element={<UseId />} />
        <Route path="/useLayoutEffect" element={<UseLayoutEffect />} />
        <Route path="/useTransition" element={<UseTransition />} />
        <Route path="/useDeferredValue" element={<UseDeferredValue />} />
        <Route
          path="/useSyncExternalStore"
          element={<UseSyncExternalStore />}
        />
      </Routes>
    </Router>
  );
}

export default App;
