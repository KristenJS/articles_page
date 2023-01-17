import React from 'react';
import HomePage from "./components/HomePage";
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import ArticleItemPage from "./components/ArticleItemPage";
import './App.scss';

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/articles' element={<HomePage/>}/>
            <Route path={'/articles/:id'} element={<ArticleItemPage/>}/>
            <Route path='*' element={<Navigate to='/articles' />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
