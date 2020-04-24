import React from "react";
import GlobalStyles from "./components/styles/GlobalStyles";
import Menu from "./components/Menu";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  return (
    <>
      <GlobalStyles />
      <Menu />
      <Header />
      <Main />
    </>
  );
}

export default App;
