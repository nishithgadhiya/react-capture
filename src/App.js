import React from "react";
//GlobalStyle
import GlobalStyle from "./compoents/GlobalStyle";
//import pages
import ABoutUs from "./pages/AboutUs";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <ABoutUs />
    </div>
  );
}

export default App;
