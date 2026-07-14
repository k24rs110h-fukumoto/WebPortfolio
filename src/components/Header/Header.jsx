import { Link } from "react-router";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header-inner">
        <Link to="/" className="logo">
          <img
            src="/images/citeLogo.png"
            alt="ポートフォリオのロゴ"
            className="logo-image"
          />
          <strong>PORTFOLIO</strong>
        </Link>

        <nav className="navigation">
          <Link to="/projects">PROJECTS</Link>
          <Link to="/research">RESEARCH</Link>
          <Link to="/about">ABOUT</Link>
          <Link to="/news">NEWS</Link>
          <Link to="/contact">CONTACT</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;