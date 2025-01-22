import styles from "../styles/CustomComponent/logoIcon.module.css";
export default function LogoIcon() {
    return (
      <> 
     <figure className={styles.LogoIconBox}> 
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
      </figure> 
      </>
    );
  }
  