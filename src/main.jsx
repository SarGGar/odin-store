import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App.jsx'
import Home from './home/Home.jsx';
import Shop from './shop/Shop.jsx'
import Cart from './cart/Cart.jsx';
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "shop",
        element: <Shop />
      },
      {
        path: "cart",
        element: <Cart />
      }
    ]
  },
  
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)