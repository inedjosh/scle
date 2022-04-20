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
import { BsSun, BsShieldLock } from 'react-icons/bs';
import { WiTsunami } from 'react-icons/wi';
import { GiAlarmClock } from 'react-icons/gi';


function programmes() {
  return (
    <div>
    <Header />
    
     <div className={styles.firstSection}>
     <div className={styles.heroDiv}>
        <h1 className={styles.heroText}>Explore our <br /><span className={styles.programBlue}>Programmes</span></h1>
        <p className={styles.heroParagraphText}>
            To spread prosperity and peace for everyone every where in the world

        </p>
        </div>

                <div className={styles.girlImage}>
                    <Image src={man} className={styles.heroImage}  alt="lady image" />
                </div>

            </div>
            <div className={styles.explore}>
                <h2 className={styles.exploreHeading}>Explore our programs</h2>
                <p className={styles.exploreText}>Our mission is to build a prosperous and peaceful environment for everyone by equipping global leaders with ethical and technical capabilities through an innovative and value-based leadership and management education.  </p>
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
           <p className={styles.overlapText}>Our mission is to build a prosperous and peaceful environment for everyone by equipping global leaders with ethical and technical capabilities through an innovative and value-based leadership and management education. We leverage on the wisdom revealed in the Word of God to groom effective leaders to become beacons of light in industry and governance around the world.</p>
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
           
          <div className={styles.sectionHolder}>
            <div className={styles.sections}>
               <BsSun className={styles.icon} />
                <h3 className={styles.title}>#Effectiveness 
</h3>
                <p className={styles.sectionText}>
                   Leadership is a core focus of the scriptures. The major messages in the bible are about the failures of leadership, its huge consequences and principles that define effective and good leadership 

                </p>
            </div><div className={styles.sections}>
                <GiAlarmClock  className={styles.icon} />
                <h3 className={styles.title}>#Purposefulness</h3>
                <p className={styles.sectionText}>
                  The bible is clear on the purpose of leadership, to wit, to promote righteousness and justice. And the results of righteous and just leadership are prosperity and peace

                </p>
            </div>
            <div className={styles.sections}>
                <BsShieldLock className={styles.icon}/>
                <h3 className={styles.title}> #proven-leadership  </h3>
                <p className={styles.sectionText}>
                    SCLE provides teachings on proven leadership principles from the pages of the Holy Scripture and use same to equip individuals to excel beyond their expectation

                </p>
   
       </div>
            <div className={styles.sections}>
                <WiTsunami className={styles.icon}/>
                <h3 className={styles.title}>#Value-driven </h3>
                <p className={styles.sectionText}>
At SCLE we reinvest commitment on the importance of value in leadership and management education. We are transforming leadership and management education by focusing on both ethical and technical capabilities of effective leadership

                </p>
   
       </div>
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