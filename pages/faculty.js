import React from 'react'
import Header from '../components/Header'
import lady  from './../images/lady-scle.png'
import Footer from './../components/Footer'
import styles from './../styles/faculty.module.css'
import Image from 'next/image'
import award from './../images/award.png'
import image1 from './../images/c1.png'
import image2 from './../images/c2.png'
import image3 from './../images/c3.png'
import image4 from './../images/c4.png'
import image5 from './../images/c5.png'
import image6 from './../images/c6.png'

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
                <h3 className={styles.headingfaculties1}>Captains of Industry (Christian led organizations)

</h3>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laudantium, veniam? Optio soluta minima excepturi facere pariatur nisi, molestiae nihil impedit commodi,
                vitae eveniet id sint perspiciatis necessitatibus! Autem, mollitia vitae.
            </p>

    </div>
            <div className={styles.greyDiv}>
             <Image  className={styles.greyBoxImg} alt='image' src={image1} />
            </div>
</div>

    <div className={styles.textSectionStyle2}>
            <div className={styles.greyDiv}>
             <Image  className={styles.greyBoxImg} alt='image' src={image2} />
            </div>

        <div className={styles.textHolder}>
                <h3 className={styles.headingfaculties2}>Scholars and researchers of strategy, social psychology, and behavioural science

</h3>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Laudantium, veniam? Optio soluta minima excepturi facere pariatur nisi, molestiae nihil impedit commodi,
            vitae eveniet id sint perspiciatis necessitatibus! Autem, mollitia vitae.
        </p>
    
        </div>
    </div>
    

    <div className={styles.textSectionStyle1}>
        <div className={styles.textHolder}>
                    <h3 className={styles.headingfaculties1}>Christian leaders from successful global organizations</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Laudantium, veniam? Optio soluta minima excepturi facere pariatur nisi, molestiae nihil impedit commodi,
                    vitae eveniet id sint perspiciatis necessitatibus! Autem, mollitia vitae.
                </p>
    
        </div>
                <div className={styles.greyDiv}>
     <Image  className={styles.greyBoxImg} alt='image' src={image3} />
                </div>
    </div>
     <div className={styles.textSectionStyle2}>
            <div className={styles.greyDiv}>
            <Image  className={styles.greyBoxImg} alt='image' src={image4} />
            </div>

        <div className={styles.textHolder}>
                <h3 className={styles.headingfaculties2}>Christian leaders in public service (local and International)
</h3>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Laudantium, veniam? Optio soluta minima excepturi facere pariatur nisi, molestiae nihil impedit commodi,
            vitae eveniet id sint perspiciatis necessitatibus! Autem, mollitia vitae.
        </p>
    
        </div>
    </div>
    
    <div className={styles.textSectionStyle1}>
        <div className={styles.textHolder}>
                    <h3 className={styles.headingfaculties1}>Lecturers from Local and Foreign Christian Institutions  
</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Laudantium, veniam? Optio soluta minima excepturi facere pariatur nisi, molestiae nihil impedit commodi,
                    vitae eveniet id sint perspiciatis necessitatibus! Autem, mollitia vitae.
                </p>
    
        </div>
                <div className={styles.greyDiv}>
     <Image  className={styles.greyBoxImg} alt='image' src={image5} />
                </div>
    </div>
     <div className={styles.textSectionStyle2}>
            <div className={styles.greyDiv}>
             <Image  className={styles.greyBoxImg} alt='image' src={image6} />
            </div>

        <div className={styles.textHolder}>
                <h3 className={styles.headingfaculties2}>	Clergy with visible testimony of impactful leadership. 

</h3>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Laudantium, veniam? Optio soluta minima excepturi facere pariatur nisi, molestiae nihil impedit commodi,
            vitae eveniet id sint perspiciatis necessitatibus! Autem, mollitia vitae.
        </p>
    
        </div>
    </div>
      <div className={styles.textSectionStyle1}>
        <div className={styles.textHolder}>
                    <h3 className={styles.headingfaculties1}>Failed leaders and those who made leadership success  
</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Laudantium, veniam? Optio soluta minima excepturi facere pariatur nisi, molestiae nihil impedit commodi,
                    vitae eveniet id sint perspiciatis necessitatibus! Autem, mollitia vitae.
                </p>
    
        </div>
                <div className={styles.greyDiv}>
     <Image  className={styles.greyBoxImg} alt='image' src={image3} />
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