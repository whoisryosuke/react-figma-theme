import React from "react";
import "./styles.css";
import ThemeProvider from "./theme/ThemeProvider";

export default function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
      </div>
    </ThemeProvider>
  );
}
