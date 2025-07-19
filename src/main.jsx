import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import ReactDom from 'react-dom'
import './index.css'
import App from './components/App/App.jsx'



createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />,
  </BrowserRouter>
)
