import React from 'react'
import styles from '../styles/Home.module.css'

function FooterTwo() {
  return (
   
<div className={styles.footer}>
    <div className={styles.oneOfThree}>
            <p>subscibe to Our news letter</p>
            <div className={styles.subscibeInput}>
                <input type="text"><button>subscribe</button>
            </div>

            <ul>
                <li>Terms & Condition</li>
                <li>Privacy Policy</li>
            </ul>
    </div>

    <div className={styles.twoOfThree}>
        <div className={styles.bottleImage}>
            <img src="../IMAGES/bottle.png" alt="">
        </div>
        <div className={styles.bottleText}>
            Lorem ipsum dolor sit amet consectetur amet consectetur
       
            <ul>
                <li><i class="bi bi-facebook"></i></li>
                <li><i class="bi bi-twitter"></i></li>
                <li><i class="bi bi-instagram"></i></li>
                <li></li>
            </ul>
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
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>  <h1>adipisicing elit</h1>
</div>

  )
}

export default FooterTwo