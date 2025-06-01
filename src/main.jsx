
// src/main.jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css' // <-- Tailwind import
import router from './comonents/Rotes.jsx'
import { RouterProvider } from 'react-router-dom'









createRoot(document.getElementById('root')).render(
  <StrictMode>

<RouterProvider router={router}>
<App/>
</RouterProvider>





  </StrictMode>,
)
