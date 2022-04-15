import React,{useState} from 'react';
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import logo from './../images/logo-white.png'
import Link from 'next/link'
import background from '../images/background.png'
import lady from './../images/lady.png'
import course from './../images/course.png'
import community from './../images/community.png'
import { motion } from "framer-motion";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

function Header() {

   const [mobileNav, setMobileNav] = useState(false);

  const handleMobileNav = () => {
    setMobileNav(!mobileNav);
  };

  const MobileShown = (
    <motion.div
      className={styles.mobileShown}
      animate={mobileNav ? {   y: 0 }: {y:-1000}}
      initial={{y: -1000 }}
      transition={{
        delay: 0.1,
        duration: 0.2,
      }}
    >
    <div className={styles.topNavDiv}>
      <h2>SCLE</h2>
    </div>
     <div className={styles.topNavLinks}>
        <Link href='/' className={styles.mobileLink} >
        <a className={styles.mobileLink}> HOME</a>
      </Link>
        <Link href='/about' className={styles.mobileLink} >
        <a className={styles.mobileLink}> ABOUT</a>
      </Link>
      <Link href='/programmes' className={styles.mobileLink}  >
      <a className={styles.mobileLink}>PROGRAMMES</a>
      </Link>
      <Link href='/faculty' className={styles.mobileLink}  >
   <a className={styles.mobileLink}>  FACULTIES</a>
      </Link>
     </div>
    </motion.div>
  );

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
      <nav className={styles.menuButton} onClick={handleMobileNav}>
            
            {!mobileNav ? (
           <AiOutlineMenu className={styles.menuWhite}/>
          ) : (
            <AiOutlineClose className={styles.menuWhite}/>
          )}
      </nav>
      {
        mobileNav && MobileShown
      }
      
     </header>
  )
}

export default Header


