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
                <h3 className={styles.headingfaculties1}>Certificate programme in Christian Leadership -  3 Months
</h3>
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
                <h3 className={styles.headingfaculties2}>Diploma in Christian Leadership and Entrepreneurship  -   9 months

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
                    <h3 className={styles.headingfaculties1}>Advanced Diploma in Christian Leadership and Business management  - 18 months</h3>
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
                <h3 className={styles.headingfaculties2}>Work place coaching in Strategy and Organizational Behaviour  - 7 days
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
                    <h3 className={styles.headingfaculties1}>Workshops dedicated to specific areas of our curriculum – 3 to 5days. 
</h3>
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
                <h3 className={styles.headingfaculties2}>One day Outreach Seminars and Public Speaking Engagements 

</h3>
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