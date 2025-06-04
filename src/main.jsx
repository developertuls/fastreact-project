
// src/main.jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css' // <-- Tailwind import

import { RouterProvider } from 'react-router-dom'
import router from './comonents/routes/Rotes.jsx'









createRoot(document.getElementById('root')).render(
  <StrictMode>

<RouterProvider router={router}>
<App/>
</RouterProvider>





  </StrictMode>,
)
