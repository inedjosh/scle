import Image from 'next/image'
import React from 'react'
import FooterTwo from '../components/Footer'
import Header from '../components/HeaderWhite'
import styles from './../styles/about.module.css'
import { BsSun, BsShieldLock } from 'react-icons/bs';
import { WiTsunami } from 'react-icons/wi';
import { GiAlarmClock } from 'react-icons/gi';



function about() {
  return (
    <div className={styles.about}>
    <Header  />
    
    <div className={styles.videoHolderContainer}>
   
        
        <div className={styles.videoHolder}>
            <div className={styles.greyBox}></div>

            <div className={styles.theText}>
                <h2 className={styles.blue}>
                    #About Us
                </h2>
                <p className={styles.videoText}>
                    SCLE comes to fill a gap in leadership and management studies. Leadership studies have suffered loss of values. This loss has fractured real life leadership. The failure to mainstream value in leadership and management education arises from the dominant philosophy that discounts values in scholarship
Leadership and management education is going through a crisis, it is a crisis of orientation and objectivity. Moral agnosticism has made leadership and management education no longer able to produce leaders who can effectively deal with pressing social and economic challenges 
Nigeria has an urgent need for quality leadership and management education for public and private institutions that would deliver economic and social prosperity  

                </p>
            </div>
        </div>

    </div>


    <div className={styles.nextDivContainer}>

        <div className={styles.nextDiv}>
            <div className={styles.greyBox2}></div>
    <h2 className={styles.headingText}>We are impact driven</h2>
        </div>
    </div>
  

    <div className={styles.redTextBackground}>
        <h3 className={styles.headingText}>what defines us</h3>
        <p className={styles.redBackgroundText}>
            To build a world of prosperity and peace for every one by equipping global leaders with ethical and technical capabilities through an innovative and value-based leadership and management education
</p>
<p className={styles.redBackgroundText} >Leveraging the wisdom entrenched in the Word of God effective leaders will be groomed as beacons of light in industry and governance around the world.  

        </p>
    </div>

    <div className={styles.obj}>
        <h2 className={styles.headingText}>
            Our key objectives
        </h2>
     
     
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


<div className={styles.founderDiv}>


    <h2 className={styles.headingText}>Meet the founder</h2>
<div className={styles.greyBoxContainer}>
    <div className={styles.greyBox3}>
    </div>
</div>

<p>CEO/Founder</p>
<p>Surname Firstname</p>
<p>#Bio</p>
   
</div>
<FooterTwo />
    </div>
  )
}

export default about