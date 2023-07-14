import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Content from './Content.tsx'
import Error from './Error.tsx'
import Home from '../components/Home.tsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/app',
        element: <Content />,
      },
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
