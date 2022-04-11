import React from 'react'
import styles from './../styles/about.module.css'
import logo from './../images/MAIN-LOGO.png'
import Link from 'next/link'
import beamLogo from './../images/beamLogo.png'

function FooterTwo() {
  return (
    <>
<div className={styles.footer}>
    <div className={styles.oneOfThree}>
            <p>subscibe to Our news letter</p>
            <div className={styles.subscibeInput}>
                <input type="text" />
                <button>subscribe</button>
            </div>

            <ul>
                <li>Terms & Condition</li>
                <li>Privacy Policy</li>
            </ul>
    </div>

    <div className={styles.twoOfThree}>
        <div className={styles.bottleImage}>
            {/* <Image src={require("../images/bottle.png")} alt="image" /> */}
        </div>
        <div className={styles.footerLogo}>
           <Image src={logo} 
            className={styles.footerLogo}
           />
            {/* <ul>
                <li><i class="bi bi-facebook"></i></li>
                <li><i class="bi bi-twitter"></i></li>
                <li><i class="bi bi-instagram"></i></li>
                <li></li>
            </ul> */}
        </div>
       

</div>

<div className={styles.threeOfThree}>
   <ul>
       <li>Help</li>
       <li>FAQs</li>
       <li>Contact Us</li>
   </ul>
</div>
</div>
<div className={styles.bottom}>
    <ul className={styles.flex1}>
        <li>
            <Link href='#'>Terms & Condition</Link>
        </li>
        <li>
            <Link href='#'>Terms & Condition</Link>
        </li>
    </ul>
    <div className={styles.flex2}>
        <p>powered by </p>
        <Image src={beamLogo} className={styles.beamLogo} />
    </div>
</div>
</>
  )
}

export default FooterTwo