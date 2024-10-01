import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Create from "./pages/Create";
import Detail from "./pages/Detail";
import Error from "./pages/Error";
import Layout from "./components/Layout";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },
      { path: "create", element: <Create /> },
    ],
  },
  {
    path: "/detail/:id",
    element: <Detail />,
  },
]);
export default router;
