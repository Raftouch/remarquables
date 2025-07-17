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
import GroupedTreesPage from "./pages/GroupedTreesPage.tsx";
import RootLayout from "./RootLayout.tsx";

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      { path: "/", element: <App /> },
      { path: "/details/:id", element: <TreeDetailsPage /> },
      { path: "*", element: <NotFoundPage /> },
      { path: "/on-map", element: <MapPage /> },
      { path: "/grouped", element: <GroupedTreesPage /> },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <TreesProvider>
      <RouterProvider router={router} />
    </TreesProvider>
  </StrictMode>
);
