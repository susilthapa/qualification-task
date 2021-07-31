import React from "react";
import { Provider } from "react-redux";

import "./assets/css/App.css";
import store from "./redux/store";
import UserContainer from "./components/UserContainer";

function App() {
  return (
    <Provider store={store}>
      <UserContainer />
    </Provider>
  );
}

export default App;
