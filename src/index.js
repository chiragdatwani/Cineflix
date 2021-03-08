import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";
import ScrollToTop from "./components/ScrollToTop";
import combineReducers from "./reducers/rootReducer";

const store = createStore(
  combineReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ScrollToTop />
        <App />
        {/* </ScrollToTop> */}
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
