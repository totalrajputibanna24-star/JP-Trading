import logo from "./assets/images/logo.png";
import hero from "./assets/images/hero.jpeg";
import welding1 from "./assets/images/welding1.jpeg";
import welding2 from "./assets/images/welding2.jpeg";
import welding3 from "./assets/images/welding3.jpeg";
import welding4 from "./assets/images/welding4.jpeg";

function App() {
const products = [
  {
    name: "ARC Welding Machine",
    image: welding1,
  },
  {
    name: "VELMOC Welding Machine",
    image: welding2,
  },
  {
    name: "MIG Welding Machine",
    image: welding3,
  },
  {
    name: "Industrial Welding Machine",
    image: welding4,
  },
];

  return (
    <div style={{ fontFamily: "Arial, sans-serif", margin: 0 }}>

      {/* Navbar */}
      <nav
        style={{
          background: "#111827",
          color: "#fff",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "18px 60px",
          position: "sticky",
          top: 0,
          zIndex: 1000,
          boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <img
            src={logo}
            alt="Logo"
            style={{
              width: "50px",
              height: "50px",
              borderRadius: "50%",
              objectFit: "cover",
            }}
          />

          <div>
            <h2 style={{ margin: 0 }}>J.P. Trading</h2>
            <small style={{ color: "#cbd5e1" }}>
              Welding & Industrial Solutions
            </small>
          </div>
        </div>

        <div style={{ display: "flex", gap: "30px" }}>
          <a href="#home" style={linkStyle}>Home</a>
          <a href="#products" style={linkStyle}>Products</a>
          <a href="#about" style={linkStyle}>About</a>
          <a href="#contact" style={linkStyle}>Contact</a>
        </div>
      </nav>

      {/* Hero */}
      <section
        id="home"
        style={{
          height: "90vh",
          backgroundImage: `linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url(${hero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          color: "white",
          padding: "20px",
        }}
      >
        <h1
          style={{
            fontSize: "64px",
            marginBottom: "20px",
          }}
        >
          Welcome to J.P. Trading
        </h1>

        <p
          style={{
            fontSize: "22px",
            maxWidth: "800px",
            lineHeight: "1.8",
          }}
        >
          Your Trusted Partner for Welding Machines, Industrial Tools,
          Safety Equipment & Accessories.
        </p>

        <a href="#products">
          <button
            style={{
              marginTop: "35px",
              padding: "15px 35px",
              background: "#ff6600",
              color: "#fff",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              fontSize: "18px",
            }}
          >
            Explore Products
          </button>
        </a>
      </section>

      {/* Products */}
      <section
        id="products"
        style={{
          padding: "80px 50px",
          background: "#fff",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: "40px", marginBottom: "50px" }}>
          Our Products
        </h2>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "30px",
          }}
        >
          {products.map((item) => (
            <div
              key={item.name}
              style={{
                width: "260px",
                background: "#fff",
                padding: "25px",
                borderRadius: "12px",
                boxShadow: "0 5px 20px rgba(0,0,0,0.1)",
                cursor: "pointer",
                transition: "0.3s",
              }}
            >
              <img
                src={item.image}
                alt={item.name}
                style={{
                  width: "100%",
                  height: "180px",
                  objectFit: "cover",
                  borderRadius: "10px",
                }}
              />

              <h3>{item.name}</h3>

              <p style={{ color: "#666" }}>
                High-quality industrial products from trusted brands.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        style={{
          background: "#111827",
          color: "white",
          padding: "80px 50px",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: "40px" }}>
          About J.P. Trading
        </h2>

        <p
          style={{
            maxWidth: "900px",
            margin: "25px auto",
            fontSize: "20px",
            lineHeight: "1.8",
            color: "#d1d5db",
          }}
        >
          J.P. Trading is a trusted supplier of Welding Machines,
          Industrial Equipment, Safety Products and Accessories.
          We provide quality products, competitive prices and reliable
          customer support.
        </p>
      </section>

      {/* Contact */}
      <section
        id="contact"
        style={{
          padding: "80px 50px",
          background: "#f8fafc",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: "40px" }}>
          Contact Us
        </h2>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "30px",
            flexWrap: "wrap",
            marginTop: "40px",
          }}
        >
          <div style={cardStyle}>
            <h3>📞 Phone</h3>
            <p>+91 6375356267</p>
          </div>

          <div style={cardStyle}>
            <h3>📧 Email</h3>
            <p>info@jptrading.com</p>
          </div>

          <div style={cardStyle}>
            <h3>📍 Address</h3>
            <p>
              In front of Pandit Dharam Kanta,<br />
              Mukta Prasad Nagar Road,<br />
              Bikaner, Rajasthan
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{
          background: "#111827",
          color: "white",
          textAlign: "center",
          padding: "30px",
        }}
      >
        <h3>J.P. Trading</h3>

        <p style={{ color: "#d1d5db" }}>
          Authorized Dealer of Welding Machines & Industrial Tools
        </p>

        <p style={{ color: "#9ca3af" }}>
          © 2026 J.P. Trading | All Rights Reserved
        </p>
      </footer>

    </div>
  );
}

const linkStyle = {
  color: "white",
  textDecoration: "none",
  fontWeight: "bold",
};

const cardStyle = {
  background: "white",
  padding: "25px",
  width: "280px",
  borderRadius: "12px",
  boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
};

export default App;