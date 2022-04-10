import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import logo from './../images/MAIN-LOGO.png'
import Link from 'next/link'
import background from '../images/background.png'
import lady from './../images/lady.png'
import course from './../images/course.png'
import community from './../images/community.png'

function Header() {
  return (
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
  )
}

export default Header