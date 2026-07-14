import { Link } from "react-router";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <Link to="/contact" className="footer-contact">
          <span>✉</span>
          CONTACT
        </Link>

        <div className="footer-information">
          <span>© 2026 Haruto Fukumoto</span>
        </div>

        <div className="footer-socials">
          <a
            href="https://github.com/k24rs110h-fukumoto"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          {/* <a
            href="https://x.com/"
            target="_blank"
            rel="noreferrer"
          >
            X
          </a> */}

          {/* <a href="#" aria-label="ブログ">
            Blog
          </a> */}
        </div>
      </div>
    </footer>
  );
}

export default Footer;