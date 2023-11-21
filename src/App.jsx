import React from "react";
import Loadable from "./components/Loadable/Loadable";
import { lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layout";
import ThemeProvider from "./theme";

const HomePage = Loadable(lazy(() => import("./pages/Home")));
const LanguageSelect = Loadable(lazy(() => import("./pages/LanguageSelect")));

function App() {
  const router = createBrowserRouter([
    {
      path: "/", // Define the root path
      children: [
        {
          path: "Supplier-Form-App", // Parent path
          element: <Layout />,
          children: [
            {
              path: "GetStarted", // Child path
              element: <HomePage />, // or <GetStartedPage />
            },
            {
              path: "LangSelect", // Another child path
              element: <LanguageSelect />, // or <LanguageSelectPage />
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
