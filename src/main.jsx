import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import App from './App.jsx'
import Home from './pages/Home.jsx'
import Jobs from './pages/Jobs.jsx'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path='/' element={<Home />} />
          <Route path='trabalhos' element={<Jobs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
