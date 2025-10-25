export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-info">
          <h3>Contact Us</h3>
          <p>
            <a 
              href="https://www.google.com/maps/search/?api=1&query=Block+2+Sector+A2+Township+Lahore" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <i className="fas fa-map-marker-alt"></i> Block 2, Sector A2, Township, Lahore
            </a>
          </p>
          <p>
            <a href="tel:+923004617814">
              <i className="fas fa-phone-alt"></i> +92 300 4617814
            </a>
          </p>
          <p>
            <a href="mailto:hanzalaproperty@gmail.com">
              <i className="fas fa-envelope"></i> hanzalaproperty@gmail.com
            </a>
          </p>
        </div>
        <div className="footer-social">
          <h3>Follow Us</h3>
          <div className="social-links">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <img src="facebook.png" alt="Facebook" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <img src="instagram.jpeg" alt="Instagram" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <img src="linkdin.png" alt="LinkedIn" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <img src="x.png" alt="X" />
            </a>
          </div>
        </div>
      </div>
      <p className="footer-bottom">© 2025 Hanzala Property Advisor. All rights reserved.</p>
    </footer>
  );
}
