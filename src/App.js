import React from "react";
//GlobalStyle
import GlobalStyle from "./compoents/GlobalStyle";
//import pages
import ABoutUs from "./pages/AboutUs";
import Nav from "./compoents/Nav";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <ABoutUs />
    </div>
  );
}

export default App;
