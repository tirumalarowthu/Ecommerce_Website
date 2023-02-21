import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import Cart from "./Cart"
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import store from './redux/store';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.Fragment>
    <Provider store={store}>
      <ToastContainer/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}></Route>
          <Route path="/cart" element={<Cart/>}> </Route>
        </Routes>
      </BrowserRouter>
     
    </Provider>
  </React.Fragment>
);

