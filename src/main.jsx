import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import router from './comonents/router/Ruoter';

const root = createRoot(document.getElementById('root'));
root.render(
      <React.StrictMode>
        <RouterProvider router={router}>
                 <App />
        </RouterProvider> 
     </React.StrictMode>
);

