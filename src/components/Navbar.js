import styles from '../styles/navbar.module.css';
import Link from 'next/link';
import { FaUserCircle } from "react-icons/fa";

export default function NavBar() {
  return (
    <> 
      <nav className={styles.navSection}>
        <section className={styles.containerIcon}> 
      <div className={styles.boxIcon}>
        <div className={styles.circleIcon}> </div>
        <div className={styles.lineIcon}> </div>
      </div>
      </section>
      <article className={styles.articleIcon}> 
      <h2> WeDu </h2> 
      <p className={styles.detailArticleIcon}> Communicate. Collaborate. Create. </p>
      </article>
      <section className={styles.linkBox}> 
      <div className={styles.linkElement}>
          <Link href="#home" className={styles.navLink} >Home</Link>


          <Link href="#about" className={styles.navLink}>Product</Link>

          <Link href="#services" className={styles.navLink}>Pricing Plans</Link>

 
          <Link href="#contact" className={styles.navLink}>Contact</Link>
          <div className={styles.boxIconFaUser}> 
          <FaUserCircle className={styles.FaUserCircle} />
          <Link href="#login" className={styles.navLink}>Log in</Link>
          </div>
        </div>
        <button className={styles.buttonStarted}>Get Started</button>
      </section>

      </nav>
    </>
  );
}
