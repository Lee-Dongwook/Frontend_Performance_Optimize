import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loadable from "react-loadable";

const Home = Loadable({
  loader: () => import("./components/Home"),
  loading: () => <div>Loading Home...</div>,
});

const Header = Loadable({
  loader: () => import("./components/Header"),
  loading: () => <div>Loading Header...</div>,
});

const Footer = Loadable({
  loader: () => import("./components/Footer"),
  loading: () => <div>Loading Footer...</div>,
});

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
