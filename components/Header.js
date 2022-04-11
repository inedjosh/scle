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
  <Link href='./../index'>
       <Image
        src={logo}
        // className={styles.logo}
        // width={100}
        // height={10}
        alt='image'
        />
        </Link>
     
          <ul className={styles.nav}>
            <li className={styles.navLink}>
<Link href='./../about' className={styles.link}>ABOUT US</Link>
            </li>
            <li className={styles.navLink}>
<Link href='./../programmes' className={styles.link}>PROGRAMMES</Link>
            </li>
            {/* <li className={styles.navLink}>
<Link href='/faq' className={styles.link}>FAQ</Link>
            </li> */}
            <li className={styles.navLink}>
<Link href='./../faculty' className={styles.link}>FACULTIES</Link>
            </li>
          </ul>
      
      <nav className={styles.navButton}>
        APPLY NOW
      </nav>
     </header>
  )
}

export default Header