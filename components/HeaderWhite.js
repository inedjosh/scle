import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import logo from './../images/logo-white.png'
import Link from 'next/link'
import background from '../images/background.png'
import lady from './../images/lady.png'
import course from './../images/course.png'
import community from './../images/community.png'

function Header() {

  

  return (
     <header className={styles.whiteBck }>
  <Link href='/' passHref>
  <a className={styles.logoDiv}>
       <Image
        src={logo}
        className={styles.logo}
        alt='image'
        />
        </a>
        </Link>
          <ul className={styles.navBlue}>
            <li className={styles.navLinkBlue}>
<Link href='./../about' className={styles.linkBlue}>ABOUT US</Link>
            </li>
            <li className={styles.navLinkBlue}>
<Link href='./../programmes' className={styles.linkBlue}>PROGRAMMES</Link>
            </li>
            {/* <li className={styles.navLink}>
<Link href='/faq' className={styles.link}>FAQ</Link>
            </li> */}
            <li className={styles.navLinkBlue}>
<Link href='./../faculty' className={styles.linkBlue}>FACULTIES</Link>
            </li>
          </ul>
     
      
     </header>
  )
}

export default Header


