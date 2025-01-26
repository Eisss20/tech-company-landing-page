import styles from '../styles/articlesection.module.css';
export default function ArticleSection() {
    return (
      <>    

        <div className={styles.curvedBox}> 
        <div className={styles.curvedSection}></div>
        </div>
        <article className={styles.containerArticle}> 
        <h1 className={styles.fontheadArticle}> 
        With the Right Software, Great <br/> Things Can Happen
        </h1>
        <p className={styles.fontDialog}> 
        I'm a paragraph. Click here to add your own text and edit me. 
        It's easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. 
        Feel free to drag and drop me anywhere you like on your page. 
        I'm a great place for you to tell a story and let your users know a little more about you.

        </p>







        </article>
      </>
    );
  }
  