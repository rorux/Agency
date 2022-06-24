import React from "react";
import { Provider } from "react-redux";
import PageLayout from "./screens/PageLayout";
import { store } from "./store";

function App() {
  return (
    <Provider store={store}>
      <PageLayout />
    </Provider>
  );
}

export default App;
