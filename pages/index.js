import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import logo from './../images/MAIN-LOGO.png'
import Link from 'next/link'
import background from '../images/background.png'
import lady from './../images/lady.png'
import course from './../images/guy-home.png'
import community from './../images/community.png'
import Header from './../components/Header'
import backgroundTestimony from './../images/backgroundTestimony.png'
import image1 from './../images/image1.png'
import image2 from './../images/image2.png'
import image3 from './../images/image3.png'
import contact from './../images/contact-home.png'
import alumni from './../images/alumni.png'
import Footer from './../components/Footer'
import { HiOutlineAcademicCap } from 'react-icons/hi';
import { AiOutlineCalendar } from 'react-icons/ai';
import { IoIosPeople } from 'react-icons/io';
import homeImage1 from './../images/home-img1.png'
import homeImage2 from './../images/home-img2.png'
import homeImage3 from './../images/homeimg-3.png'

export default function Home() {
  return (

    <div className={styles.container}>
  
   <Header />
     <div className={styles.hero} >
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
       <p className={styles.subHeadingText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Laoreet tortor elementum, sed augue in ut aliquam. Imperdiet netus consequat tincidunt viverra. Netus commodo lectus egestas facilisis parturient fames condimentum quis tristique. Suspendisse molestie convallis eget ipsum. Adipiscing molestie id nisl sagittis porttitor consectetur maecenas malesuada. Massa euismod sodales sed convallis facilisis adipiscing risus, adipiscing enim. Tempus aliquet lacus, ullamcorper quis diam vivamus praesent sed vitae. Vulputate odio venenatis in quam arcu amet sit. Magna enim accumsan curabitur lorem sodales lectus.z</p>
       <div className={styles.btnDiv}>Learn more</div>
       </div>
      <div className={styles.whoWeAreImageDiv}>
           <Image
        src={lady}
        className={styles.divImage}
          alt='image'
        />
        <div className={styles.overlapImages}>
           <Image
        src={homeImage1}
        className={styles.divImage}
          alt='image'
        />
           <Image
        src={homeImage2}
        className={styles.divImage}
          alt='image'
        />
           <Image
        src={homeImage3}
        className={styles.divImage}
          alt='image'
        />
</div>
      </div>
    
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
          alt='image'
        />
        <div className={styles.overlap}>
         <div>
            <h2 className={styles.overlapHeading}>certificate program in christian leadership</h2>
         </div>
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
          alt='image'
        />
       </div>
       </div>
       <div className={styles.testimony}>
         <Image
        src={backgroundTestimony}
        className={styles.testimonyImage}
          alt='image'
        />
        <div className={styles.testimonyBox}>
<h3 className={styles.headingText}>Testimonials</h3>

  <p className={styles.testimonyText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Laoreet tortor elementum, sed augue in ut aliquam. Imperdiet netus consequat tincidunt viverra. Netus commodo lectus egestas facilisis parturient fames condimentum  in quam arcu amet sit. Magna enim accumsan curabitur lorem sodales lectus.</p>
   <div className={styles.testimonyImageDiv}>
     <Image
        src={image1}
        className={styles.testimonyPerson} 
         alt='image'

        />
   </div>
</div>
 
       </div>
       <div className={styles.contact}>
           <Image
        src={contact}
        className={styles.contactImage}
       alt='image'
        />
        <div className={styles.form}>
        <h2 className={styles.bigHeading}>Stay updated</h2>
        <p className={styles.formText}>stay updated on news, events, entrepeneurs, research and more</p>
       <div className={styles.formDiv}>
         <label className={styles.label}>Email Address <span className={styles.redColor}>*</span></label>
          <input className={styles.input} type='text' />
       </div>
       <div className={styles.formDiv}>
         <label className={styles.label}>Email Address <span className={styles.redColor}>*</span></label>
          <input className={styles.input} type='text' />
       </div>
       <div className={styles.formBtnDiv}>
       <button className={styles.formBtn}>Submit</button>
       </div>
        </div>
       </div>
       <div className={styles.alumni}>
         <h2 className={styles.alumniHeading}> Partner with our alumni</h2>
         <p className={styles.alumniTextTop}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi neque pulvinar erat amet porttitor amet, blandit vulputate. Sed adipiscing dignissim placerat </p>
         <Image src={alumni}
          alt='image'
          className={styles.alumniImage}
         />
<p className={styles.alumniTextBottom}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi neque pulvinar erat amet porttitor amet, blandit vulputate. Sed adipiscing dignissim placerat </p>
<div className={styles.alumniButtonDiv}>
  <button className={styles.alumniButton}>
  Connect Now
</button>
</div>
       </div>
       <Footer />
          </div>

  )
}
