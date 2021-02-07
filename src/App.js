import React from "react";
//GlobalStyle
import GlobalStyle from "./compoents/GlobalStyle";
//import pages
import ABoutUs from "./pages/AboutUs";
import Nav from "./compoents/Nav";
import OurWork from "./pages/OurWork";
import ContactUs from "./pages/ContactUs";
//Router
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Switch>
        <Route path="/" exact>
          <ABoutUs />
        </Route>
        <Route path="/work">
          <OurWork />
        </Route>
        <Route path="/contact">
          <ContactUs />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
