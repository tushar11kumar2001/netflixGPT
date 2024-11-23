import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "./redux/appStore.js";
import FirebaseContextProvider from "./utils/firebaseContext.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
      
    <Provider store={appStore}>
      <BrowserRouter>
        <FirebaseContextProvider>
          <App />
        </FirebaseContextProvider>
      </BrowserRouter>
    </Provider>

);
