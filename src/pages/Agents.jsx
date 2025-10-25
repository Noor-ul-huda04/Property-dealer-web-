export default function AgentsPage() {
  const agents = [
    { 
      id: 1, 
      name: "Zahoor Ahmad", 
      role: "Property Advisor", 
      phone: "+92 300 4617814", 
      email: "hanzalaproperty@gmail.com" 
    },
    { 
      id: 2, 
      name: "Maqsood Ahmad", 
      role: "Transportation", 
      phone: "+92 321 5678901", 
      email: "Maqsood.realtor@gmail.com" 
    },
  ];

  return (
    <section className="agents">
      <h2>Our Agents</h2>
      <div className="grid">
        {agents.map((a) => (
          <div key={a.id} className="agent-card">
            <h3>{a.name}</h3>
            <p className="role">{a.role}</p>
            <p>
               <a href={`tel:${a.phone}`} className="agent-link">{a.phone}</a>
            </p>
            <p>
               <a href={`mailto:${a.email}`} className="agent-link">{a.email}</a>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
