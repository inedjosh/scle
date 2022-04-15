import Image from 'next/image'
import React from 'react'
import FooterTwo from '../components/Footer'
import Header from '../components/HeaderWhite'
import styles from './../styles/about.module.css'

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
                <p className={styles.videoText}>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Iure asperiores repellendus illum? Velit enim eligendi amet ex
                    , iste magni. Quo voluptatem reprehenderit aut maxime fugit beatae voluptates porro earum numquam.</p>
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
        <p className={styles.redBackgroundText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque temporibus perferendis exercitationem sed id. 
            Suscipit modi ea velit beatae aperiam quis nam vitae delectus ipsam? Iure eius consectetur aliquam labore!</p>
    </div>

    <div className={styles.obj}>
        <h2 className={styles.headingText}>
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