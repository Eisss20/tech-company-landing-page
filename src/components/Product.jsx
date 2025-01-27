import styles from "../styles/Product.module.css";

const Product = () => {
  return (
    <div className={styles.container}>
      <div className={styles.layout}>
        {/* Left Section - Browser Window */}
        <div className={styles.content}>
          <div className={`${styles.avatar}`}>
            <img src="./assets/alttical.svg" alt="User avatar" />
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

          <div className={styles.features}>
            <div className={`${styles.feature} ${styles.toolkitFeature}`}>
              <div className={styles.featureIcon}>
                <img src="./assets/toolkit.svg" alt="Toolkit icon" />
              </div>
              <span>All-In-One Toolkit</span>
            </div>
            <div className={`${styles.feature} ${styles.fileSharingFeature}`}>
              <div className={styles.featureIcon}>
                <img src="./assets/flie-sharing.svg" alt="File sharing icon" />
              </div>
              <span>Integrated File Sharing</span>
            </div>
            <div className={`${styles.feature} ${styles.designFeature}`}>
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
