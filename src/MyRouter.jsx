import { createBrowserRouter } from "react-router-dom";

import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Sobre from "./pages/Sobre.jsx";
import DevSis from "./pages/CursosDetalhes.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import Cadastro from "./pages/Cadastro.jsx";
import Cursos from "./pages/Cursos.jsx";
import CursosDetalhes from "./pages/CursosDetalhes.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/sobre",
        element: <Sobre />,
      },
      {
        path: "/cursos",
        element: <Cursos />
      },
      {
        path: "/cadastro",
        element: <Cadastro />,
      },
      {
        path: "/cursos/:id",
        element: <CursosDetalhes />,
      },
      
    ],
  },
]);

export default router;
