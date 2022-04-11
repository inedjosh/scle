import React from 'react'
import Header from '../components/Header'
import lady  from './../images/lady-scle.png'
import Footer from './../components/Footer'
import styles from './../styles/faculty.module.css'
import Image from 'next/image'
import award from './../images/award.png'

function contact() {
  return (
    
    <div>
        <Header />
         <div className={styles.firstSection}>
        <h1 className={styles.heroText}>Faculties at scle</h1>
                <div className={styles.girlImage}>
                    <Image src={lady} alt="lady" className={styles.heroImage} />
                </div>
            </div>
    <div className={styles.faculties}>
            <h2 className={styles.facultiesHeading}>Our Faculties</h2>
  
    <div className={styles.textHolderDiv}>
<div className={styles.textSectionStyle1}>
    <div className={styles.textHolder}>
                <h3 className={styles.headingfaculties1}>CAPTAINS OF INDUSTRY (CHRISTIAN LED ORGANIZATIONS)</h3>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laudantium, veniam? Optio soluta minima excepturi facere pariatur nisi, molestiae nihil impedit commodi,
                vitae eveniet id sint perspiciatis necessitatibus! Autem, mollitia vitae.
            </p>

    </div>
            <div className={styles.greyDiv}>
            </div>
</div>

    <div className={styles.textSectionStyle2}>
            <div className={styles.greyDiv}>
            </div>

        <div className={styles.textHolder}>
                <h3 className={styles.headingfaculties2}>CAPTAINS OF INDUSTRY (CHRISTIAN LED ORGANIZATIONS)</h3>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Laudantium, veniam? Optio soluta minima excepturi facere pariatur nisi, molestiae nihil impedit commodi,
            vitae eveniet id sint perspiciatis necessitatibus! Autem, mollitia vitae.
        </p>
    
        </div>
    </div>
    

    <div className={styles.textSectionStyle1}>
        <div className={styles.textHolder}>
                    <h3 className={styles.headingfaculties1}>CAPTAINS OF INDUSTRY (CHRISTIAN LED ORGANIZATIONS)</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Laudantium, veniam? Optio soluta minima excepturi facere pariatur nisi, molestiae nihil impedit commodi,
                    vitae eveniet id sint perspiciatis necessitatibus! Autem, mollitia vitae.
                </p>
    
        </div>
                <div className={styles.greyDiv}>
    
                </div>
    </div>
     <div className={styles.textSectionStyle2}>
            <div className={styles.greyDiv}>
            </div>

        <div className={styles.textHolder}>
                <h3 className={styles.headingfaculties2}>CAPTAINS OF INDUSTRY (CHRISTIAN LED ORGANIZATIONS)</h3>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Laudantium, veniam? Optio soluta minima excepturi facere pariatur nisi, molestiae nihil impedit commodi,
            vitae eveniet id sint perspiciatis necessitatibus! Autem, mollitia vitae.
        </p>
    
        </div>
    </div>
 </div>
 </div>
    <div className={styles.award}>
    <Image src={award} alt='image' />
    </div>
   <div className={styles.blueBck}>
      <Footer />
   </div>
    </div>
    
    
  )
}

export default contact