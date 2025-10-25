import { useNavigate } from "react-router-dom";
import "../App.css";

export default function PropertyCard({ id, image, title, price, location }) {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate(`/property/${id}`, {
      state: { image, title, price, location }, 
    });
  };

  return (
    <div className="property-card">
      <img src={image} alt={title} />
      <div className="property-details">
        <h3>{title}</h3>
        <p>{location}</p>
        <p className="price">{price} Rs</p>
        <button onClick={handleViewDetails}>View Details</button>
      </div>
    </div>
  );
}
