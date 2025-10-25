import { Link } from "react-router-dom";
export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-overlay">
        <h2>Find Your Dream Home</h2>
        <p>Explore the best properties with trusted agents</p>
         <Link to="/properties">
      <button>Browse Properties</button>
    </Link>
      </div>
    </section>
  );
}
