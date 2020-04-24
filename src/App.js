import React, { useState } from "react";
import GlobalStyles from "./components/styles/GlobalStyles";
import Menu from "./components/Menu";
import Header from "./components/Header";
import Main from "./components/Main";

const App = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <GlobalStyles />
      <Menu showMenu={showMenu} toggleMenu={setShowMenu} />
      <Header toggleMenu={setShowMenu} />
      <Main />
    </>
  );
};

export default App;
