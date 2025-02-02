import styles from "../styles/pricing.module.css";
import { FaCheckCircle } from "react-icons/fa";

function Pricing() {
  return (
    <>
      <section className={styles.pricingContainer} data-aos="fade-up" >
        <div>
          <h2 className={styles.pricingTitle}>Explore Our</h2>
          <h2 className={styles.pricingTitle}>Pricing Options</h2>
          <div className={styles.pricingText}>
            <p> I'm a paragraph. Click here to add your own text and edit</p>
            <p>me. It's easy. Just click “Edit Text” or double click me to</p>
            <p>add your own content and make changes to the font. I'm</p>
            <p>a great place for you to tell a story and let your users</p>
            <p>know a little more about you.</p>
          </div>
          <button className={styles.moreButton}>See More</button>
        </div>

        {/* Free Plan */}
        <div className={styles.pricingCards}>
          <div className={styles.pricingCardsTop}>Best Value</div>
          <h1>Premium</h1>
          <p className={styles.priceWrapper}>
            <span className={styles.priceCurrency}>US$</span>
            <span className={styles.priceAmount}>50</span>
          </p>
          <p>Every month</p>
          <p>Use this area to describe one of your memberships.</p>
          <p className={styles.promotionExpired}>Valid for 12 months</p>
          <button className={styles.getStartButton}>Get Started</button>

          {/* Benefit list */}
          <div className={styles.pricingCardBottom}>
            <ul>
              <li>
                <FaCheckCircle className="icon" />
                I'm a benefit
              </li>
              <li>
                <FaCheckCircle className="icon" />
                I'm a benefit
              </li>
              <li>
                <FaCheckCircle className="icon" />
                I'm a benefit
              </li>
              <li>
                <FaCheckCircle className="icon" />
                I'm a benefit
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default Pricing;
