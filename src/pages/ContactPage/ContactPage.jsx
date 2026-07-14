import contactLinks from "../../data/contactLinks";
import "./ContactPage.css";

function ContactPage() {
  return (
    <main className="contact-page">
      <header className="contact-heading">
        <p>CONTACT</p>
        <h1>つながる</h1>
      </header>

      <section className="contact-introduction">
        <h2>
          制作や研究についての
          <br />
          ご連絡をお待ちしています。
        </h2>

        <p>
          GitHub、メール、今後公開予定のブログや活動サイトを
          こちらにまとめています。
        </p>
      </section>

      <section className="contact-links">
        {contactLinks.map((link) => {
          const content = (
            <>
              <div className="contact-link-heading">
                <p>{link.category}</p>
                <span>{link.href ? "↗" : "—"}</span>
              </div>

              <div className="contact-link-content">
                <h2>{link.title}</h2>
                <p>{link.description}</p>
              </div>

              <span className="contact-link-label">
                {link.linkText}
              </span>
            </>
          );

          if (!link.href) {
            return (
              <article
                className="contact-link contact-link-disabled"
                key={link.id}
              >
                {content}
              </article>
            );
          }

          return (
            <a
              className="contact-link"
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noreferrer" : undefined}
              key={link.id}
            >
              {content}
            </a>
          );
        })}
      </section>
    </main>
  );
}

export default ContactPage;