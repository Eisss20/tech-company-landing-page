import styles from "../styles/partnersection.module.css";

export default function Partner() {
  return (
    <>
      {" "}
      <div className={styles.cruvedBox}>
        <div className={styles.cruvedBoxContent}></div>
      </div>
      <div className={styles.container}>
        <div className={styles.content} data-aos="fade-up">
          <h2 className={styles.heading}>Trusted Among Industry Leaders</h2>
          <p className={styles.paragraph}>
            I'm a paragraph. Click here to add your own text and edit me. It’s
            easy. Just click “Edit Text” or double click me to add your own
            content and make changes to the font.
          </p>
          <div className={styles.logos} data-aos="fade-up">
            <img
              className={styles.img}
              src="./assets/meta definer.svg"
              alt="meta definer"
            />
            <img
              className={styles.img}
              src="./assets/delta tech.svg"
              alt="delta tech"
            />
            <img
              className={styles.img}
              src="./assets/techmed.svg"
              alt="techmed"
            />
            <img
              className={styles.img}
              src="./assets/powercore.svg"
              alt="powercore"
            />
            <img
              className={styles.img}
              src="./assets/strongest-link.svg"
              alt="strongest-link"
            />
            <img
              className={styles.img}
              src="./assets/cog-industry.svg"
              alt="cog-industry"
            />
            <img
              className={styles.img}
              src="./assets/a.t.motion.svg"
              alt="a.t.motion"
            />
            <img className={styles.img} src="./assets/bond.svg" alt="bond" />
          </div>
        </div>
      </div>
    </>
  );
}

