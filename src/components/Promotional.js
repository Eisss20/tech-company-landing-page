import styles from "../styles/promotional.module.css";
import picture from "../../public/assets/picture.svg";
import Image from "next/image";

function Promotional() {
  return (
    <>
      <div className={styles.cruvedPromotionalBox}>
        <div className={styles.cruvedPromotionalSection}></div>
      </div>
      <section className={styles.PromotionalContainer}>
        <div className={styles.PromotionalText}>
          <p>Get Ready to Maximize Your Productivity</p>
          <p>With Our Workflow Solutions</p>
        </div>
        <button className={styles.PromotionalButton}>Get Started</button>
        <Image
          src={picture}
          alt="Background"
          style={{
            objectFit: "cover",
          }}
          quality={100}
          className={styles.PromotionalImage}
        />
        <div className={styles.stripe}></div>
      </section>
    </>
  );
}

export default Promotional;
