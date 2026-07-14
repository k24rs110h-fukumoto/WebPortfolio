import researchList from "../../data/research";
import "./ResearchPage.css";

function ResearchPage() {
    return (
        <main className="research-page">
            <header className="research-heading">
                <p>RESEARCH</p>
                <h1>研究活動</h1>
                <span>
                    大学で取り組んでいる研究テーマと、その開発内容を紹介します。
                </span>
            </header>

            <section className="research-list">
                {researchList.map((research, index) => (
                    <article className="research-item" key={research.id}>
                        <div className="research-number">
                            {String(index + 1).padStart(2, "0")}
                        </div>

                        <div className="research-content">
                            <p className="research-period">{research.period}</p>
                            <h2>{research.title}</h2>
                            <p className="research-english-title">
                                {research.englishTitle}
                            </p>
                            <p className="research-summary">{research.summary}</p>

                            <div className="research-technologies">
                                {research.technologies.map((technology) => (
                                    <span key={technology}>{technology}</span>
                                ))}
                            </div>
                        </div>

                        <div className="research-image-wrapper">
                            <a
                                href={research.pdf}
                                target="_blank"
                                rel="noreferrer"
                                className="research-image-link"
                                aria-label={`${research.title}の論文PDFを開く`}
                            >
                                <div className="research-image-wrapper">
                                    <img
                                        src={research.image}
                                        alt={research.title}
                                        className="research-image"
                                    />

                                    <span className="research-pdf-label">
                                        VIEW PDF
                                    </span>
                                </div>
                            </a>
                        </div>
                    </article>
                ))}
            </section>
        </main>
    );
}

export default ResearchPage;