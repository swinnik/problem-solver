import React from "react";
import colorPalette from "../assets/data/colorPalette.js";
import OpenAi from "./OpenAi.jsx";
import Footer from "./Footer.jsx";

const App = () => {
  return (
    <div style={styles.app}>
      <OpenAi />
      <Footer />
    </div>
  );
};

export default App;

const styles = {
  app: {
    width: "100vw",
    minHeight: "100vh",
    margin: "0px",
    color: colorPalette.text1,
    backgroundColor: colorPalette.work,
  },
};
