import Navigation from "./components/Navigation";
import { Outlet } from "react-router-dom";

export default function RouteLayout() {
  return (
    <>
      <Navigation />
      <main>
        <Outlet />
      </main>
    </>
  );
}
