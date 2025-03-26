import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { ProductsPage, EditProductPage } from "./pages/ProductsPage";
import HomePage from "./pages/HomePage";
import "./styles/global.css";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  return (
    <Router>
      <nav className="navbar">
        <div className="logo">LOGO</div>
        <div className="nav-links">
          <Link to="/">Home</Link>
          {isAuthenticated ? (
            <>
              <Link to="/products">Moji Produkti</Link>
              <button onClick={() => setIsAuthenticated(false)}>
                Sign Out
              </button>
            </>
          ) : (
            <>
              <Link to="/login">Login</Link>
              <Link to="/register">Sign Up</Link>
            </>
          )}
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/edit/:id" element={<EditProductPage />} />
      </Routes>
    </Router>
  );
}

export default App;
