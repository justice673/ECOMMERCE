import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Api from './Api';

export default function Home() {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<Api/>}/>
        </Routes>
    </Router>
  )
}
