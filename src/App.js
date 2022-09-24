import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faAt } from "@fortawesome/free-solid-svg-icons";

import { Header, Routes, Footer } from "./View";
import "./App.scss";

library.add(fab, faAt);

const App = (_) => {
  return (
    <div className="App">
      <Header />

      <Routes />

      <Footer />
    </div>
  );
};

export default App;
