import React from "react";
import colorPalette from "../assets/data/colorPalette.js";

const Footer = () => {
  const handleNameClick = () => {
    const newLink = "https://linkedin.com/in/seanwinnik";
    window.open(newLink, "_blank");
  };

  const handleOenAPIClick = () => {
    const newLink = "https://platform.openai.com/";
    window.open(newLink, "_blank");
  };

  return (
    <div style={styles.footer}>
      <div style={styles.text} onClick={handleNameClick}>
        <div>Created by:</div>
        <div>Sean Winnik</div>
      </div>
      <div style={styles.text} onClick={handleOenAPIClick}>
        {" "}
        <div>Made with:</div>
        <div>OpenAI API /completion</div>
      </div>
    </div>
  );
};

export default Footer;

const styles = {
  footer: {
    position: "fixed",
    zIndex: 99,
    bottom: 0,
    left: 0,
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    alignItems: "center",
    height: "100px",
    backgroundColor: colorPalette.work,
    borderTop: `1px solid #279EFF`,
    color: "#279EFF",
    color: "#fff",
    fontSize: "24px",
    fontWeight: "lighter",
  },
  text: {
    cursor: "pointer",
    color: "blue",
    fontSize: ".8em",
    flexDirection: "column",
    display: "flex",
    alignItems: "center",
    // border: "1px solid blue",
  },
};
