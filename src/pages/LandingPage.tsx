import { Link } from "react-router-dom";
import TreeList from "../components/TreeList";
import { heading } from "../utils/heading";

export default function LandingPage() {
  return (
    <div>
      <h1>{heading}</h1>
      <Link to="/on-map">Regarder sur la carte</Link>
      <TreeList />
    </div>
  );
}
