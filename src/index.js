import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/home/Home';
import Officials from './pages/officials/Officials';



const router = createBrowserRouter([

  {
    path:"/",
    element:<Home/>
  },
  {
    path:"officials",
    element:<Officials/>
  }

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>
);

