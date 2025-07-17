import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navigation">
      <span>
        <Link to="/">🌳</Link>
      </span>
      <ul className={`navigation__nav ${isOpen ? "active" : ""}`}>
        <li>
          <Link to="/grouped" onClick={() => setIsOpen(false)}>
            Vue par nom
          </Link>
        </li>
        <li>
          <Link to="/on-map" onClick={() => setIsOpen(false)}>
            Carte
          </Link>
        </li>
      </ul>

      <div
        className={`burger-menu ${isOpen ? "active" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Menu burger"
      >
        <span></span>
      </div>
    </nav>
  );
}
