import React from "react";
import Loadable from "./components/Loadable/Loadable";
import { lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layout";
import FormLayout from "./layout/FormLayout";
import ThemeProvider from "./theme";
import { Provider } from "react-redux";
import store from "./app/store";
import AlertMessage from "./components/AlertMessage/AlertMessage";

const HomePage = Loadable(lazy(() => import("./pages/Home")));
const LanguageSelect = Loadable(lazy(() => import("./pages/LanguageSelect")));
const BasicDetails = Loadable(lazy(() => import("./pages/BasicDetails")));
const ProductDetails = Loadable(lazy(() => import("./pages/ProductDetails")));
const BusinessDetails = Loadable(lazy(() => import("./pages/BusinessDetails")));
const CertificatesDetails = Loadable(
  lazy(() => import("./pages/CertificatesDetails"))
);
const ExportingDetails = Loadable(
  lazy(() => import("./pages/ExportingDetails"))
);
const AskForExport = Loadable(lazy(() => import("./pages/AskForExport")));
const Summary = Loadable(lazy(() => import("./pages/Summary")));
const FinalPage = Loadable(lazy(() => import("./pages/FinalPage")));

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/FinalPage",
          element: <FinalPage />,
        },
        {
          path: "",
          element: <FormLayout />,
          children: [
            {
              path: "/LangSelect",
              element: <LanguageSelect />,
            },
            {
              path: "/BasicDetails",
              element: <BasicDetails />,
            },
            {
              path: "/ProductDetails",
              element: <ProductDetails />,
            },
            {
              path: "/BusinessDetails",
              element: <BusinessDetails />,
            },
            {
              path: "/CertificatesDetails",
              element: <CertificatesDetails />,
            },
            {
              path: "/ExportingDetails",
              element: <ExportingDetails />,
            },
            {
              path: "/Summary",
              element: <Summary />,
            },
            {
              path: "/AskForExport",
              element: <AskForExport />,
            },
          ],
        },
      ],
    },
  ]);
  return (
    <Provider store={store}>
      <ThemeProvider>
        <AlertMessage />
        <RouterProvider router={router} />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
