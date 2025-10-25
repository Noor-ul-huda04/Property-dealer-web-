import { useLocation } from "react-router-dom";

export default function PropertyDetail() {
  const { state } = useLocation();
  if (!state) return <p>No property details found.</p>;

  return (
    <section className="property-detail">
      <img src={state.image} alt={state.title} className="detail-image" />
      <h2>{state.title}</h2>
      <p><strong>Location:</strong> {state.location}</p>
      <p><strong>Price:</strong> {state.price} Rs</p>
      <p>
        This is a beautiful property located in {state.location}, perfect for families and investors.
      </p>
    </section>
  );
}
