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
import LoadingAnimation from "./components/LoadingAnimation/LoadingAnimation";

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
      path: "/Supplier-Form-App",
      element: <Layout />,
      children: [
        {
          path: "/Supplier-Form-App",
          element: <HomePage />,
        },
        {
          path: "/Supplier-Form-App/FinalPage",
          element: <FinalPage />,
        },
        {
          path: "/Supplier-Form-App",
          element: <FormLayout />,
          children: [
            {
              path: "/Supplier-Form-App/LangSelect",
              element: <LanguageSelect />,
            },
            {
              path: "/Supplier-Form-App/BasicDetails",
              element: <BasicDetails />,
            },
            {
              path: "/Supplier-Form-App/ProductDetails",
              element: <ProductDetails />,
            },
            {
              path: "/Supplier-Form-App/BusinessDetails",
              element: <BusinessDetails />,
            },
            {
              path: "/Supplier-Form-App/CertificatesDetails",
              element: <CertificatesDetails />,
            },
            {
              path: "/Supplier-Form-App/ExportingDetails",
              element: <ExportingDetails />,
            },
            {
              path: "/Supplier-Form-App/Summary",
              element: <Summary />,
            },
            {
              path: "/Supplier-Form-App/AskForExport",
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
        <LoadingAnimation />
        <AlertMessage />
        <RouterProvider router={router} />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
