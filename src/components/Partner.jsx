import styles from "../styles/Partner.module.css";

export default function Partner() {
  return (
    <>
      {" "}
      <div className={styles.cruvedBox}>
        <div className={styles.cruvedBoxContent}></div>
      </div>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.heading}>Trusted Among Industry Leaders</h2>
          <p className={styles.paragraph}>
            I'm a paragraph. Click here to add your own text and edit me. It’s
            easy. Just click “Edit Text” or double click me to add your own
            content and make changes to the font.
          </p>
          <div className={styles.logos}>
            <img
              className={styles.img}
              src="./assets/meta definer.avif"
              alt="meta definer"
            />
            <img
              className={styles.img}
              src="./assets/delta tech .avif"
              alt="delta tech"
            />
            <img
              className={styles.img}
              src="./assets/techmed.avif"
              alt="techmed"
            />
            <img
              className={styles.img}
              src="./assets/powercore.avif"
              alt="powercore"
            />
            <img
              className={styles.img}
              src="./assets/strongest-link.avif"
              alt="strongest-link"
            />
            <img
              className={styles.img}
              src="./assets/cog-industry.avif"
              alt="cog-industry"
            />
            <img
              className={styles.img}
              src="./assets/a.t.motion.avif"
              alt="a.t.motion"
            />
            <img className={styles.img} src="./assets/bond.avif" alt="bond" />
          </div>
        </div>
      </div>
    </>
  );
}

