import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Articles from './views/Articles';
import NewArticle from './views/NewArticle';
import SingleArticle from './components/SingleArticle';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './views/Login';
import NotFound from './views/NotFound'
import Signup from './views/Signup';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}></Route>
        <Route path="/articles" element={<Articles />}></Route>
        <Route path="/articles/new" element={<NewArticle />}></Route>
        <Route path='/articles/:slug' element={<SingleArticle />}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
