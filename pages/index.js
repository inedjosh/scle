import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import logo from './../images/MAIN-LOGO.png'
import Link from 'next/link'
import background from '../images/background.png'


export default function Home() {
  return (
    <div>
    <div className={styles.container}>
    <div className={styles.hero}>
     <header className={styles.header}>
       <Image
        src={logo}
        className={styles.logo}
        width={150}
        height={10}
        />
     
          <ul className={styles.nav}>
            <li className={styles.navLink}>
<Link href='/about' className={styles.link}>ABOUT US</Link>
            </li>
            <li className={styles.navLink}>
<Link href='/programmes' className={styles.link}>PROGRAMMES</Link>
            </li>
            <li className={styles.navLink}>
<Link href='/faq' className={styles.link}>FAQ</Link>
            </li>
            <li className={styles.navLink}>
<Link href='/contact' className={styles.link}>CONTACT</Link>
            </li>
          </ul>
      
      <nav className={styles.navButton}>
        APPLY NOW
      </nav>
     </header>
    <div className={styles.overlay}></div>
    <div className={styles.heroText}>
      We nuture great <br/>
      ideas for <span className={styles.heroTextBlue}>success</span>
    </div>
    <div className={styles.heroTextSub}>
      <div className={styles.redBar}></div>
      <p className={styles.heroParagraph}>SuccessLorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi neque pulvinar erat </p>
    </div>
     </div>
    
    </div>
     <div className={styles.subHero}>
       <h4 class={styles.subHeroHeadingText}>charles darwin</h4>
       <p className={styles.subHeroParagraph}>
         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi neque pulvinar erat amet porttitor amet, blandit vulputate. Sed adipiscing dignissim placerat 
       </p>
     </div>
     </div>
  )
}
