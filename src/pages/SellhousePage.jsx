import { useState } from "react";

export default function SellHousePage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    propertyTitle: "",
    location: "",
    price: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.phone ||
      !formData.email ||
      !formData.propertyTitle ||
      !formData.location ||
      !formData.price
    ) {
      alert("Please fill out all required fields.");
      return;
    }

    setTimeout(() => {
      setSubmitted(true);
      setFormData({
        name: "",
        phone: "",
        email: "",
        propertyTitle: "",
        location: "",
        price: "",
        message: "",
      });
    }, 800);
  };

  return (
    <section className="sell-house">
      <h2>Sell Your House</h2>
      <p>
        Fill in the form below, and our team will contact you to discuss selling
        your property.
      </p>

      {submitted ? (
        <p className="success-message">
           Your property details have been submitted! We will contact you soon.
        </p>
      ) : (
        <form className="sell-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Your Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="propertyTitle"
            placeholder="Property Title (e.g. 5 Marla House)"
            value={formData.propertyTitle}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="location"
            placeholder="Property Location"
            value={formData.location}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="price"
            placeholder="Expected Price (PKR)"
            value={formData.price}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Additional Details"
            value={formData.message}
            onChange={handleChange}
            rows="4"
          ></textarea>

          <button type="submit">Submit Property</button>
        </form>
      )}
    </section>
  );
}
