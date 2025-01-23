import styles from "../styles/StartPackage.module.css";
import picture from "../../public/assets/picture.svg";
import Image from "next/image";

function StartPackage() {
  return (
    <>
      <section className={styles.startPackageContainer}>
        <div className={styles.startPackageText}>
          <p>Get Ready to Maximize Your Productivity</p>
          <p>With Our Workflow Solutions</p>
        </div>
        <button className={styles.startButton}>Get Started</button>
        <div className={styles.imageContainer}>
          <Image
            src={picture}
            alt="Background"
            fill // ใช้แทน layout="fill"
            style={{
              objectFit: "cover", // ครอบคลุมพื้นที่
            }}
            quality={100}
          />
        </div>
      </section>
    </>
  );
}

export default StartPackage;
