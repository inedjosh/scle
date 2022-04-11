import React from 'react'
import styles from './../styles/about.module.css'
import logo from './../images/MAIN-LOGO.png'
import Link from 'next/link'
import beamLogo from './../images/beamLogo.png'
import Image from 'next/image'

function FooterTwo() {
  return (
    <div className={styles.footerDiv}>
<div className={styles.footer}>
    <div className={styles.oneOfThree}>
            <p className={styles.suscribeText}>subscibe to our news letter</p>
            <div className={styles.subscribeInput}>
                <input type="text" className={styles.footerTwoInput} />
                <button className={styles.suscribeButton}>subscribe</button>
            </div>
    </div>

    <div className={styles.twoOfThree}>
        <div className={styles.bottleImage}>
            {/* <Image src={require("../images/bottle.png")} alt="image" /> */}
        </div>
        <div className={styles.footerLogo}>
           <Image src={logo} 
            className={styles.footerLogo}
            alt='image'
           />
             <div className={styles.socialDiv}>
        <div className={styles.socialLink}></div>
        <div className={styles.socialLink}></div>
        <div className={styles.socialLink}></div>
        <div className={styles.socialLink}></div>
      </div>
        </div>
       

</div>

<div className={styles.threeOfThree}>
   <ul className={styles.FooterLink}>
       <li className={styles.FooterWeblink}>Help</li>
       <li className={styles.FooterWeblink}>FAQs</li>
       <li className={styles.FooterWeblink}>Contact Us</li>
   </ul>
</div>
</div>
<div className={styles.bottom}>
    <ul className={styles.flex1}>
        <li className={styles.footerBottomLink}>
            <Link href='#'>Terms & Condition</Link>
        </li>
        <li className={styles.footerBottomLink}>
            <Link href='#'>Terms & Condition</Link>
        </li>
    </ul>
    <div className={styles.flex2}>
        <p className={styles.poweredBy}>powered by </p>
        <Image src={beamLogo} className={styles.beamLogo} alt='image'/>
    </div>
</div>
</div>
  )
}

export default FooterTwo