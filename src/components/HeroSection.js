import styles from '../styles/herosection.module.css';
import { CustomButton } from './CustomElements';
import LogoIcon from './LogoCompany';
import { SiThunderstore } from "react-icons/si";
import { LuExpand } from "react-icons/lu";
import { HiMiniBolt } from "react-icons/hi2";
import { GoCodeOfConduct } from "react-icons/go";


export default function HeroSection() {
    return (
      <> 
        <div className={styles.buttonTop}> 
        <button className={styles.buttonStarted}>Get Started</button>
        </div> 
        <article className={styles.titleContainer}>
        <img
          src="/image/HeroSectionImage.svg"
          alt="Hero Section"
          className={styles.heroImage}
        />
        <section>
        <main className={styles.headArticle}>
        <h1> 
        Communicate.
        </h1>
        <h1>
        Collaborate. Create.
        </h1>
        </main>
        <figcaption className={styles.semiArticle}>
        <p> 
        WeDu provides an effective and  <br className={styles.brDetailHeroMobile}/>  powerful <br className={styles.brDetailHeroDecktop}/> way to manage your projects 
        </p>    
        </figcaption>
        <div className={styles.buttonHero}> 
        <CustomButton
  buttonType="secondary"
  className={styles.btnHero} // เพิ่มคลาสที่กำหนดเอง
>
  Get Started
</CustomButton>
          </div>

        <figure className={styles.listIcon}> 
        <aside className={styles.containerIcon}> 
        <div className={styles.iconBox}>  <HiMiniBolt className={styles.iconSize} /> </div> <p> Speed & <br className={styles.brFordetailIcon}/> Security </p>
        </aside>  
        <aside className={styles.containerIcon}> 
        <div className={styles.iconBox}>  <LuExpand className={styles.iconSize} /> </div> <p> Flexibility & <br className={styles.brFordetailIcon}/>Scalability </p>
        </aside>  
        <aside className={styles.containerIcon}> 
        <div className={styles.iconBox}>  <GoCodeOfConduct className={styles.iconSize} /> </div> <p> Better <br className={styles.brFordetailIcon}/>Collaboration </p>
        </aside>  
        </figure>
        </section>
        </article> 

      </>
    );
  }
  