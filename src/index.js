import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from 'components/App';
import './index.css';
import {BrowserRouter} from "react-router-dom";
import {ChakraProvider} from "@chakra-ui/react";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename='/slimmom'>
      <ChakraProvider>
        <App/>
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
);
