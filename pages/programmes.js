import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import styles from './../styles/programmes.module.css'
import award from './../images/award.png'
import Image from 'next/image'
import man from './../images/man-scle.png'
import phone from './../images/phone.png'
import certificate from './../images/image-certificate.png'
import { HiOutlineAcademicCap } from 'react-icons/hi';
import { AiOutlineCalendar } from 'react-icons/ai';
import { IoIosPeople } from 'react-icons/io';


function programmes() {
  return (
    <div>
    <Header />
    
     <div className={styles.firstSection}>
     <div className={styles.heroDiv}>
        <h1 className={styles.heroText}>Explore our <br /><span className={styles.programBlue}>Programmes</span></h1>
        <p className={styles.heroParagraphText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi neque pulvinar erat amet porttitor amet, blandit vulputate. Sed adipiscing dignissim placerat</p>
        </div>

                <div className={styles.girlImage}>
                    <Image src={man} className={styles.heroImage}  alt="lady image" />
                </div>

            </div>
            <div className={styles.explore}>
                <h2 className={styles.exploreHeading}>Explore our programs</h2>
                <p className={styles.exploreText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi neque pulvinar erat amet porttitor amet, blandit vulputate. Sed adipiscing dignissim placerat </p>
            </div>
    <div>
    <div className={styles.certificateImageDiv}>
        <div className={styles.overlap}>
         <div>
             <div>
            <h2 className={styles.overlapHeading}>certificate program in christian leadership</h2>
         </div>
         </div>
        <div>
             <div className={styles.overlapTextDiv}>
           <p className={styles.overlapText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi neque pulvinar erat amet porttitor amet, blandit vulputate. Sed adipiscing dignissim placerat </p>
         </div>
         <div className={styles.overlapList}>
           <p className={styles.listOverlap}><AiOutlineCalendar className={styles.whiteColor}/> 3 Months</p>
           <p className={styles.listOverlap}><HiOutlineAcademicCap className={styles.whiteColor} /> Faculty</p>
           <p className={styles.listOverlap}><IoIosPeople className={styles.whiteColor}/>178 Students</p>
         </div>
         <div>
           <button className={styles.overlapButton}>join programme</button>
         </div>
        </div>
        </div>
        </div>
    </div>
    <div className={styles.obj}>
        <h2 className={styles.objHeading}>
            Our key objectives
        </h2>
     
     
        <div className={styles.sectionHolder}>
            <div className={styles.sections}>
                <div className={styles.imgDiv}>
                </div>
                <h3 className={styles.title}>#Mentor</h3>
                <p className={styles.sectionText}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum dignissimos debitis harum molestias, adipisci rem error porro, odit voluptates maiores eligendi nemo? Sit sint ut eaque quaerat officia eius velit?
                </p>
            </div><div className={styles.sections}>
                <div className={styles.imgDiv}>
                </div>
                <h3 className={styles.title}>#Inspire</h3>
                <p className={styles.sectionText}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum dignissimos debitis harum molestias, adipisci rem error porro, odit voluptates maiores eligendi nemo? Sit sint ut eaque quaerat officia eius velit?
                </p>
            </div>
            <div className={styles.sections}>
                <div className={styles.imgDiv}>
                </div>
                <h3 className={styles.title}>#Raise</h3>
                <p className={styles.sectionText}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum dignissimos debitis harum molestias, adipisci rem error porro, odit voluptates maiores eligendi nemo? Sit sint ut eaque quaerat officia eius velit?
                </p>
   
       </div>
</div>  
    </div>

    <div className={styles.student}>
        <h2 className={styles.studentHeading}>What our students have to say</h2>
        <div className={styles.studentImg}></div>
    <h2 className={styles.studentName}>Jonathan Mikeson</h2>
               
    <p className={styles.studentText}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi neque pulvinar erat </p>
        </div>
    <div className={styles.award}>
    <Image src={award}  alt='award'/>
    </div>
    <Footer />
    </div>
  )
}

export default programmes