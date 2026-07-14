import "./AboutPage.css";

const skills = [
  "Unity",
  "C#",
  "Java",
  "C",
  "React",
  "JavaScript",
  "Swift",
  "SwiftUI",
  "Python",
  "HTML/CSS",
  "PHP",
  "TypeScript",
  "Django",
  "MySQL",
  "Verilog",
  "GitHub",
  
];

const fields = [
  {
    number: "01",
    title: "Game Development",
    description:
      "Unityを使用した2D・3Dゲームの制作に取り組んでいます。プレイヤー操作、UI、ゲーム進行、演出などを実装しています。",
  },
  {
    number: "02",
    title: "Application Development",
    description:
      "SwiftUIやKotlinを使用したスマートフォンアプリ、Reactを使用したWebアプリを制作しています。",
  },
  {
    number: "03",
    title: "Research",
    description:
      "自分の興味や専門の力となることを幅広く研究しています。",
  },
];

function AboutPage() {
  return (
    <main className="about-page">
      <header className="about-heading">
        <p>ABOUT</p>
        <h1>自己紹介</h1>
      </header>

      <section className="about-profile">
        <div className="about-image-wrapper">
          <img
            src="/images/profile.jpg"
            alt="福本陽翔のプロフィール"
            className="about-image"
          />
        </div>

        <div className="about-profile-content">
          <p className="about-position">
            SOFTWARE DEVELOPER / UNIVERSITY STUDENT
          </p>

          <h2>
            福本 陽翔
            <span>Haruto Fukumoto</span>
          </h2>

          <p className="about-description">
            九州産業大学理工学部情報科学科で、ゲーム開発、Webアプリ、
            スマートフォンアプリの制作に取り組んでいます。
            色んな楽しくて新しいアイデアを形にするのを楽しんでいる学生です。
          </p>

          <dl className="about-data">
            <div>
              <dt>UNIVERSITY</dt>
              <dd>九州産業大学</dd>
            </div>

            <div>
              <dt>DEPARTMENT</dt>
              <dd>理工学部 情報科学科</dd>
            </div>

            <div>
              <dt>INTERESTS</dt>
              <dd>ゲーム開発 / Web開発 / アプリ開発</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="about-section">
        <div className="about-section-heading">
          <p>STRENGTH</p>
          <h2>強み</h2>
        </div>

        <div className="about-strength">
          <p>
            私の強みは、興味を持った技術を実際の制作に取り入れ、
            完成するまで改善を続けられる行動力です。
          </p>

          <p>
            また、一度作業を始めてしまうと寝るのも忘れて作業を続けてしまうのは悪いところでも
            ありながら自分の長所でもあると考えています。
          </p>
        </div>
      </section>

      <section className="about-section">
        <div className="about-section-heading">
          <p>SKILLS</p>
          <h2>使用技術</h2>
        </div>

        <div className="about-skills">
          {skills.map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>
      </section>

      <section className="about-fields">
        {fields.map((field) => (
          <article className="about-field" key={field.number}>
            <span>{field.number}</span>
            <h2>{field.title}</h2>
            <p>{field.description}</p>
          </article>
        ))}
      </section>
    </main>
  );
}

export default AboutPage;