import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import ImageProvider from "./components/Context/imageProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ChakraProvider>
    <React.StrictMode>
      <BrowserRouter>
        <ImageProvider>
          <App />
        </ImageProvider>
      </BrowserRouter>
    </React.StrictMode>
  </ChakraProvider>
);
