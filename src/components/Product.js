import styles from "../styles/product.module.css";

const Product = () => {
  return (
    <div className={styles.container}>
      <div className={styles.layout}>
        {/* Left Section - Browser Window */}
        <div className={styles.leftDisplay}>
          <div className={`${styles.circle}`}>
            <img src="./assets/alttical1.svg" alt="User avatar" />
          </div>
          <div className={styles.browser}>
            <img
              src="./assets/margin-top 4rem;.svg"
              alt=""
              className={styles.browserInner}
            />
          </div>
        </div>

        {/* Right Section - Content */}
        <div className={styles.contentSection}>
          <h1 className={styles.title}>Built for Creatives, by Creatives</h1>
          <p className={styles.description}>
            I'm a paragraph. Click here to add your own text and edit me. It's
            easy. Just click "Edit Text" or double click me to add your own
            content and make changes to the font. I'm a great place for you to
            tell a story and let your users know a little more about you.
          </p>

          <div className={styles.featureContainer}>
            <div className={`${styles.featureBox} ${styles.toolkitFeature}`}>
              <div className={styles.featureIcon}>
                <img src="./assets/toolkit.svg" alt="Toolkit icon" />
              </div>
              <span>All-In-One Toolkit</span>
            </div>
            <div
              className={`${styles.featureBox} ${styles.fileSharingFeature}`}
            >
              <div className={styles.featureIcon}>
                <img src="./assets/flie-sharing.svg" alt="File sharing icon" />
              </div>
              <span>Integrated File Sharing</span>
            </div>
            <div className={`${styles.featureBox} ${styles.designFeature}`}>
              <div className={styles.featureIcon}>
                <img src="./assets/design3.svg" alt="Design icon" />
              </div>
              <span>Total Design Freedom</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
