import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import styles from './../styles/programmes.module.css'
import award from './../images/award.png'
import Image from 'next/image'
import man from './../images/man-scle.png'
import phone from './../images/phone.png'
import certificate from './../images/image-certificate.png'


function programmes() {
  return (
    <div>
    <Header />
    
     <div className={styles.firstSection}>
     <div>
        <h1 className={styles.heroText}>Explore our <br /><span className={styles.programBlue}>Programmes</span></h1>
        <p className={styles.heroParagraphText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi neque pulvinar erat amet porttitor amet, blandit vulputate. Sed adipiscing dignissim placerat</p>
        </div>

                <div className={styles.girlImage}>
                    <Image src={man} className={styles.heroImage} alt="lady image" />
                </div>

            </div>
            <div className={styles.explore}>
                <h2 className={styles.exploreHeading}>Explore our programs</h2>
                <p className={styles.exploreText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi neque pulvinar erat amet porttitor amet, blandit vulputate. Sed adipiscing dignissim placerat </p>
            </div>
    <div>
    <div className={styles.certificateImageDiv}>
        <Image src={certificate}  className={styles.certificateImage} alt="certicate" />
        </div>
    </div>
    <div className={styles.register}>
        <div className={styles.phoneDiv}>
            <h2 className={styles.registerHeading}>how to register for scle programs</h2>
            <p className={styles.registerText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi neque pulvinar erat 
            </p>
            <Image src={phone} className={styles.registerPhoneImage} width={300} height={550} alt="image3" />
        </div>
        <div className={styles.registerListDiv}>
        <div className={styles.registerList}>
            <div className={styles.circle1}></div>
            <div className={styles.circleText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi neque pulvinar erat 
            </div>
        </div>
        <div className={styles.registerList}>
            <div className={styles.circle2}></div>
            <div className={styles.circleText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi neque pulvinar erat 
            </div>
        </div>
        <div className={styles.registerList}>
            <div className={styles.circle3}></div>
            <div className={styles.circleText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi neque pulvinar erat 
            </div>
        </div>

        </div>
    </div>
    <div className={styles.student}>
        <h2 className={styles.studentHeading}>What our students have to say</h2>
        <div className={styles.studentImg}></div>
    <h2 className={styles.studentName}>Jonathan Mikeson</h2>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi neque pulvinar erat 
    <p className={styles.studentText}></p>
        </div>
    <div className={styles.award}>
    <Image src={award}  alt='award'/>
    </div>
    <Footer />
    </div>
  )
}

export default programmes