import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import logo from './../images/MAIN-LOGO.png'
import Link from 'next/link'
import background from '../images/background.png'
import lady from './../images/lady.png'
import course from './../images/course.png'
import community from './../images/community.png'
import Header from './../components/Header'
import backgroundTestimony from './../images/backgroundTestimony.png'
import image1 from './../images/image1.png'
import image2 from './../images/image2.png'
import image3 from './../images/image3.png'
import contact from './../images/contact-home.png'

export default function Home() {
  return (

    <div className={styles.container}>
  
   
   <Header />
     <div className={styles.hero}>
     <div className={styles.overlay}></div>
    <div className={styles.heroText}>
      We nuture great <br/>
      ideas for <span className={styles.heroTextBlue}>success</span>
    </div>
    <div className={styles.heroTextSub}>
      <div className={styles.redBar}></div>
      <p className={styles.heroParagraph}>SuccessLorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi neque pulvinar erat </p>
    </div>
     </div>
    
 
     {/* <div className={styles.subHero}>
       <h4 className={styles.subHeroHeadingText}>charles darwin</h4>
       <p className={styles.subHeroParagraph}>
         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi neque pulvinar erat amet porttitor amet, blandit vulputate. Sed adipiscing dignissim placerat 
       </p>
       </div> */}
       <div className={styles.whoWeAre}>
       <h1 className={styles.mainHeading}>Who we are </h1> 

       <div className={styles.flexDiv}>

      <div className={styles.textDiv}>
       <h2 className={styles.subHeading}>Leading leadership institute in nigeria and large</h2>
       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Laoreet tortor elementum, sed augue in ut aliquam. Imperdiet netus consequat tincidunt viverra. Netus commodo lectus egestas facilisis parturient fames condimentum quis tristique. Suspendisse molestie convallis eget ipsum. Adipiscing molestie id nisl sagittis porttitor consectetur maecenas malesuada. Massa euismod sodales sed convallis facilisis adipiscing risus, adipiscing enim. Tempus aliquet lacus, ullamcorper quis diam vivamus praesent sed vitae. Vulputate odio venenatis in quam arcu amet sit. Magna enim accumsan curabitur lorem sodales lectus.z</p>
       <div className={styles.btnDiv}>Learn more</div>
       </div>
         <Image
        src={lady}
        className={styles.divImage}
        width={300}
        height={300}
        />
    
</div>
       </div>
       <div className={styles.programme}>
       <div className={styles.backgroundHeading}>
         <h3 className={styles.headingText}>Our programmes</h3>
         <div className={styles.headingBtn}>
           Learn more
         </div>
       </div>
       <div className={styles.sectionImageDiv}>
          <Image
        src={course}
        className={styles.sectionImage}
        />
       </div>
       </div>
       <div className={styles.programme}>
       <div className={styles.backgroundHeading}>
         <h3 className={styles.headingText}>Community updates</h3>
         <div className={styles.headingBtn}>
           Learn more
         </div>
       </div>
       <div className={styles.sectionImageDiv}>
          <Image
        src={community}
        className={styles.sectionImage}
        />
       </div>
       </div>
       <div className={styles.testimony}>
         <Image
        src={backgroundTestimony}
        className={styles.testimonyImage}
        />
<h3 className={styles.headingText}>Testimonials</h3>
<div className={styles.testimonyBox}>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Laoreet tortor elementum, sed augue in ut aliquam. Imperdiet netus consequat tincidunt viverra. Netus commodo lectus egestas facilisis parturient fames condimentum  in quam arcu amet sit. Magna enim accumsan curabitur lorem sodales lectus.</p>
</div>
  <Image
        src={image1}
        className={styles.testimonyPerson}
        />
       </div>
       <div className={styles.contact}>
           <Image
        src={contact}
        className={styles.contactImage}

        />
        <div className={styles.form}>
        <h2>Stay updated</h2>
        <p>stay updated on news, events, entrepeneurs, research and more</p>
       <div>
         <label className={styles.label}>Email Address</label>
          <input className={styles.input} type='text'/>
       </div>
       <div>
         <label className={styles.label}>Email Address</label>
          <input className={styles.input} type='text'/>
       </div>
        </div>
       </div>
          </div>

  )
}
