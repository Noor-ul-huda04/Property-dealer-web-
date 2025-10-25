import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo">Hanzala Property <span>&</span> Transportation</h1>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/properties">Properties</Link></li>
        <li><Link to="/transportation">Transportation</Link></li>
        <li><Link to="/sell-house">Sell House</Link></li>
        <li><Link to="/agents">Agents</Link></li>
        <li><Link to="/contact">Contact</Link></li>

      </ul>
    </nav>
  );
}
