import { Link } from "react-router-dom";
import TreeList from "../components/TreeList";

export default function LandingPage() {
  return (
    <div>
      <h1>Arbres remarquables de Paris</h1>
      <Link to="/on-map">Regarder sur la carte</Link>
      <TreeList />
    </div>
  );
}
