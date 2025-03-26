import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <div className="home-content">
        <h1>Dobrodošli u našu online aplikaciju za vodjenje inventara!</h1>
        <p>Ovdje najlakse mozete voditi racuna o svom inventaru</p>

        <div className="stats-container">
          <div className="stat-box">
            <h2>10,000+</h2>
            <p>Zadovoljnih korisnika</p>
          </div>
          <div className="stat-box">
            <h2>5,000+</h2>
            <p>Proizvoda u aplikaciji</p>
          </div>
          <div className="stat-box">
            <h2>4.8/5</h2>
            <p>Prosječna ocjena</p>
          </div>
        </div>

        <button className="cta-button" onClick={() => navigate("/register")}>
          Registrujte se sada
        </button>
      </div>
    </div>
  );
}

export default HomePage;
