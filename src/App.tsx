import React from "react";
import Menu from "./components/Menu";
import Side from "./components/Side";
import Toolbar from "./components/Toolbar";
import Firm from "./components/Firm";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="main-wrap">
      <div className="content-wrap">
        <Menu />
        <Side />
        <div className="content">
          <Toolbar />
          <main>
            <Firm />
          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
