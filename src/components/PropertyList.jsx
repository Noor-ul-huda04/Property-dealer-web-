import { useContext } from "react";
import { PropertyContext } from "../context/PropertyContext";
import PropertyCard from "./PropertyCard";

export default function PropertyList() {
  const { properties } = useContext(PropertyContext);

  return (
    <section className="property-list">
      <h2>Featured Properties</h2>
      <div className="grid">
        {properties.map((p) => (
          <PropertyCard
            key={p.id}
            image={p.image}
            title={p.title}
            price={p.price}
            location={p.location}
          />
        ))}
      </div>
    </section>
  );
}
