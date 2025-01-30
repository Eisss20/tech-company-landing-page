import LogoIcon from "./LogoCompany";
import styles from "../styles/footer.module.css";

function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <LogoIcon />
        <div className={styles.footerContent}>
          <div className={styles.footerContact}>
            <ul>
              <li>
                <strong>Contact</strong>
              </li>
              <li>
                <p>500 Terry Francine Street</p>
                <p>San Francisco, CA 94158</p>
              </li>
              <li>
                <p>Sales:</p>
                <p>info@mysite.com</p>
              </li>
              <li>
                <p>General Inquiries:</p>
                <p>123-456-7890</p>
              </li>
              <li>
                <p>Customer Care:</p>
                <p>info@mysite.com</p>
              </li>
            </ul>
          </div>
          <div className={styles.footerQuickLinks}>
            <ul>
              <li>
                <strong>Quick Links</strong>
              </li>
              <li>
                <a href="#terms">Terms & Conditions</a>
              </li>
              <li>
                <a href="#privacy">Privacy Policy</a>
              </li>
            </ul>
          </div>
          <div className={styles.footerFollow}>
            <ul>
              <li>
                <strong>Follow</strong>
              </li>
              <li>Sign up to get the latest news on our product.</li>
              <label htmlFor="email">Email *</label>
              <input id="email" type="email" className={styles.emailBox} />
              <li className={styles.checkboxWrapper}>
                <input
                  type="checkbox"
                  id="subscribe"
                  className={styles.customCheckbox}
                />
                <label htmlFor="subscribe">
                  Yes, subscribe me to your newsletter.
                </label>
              </li>
              <li>
                <button className={styles.subscribeButton}>Subscribe</button>
              </li>
            </ul>
          </div>
          <div className={styles.footerSocial}>
            <ul>
              <li>
                <a href="https://www.linkedin.com" target="_blank">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com" target="_blank">
                  YouTube
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com" target="_blank">
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
