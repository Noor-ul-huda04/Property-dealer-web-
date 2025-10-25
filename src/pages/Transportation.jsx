import { useState } from "react";

export default function TransportationPage() {
  const service = {
    name: "Maqsood Ahmad",
    role: "Transportation Service",
    description: "Reliable truck service available for goods transport, shifting, and any other purpose.",
    phone: "+92 321 5678901",
    email: "Maqsood.realtor@gmail.com",
    image: "https://img.icons8.com/fluency/512/delivery.png" 
  };

  
  const [hours, setHours] = useState(0);
  const [distance, setDistance] = useState(0);
  const [negotiation, setNegotiation] = useState("");
  const [price, setPrice] = useState(null);

  
  const calculatePrice = () => {
    const baseFare = 2500;
    const hourlyRate = 1000; 
    const distanceRate = 180; 

    const extraDistance = distance > 10 ? distance - 10 : 0;
    const total =
      baseFare + hours * hourlyRate + extraDistance * distanceRate;

    setPrice(total);
  };

  return (
    <section className="transportation">
      <h2>Transportation Service</h2>
      <div className="service-card">
        <img src={service.image} alt="Truck Service" />
        <h3>{service.name}</h3>
        <p className="role">{service.role}</p>
        <p className="desc">{service.description}</p>

  
        <div className="calculator">
          <h4> Get Price Estimate</h4>
          <label>
            Hours Needed:
            <input
              type="number"
              value={hours}
              onChange={(e) => setHours(Number(e.target.value))}
              min="0"
            />
          </label>

          <label>
            Distance (km):
            <input
              type="number"
              value={distance}
              onChange={(e) => setDistance(Number(e.target.value))}
              min="0"
            />
          </label>

          <button onClick={calculatePrice}>Calculate Price</button>

          {price !== null && (
            <p className="price-estimate">
               Estimated Price: <strong>PKR {price.toLocaleString()}</strong>
            </p>
          )}

       
          <div className="negotiate">
            <label>
              Want to negotiate? (Your offer in PKR)
              <input
  type="number"
  value={negotiation}
  min="1"
  onChange={(e) => {
    const value = Number(e.target.value);
    if (value >= 1 || e.target.value === "") {
      setNegotiation(value);
    }
  }}
/>
            </label>
            {negotiation && (
              <p>
                You offered: PKR {Number(negotiation).toLocaleString()}  
                <br />
                We will contact you to finalize!
              </p>
            )}
          </div>
        </div>

        
        <p>
           <a href={`tel:${service.phone}`} className="service-link">{service.phone}</a>
        </p>
        <p>
           <a href={`mailto:${service.email}`} className="service-link">{service.email}</a>
        </p>
      </div>
    </section>
  );
}
