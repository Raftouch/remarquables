import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <nav className="navigation">
      <span>TreeIcon</span>
      <ul>
        <li>
          <Link to="/grouped">Vue par nom</Link>
        </li>
        <li>
          <Link to="/on-map">Sur la carte</Link>
        </li>
      </ul>
    </nav>
  );
}
