import React from 'react'
import Link from 'next/link'
import styles from './../styles/footer.module.css'

function Footer() {
  return (
    <>
    <div className={styles.footer}>
    <div className={styles.flex1}>
        <h3 className={styles.connect}>Connect with us</h3>
      <div className={styles.socialDiv}>
        <div className={styles.socialLink}></div>
        <div className={styles.socialLink}></div>
        <div className={styles.socialLink}></div>
        <div className={styles.socialLink}></div>
      </div>
    <p className={styles.footerText}> Call: +234-1-777-00099</p>
    <p className={styles.footerText}> Send us an email</p>
    <p className={styles.footerText}> Say HI to SCLE on WhatsApp</p>
    <p className={styles.footerText}>Join our network of influencers across africa</p>

    </div>
    <div className={styles.flex2}>
      <ul>
       <li className={styles.footerLink}> <Link href='#'>Mission & Vision</Link></li>
       <li className={styles.footerLink}> <Link href='#'>Corporate Profile</Link></li>
       <li className={styles.footerLink}> <Link href='#'>Partners</Link></li>
       <li className={styles.footerLink}> <Link href='#'>Mentors</Link></li>
       <li className={styles.footerLink}> <Link href='#'>Get involved</Link></li>
      </ul>
      <ul>
       <li className={styles.footerLink}> <Link href='#'>Past Programmes</Link></li>
       <li className={styles.footerLink}> <Link href='#'>Success Story</Link></li>
       <li className={styles.footerLink}> <Link href='#'>FAQs</Link></li>
       <li className={styles.footerLink}> <Link href='#'>Impact</Link></li>
       <li className={styles.footerLink}> <Link href='#'>Alumni</Link></li>
      </ul>
      <ul>
       <li className={styles.footerLink}> <Link href='#'>Media</Link></li>
       <li className={styles.footerLink}> <Link href='#'> Research</Link></li>
       <li className={styles.footerLink}> <Link href='#'>Press kit</Link></li>
       <li className={styles.footerLink}> <Link href='#'>Careers</Link></li>
     
      </ul>
    </div>
    </div>
    <div className={styles.bottom}></div>
    </>
  )
}

export default Footer