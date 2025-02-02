import styles from "../styles/testimonialcard.module.css";

export default function TestimonialCard() {
  return (
    <div className={styles.container}>
      <div className={styles.layout}>
        <h1 className={styles.h1}>What Our Clients Say</h1>
        <div
          className={styles.testimonials}
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          {/* Card 1 */}
          <div className={styles.card_wrapper}>
            <div className={styles.card}>
              <div className={styles.card_header}>
                <div className={styles.dot}></div>
                <div className={styles.dot}></div>
                <div className={styles.dot}></div>
              </div>
              <div className={styles.card_content}>
                <p className={styles.testimonial_text}>
                  “ I'm a testimonial. Click to edit me and add text that says
                  something nice about you and your services. Let your customers
                  review you and tell their friends how great you are.”
                </p>
                <div className={styles.author}>
                  <div className={styles.author_info}>
                    <div className={styles.author_name}>Deena Levies,</div>
                    <div className={styles.author_name}>Mission Bay</div>
                  </div>
                </div>
              </div>
            </div>
            <img
              src="/assets/card1.svg"
              alt="Plant decoration"
              className={styles.plant_image_1}
            />
          </div>

          {/* Card 2 */}
          <div className={styles.card_wrapper}>
            <div className={styles.card}>
              <div className={styles.card_header}>
                <div className={styles.dot}></div>
                <div className={styles.dot}></div>
                <div className={styles.dot}></div>
              </div>
              <div className={styles.card_content}>
                <p className={styles.testimonial_text}>
                  “I'm a testimonial. Click to edit me and add text that says
                  something nice about you and your services. Let your customers
                  review you and tell their friends how great you are.”
                </p>
                <div className={styles.author}>
                  <div className={styles.author_info}>
                    <div className={styles.author_name}>Tom Smithenson,</div>
                    <div className={styles.author_name}>Parkmerced</div>
                  </div>
                </div>
              </div>
            </div>
            <img
              src="/assets/card2.svg"
              alt="Plant decoration"
              className={styles.plant_image_2}
            />
          </div>

          {/* Card 3 */}
          <div className={styles.card_wrapper}>
            <div className={styles.card}>
              <div className={styles.card_header}>
                <div className={styles.dot}></div>
                <div className={styles.dot}></div>
                <div className={styles.dot}></div>
              </div>
              <div className={styles.card_content}>
                <p className={styles.testimonial_text}>
                  “ I'm a testimonial. Click to edit me and add text that says
                  something nice about you and your services. Let your customers
                  review you and tell their friends how great you are.”
                </p>
                <div className={styles.author}>
                  <div className={styles.author_info}>
                    <div className={styles.author_name}>Tilly Green,</div>
                    <div className={styles.author_name}>Hayes Valley</div>
                  </div>
                </div>
              </div>
            </div>
            <img
              src="/assets/card3.svg"
              alt="Plant decoration"
              className={styles.plant_image_3}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
