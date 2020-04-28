import React from "react";
import GlobalStyles from "./components/styles/GlobalStyles";
import Menu from "./components/Menu";
import Header from "./components/Header";
import Main from "./components/Main";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducers from "./reducers";

const store = createStore(reducers);

// teste

const App = () => {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <Menu />
      <Header />
      <Main />
    </Provider>
  );
};

export default App;
