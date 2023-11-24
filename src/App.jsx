import React from "react";
import Loadable from "./components/Loadable/Loadable";
import { lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layout";
import FormLayout from "./layout/FormLayout";
import ThemeProvider from "./theme";

const HomePage = Loadable(lazy(() => import("./pages/Home")));
const LanguageSelect = Loadable(lazy(() => import("./pages/LanguageSelect")));

function App() {
  const router = createBrowserRouter([
    {
      path: "/Supplier-Form-App",
      element: <Layout />,
      children: [
        {
          path: "/Supplier-Form-App",
          element: <HomePage />,
        },
        {
          path: "/Supplier-Form-App",
          element: <FormLayout />,
          children: [
            {
              path: "/Supplier-Form-App/LangSelect",
              element: <LanguageSelect />,
            },
          ],
        },
      ],
    },
  ]);
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
