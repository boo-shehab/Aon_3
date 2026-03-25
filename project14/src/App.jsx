import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import ProdactedRoute from "./routes/ProdactedRoute"
import AuthRoute from "./routes/authRoute"

function App() {

  const route = createBrowserRouter([
    {
      path: "/",
      element: <ProdactedRoute />,
      children: [
        {
          path: "/",
          element: <Home />
        },
      ]

    },
    {
      path: "/login",
      element: <AuthRoute />,
      children: [
        {
          path: "/login",
          element: <Login />
        }
      ]
    }
  ])

  return (
    <RouterProvider router={route} />
  )
}

export default App
