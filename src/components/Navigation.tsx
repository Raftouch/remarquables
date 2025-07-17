import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <nav className="navigation">
      <span>
        <Link to="/">🌳</Link>
      </span>
      <ul>
        <li>
          <Link to="/grouped">Vue par nom</Link>
        </li>
        <li>
          <Link to="/on-map">Carte</Link>
        </li>
      </ul>
    </nav>
  );
}
