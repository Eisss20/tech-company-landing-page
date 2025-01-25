import styles from '../styles/navbar.module.css';
import Link from 'next/link';
import { FaUserCircle } from "react-icons/fa";
import LogoIcon from './LogoCompany';
import { RxHamburgerMenu } from "react-icons/rx";

export default function NavBar() {
  return (
    <> 
      <nav className={styles.navSection}>
      <LogoIcon/>
      <RxHamburgerMenu className={styles.RxHamburgerMenu} />
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
