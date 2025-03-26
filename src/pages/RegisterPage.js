import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function RegisterPage() {
  const [fullName, setFullName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(""); // Za prikaz greške
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    // Provjera da li su lozinke iste
    if (password !== confirmPassword) {
      setError("Lozinke se ne podudaraju!");
      return;
    }

    // Simulacija registracije
    console.log("Registracija uspješna:", { fullName, birthDate, email });

    navigate("/login");
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Registracija</h2>
        <form onSubmit={handleRegister}>
          <input
            type="text"
            placeholder="Ime i prezime"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
          <input
            type="date"
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Lozinka"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Potvrdite lozinku"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />

          {error && <p className="error-message">{error}</p>}

          <button type="submit">Registruj se</button>
        </form>
        <p>
          Već imate nalog? <Link to="/login">Prijavite se</Link>
        </p>
      </div>
    </div>
  );
}

export default RegisterPage;
