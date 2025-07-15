import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TreeDetailsPage from "./pages/TreeDetailsPage.tsx";
import NotFoundPage from "./pages/NotFoundPage.tsx";
import { TreesProvider } from "./context/TreesContext.tsx";
import MapPage from "./pages/MapPage.tsx";
import "leaflet/dist/leaflet.css";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/details/:id", element: <TreeDetailsPage /> },
  { path: "*", element: <NotFoundPage /> },
  { path: "/on-map", element: <MapPage /> },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <TreesProvider>
      <RouterProvider router={router} />
    </TreesProvider>
  </StrictMode>
);
