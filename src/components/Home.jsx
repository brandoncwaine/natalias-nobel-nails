import BookingSystem from "./BookingSystem";
import logo from "../assets/logo.PNG";
import heroImage from "../assets/hero.PNG";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <header className="hero" style={{ backgroundImage: `url(${heroImage})` }}>
        <div className="hero-content">
          <h1>Natalia's Nobel Nails</h1>
          <p className="tagline">Where Beauty Meets Elegance</p>
          <p className="subtitle">Premium Nail Care & Artistry</p>
        </div>
      </header>

      <section className="about-section">
        <div className="container">
          <h2>Welcome to Natalia's Nobel Nails</h2>
          <p>
            Experience luxury nail care in a relaxing and elegant atmosphere.
            Our expert technicians are dedicated to providing you with
            exceptional service and stunning results. From classic manicures to
            intricate nail art, we offer a full range of services to keep your
            nails looking their absolute best.
          </p>
        </div>
      </section>

      <section className="services-section">
        <div className="container">
          <h2>Our Services</h2>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">💅</div>
              <h3>Classic Manicure & Pedicure</h3>
              <p>Traditional nail care with polish of your choice</p>
            </div>
            <div className="service-card">
              <div className="service-icon">✨</div>
              <h3>Gel Manicure & Pedicure</h3>
              <p>Long-lasting gel polish that stays perfect for weeks</p>
            </div>
            <div className="service-card">
              <div className="service-icon">💎</div>
              <h3>Spa Treatments</h3>
              <p>Luxurious spa experience with premium products</p>
            </div>
            <div className="service-card">
              <div className="service-icon">🎨</div>
              <h3>Acrylic & Nail Art</h3>
              <p>Custom designs and extensions by expert artists</p>
            </div>
          </div>
        </div>
      </section>

      <section className="booking-section" id="book">
        <div className="container">
          <BookingSystem />
        </div>
      </section>

      <footer className="footer">
        <p>&copy; 2026 Natalia's Nobel Nails. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
