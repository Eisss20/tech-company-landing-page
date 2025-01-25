import styles from '../styles/herosection.module.css';
import { CustomButton } from './CustomElements';
import LogoIcon from './LogoCompany';



export default function HeroSection() {
    return (
      <> 
        <div className={styles.buttonTop}> 
        <button className={styles.buttonStarted}>Get Started</button>
        </div> 
        <article className={styles.titleContainer}>
        <div>
        <h1> 
        Communicate.
        </h1>
        <h1>
        Collaborate. Create.
        </h1>
        </div>
        <div>
        <p> 
        WeDu provides an effective and powerful <br/> way to manage your projects 
        </p>
        </div>
        <CustomButton
  buttonType="secondary"
>
  Get Started
</CustomButton>

        </article> 


      </>
    );
  }
  