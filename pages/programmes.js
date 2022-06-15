import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import styles from "./../styles/programmes.module.css";
import award from "./../images/award.png";
import Image from "next/image";
import man from "./../images/man-scle.png";
import phone from "./../images/phone.png";
import certificate from "./../images/image-certificate.png";
import { HiOutlineAcademicCap } from "react-icons/hi";
import { AiOutlineCalendar, AiOutlineSafetyCertificate } from "react-icons/ai";
import { IoIosPeople } from "react-icons/io";
import { BsSun, BsShieldLock } from "react-icons/bs";
import { WiTsunami } from "react-icons/wi";
import { BiCertification } from "react-icons/bi";
import { GrCertificate } from "react-icons/gr";
import { GiAlarmClock } from "react-icons/gi";
import image3 from "./../images/man-1.jpeg";

function programmes() {
  return (
    <div>
      <Header />

      <div className={styles.firstSection}>
        <div className={styles.heroDiv}>
          <h1 className={styles.heroText}>
            Explore our <br />
            <span className={styles.programBlue}>Programmes</span>
          </h1>
          <p className={styles.heroParagraphText}>
            To spread prosperity and peace for everyone every where in the world
          </p>
        </div>

        <div className={styles.girlImage}>
          <Image src={man} className={styles.heroImage} alt="lady image" />
        </div>
      </div>
      {/*
            <div className={styles.explore}>
                <h2 className={styles.exploreHeading}>Explore our programs</h2>
                <p className={styles.exploreText}>SCLE is an intervention to promote good leadership and business management practices that are sourced from the eternal and proven Christian values
 </p>
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
           <p className={styles.overlapText}>
           
SCLE is a faith-based institute that promotes Christian values in public life as a form of evangelism for life and public sustainability. 
SCLE builds the capacity of public and private leaders and managers to identity critical issues, processes and values that promotes prosperity, harmonious interdependence and social justice and establish consensus and commitment on institutions that guarantee sustainable prosperity and freedom
SCLE also focus on imparting technical skills required to drive innovative and small-scale business ideas from being a dream to becoming flourishing enterprise   

          </p>
         </div>
         <div className={styles.overlapList}>
           <p className={styles.listOverlap}><AiOutlineCalendar className={styles.whiteColor}/> 3 Months</p>
           <p className={styles.listOverlap}><HiOutlineAcademicCap className={styles.whiteColor} />6 Faculties</p>
           <p className={styles.listOverlap}><IoIosPeople className={styles.whiteColor}/>178 Students</p>
         </div>
         <div>
           <button className={styles.overlapButton}>join programme</button>
         </div>
        </div>
        </div>
        </div>
          </div>
          
  */}
      <div className={styles.obj}>
        <h2 className={styles.objHeading}>Our Programmes</h2>

        <div className={styles.sectionHolder}>
          <div className={styles.sections}>
            <BsSun className={styles.icon} />
            <h3 className={styles.title}>
              Certificate programme in Christian Leadership - 3 Months
            </h3>
          </div>
          <div className={styles.sections}>
            <GiAlarmClock className={styles.icon} />
            <h3 className={styles.title}>
              {" "}
              Diploma in Christian Leadership and Entrepreneurship - 9 months
            </h3>
          </div>
          <div className={styles.sections}>
            <BsShieldLock className={styles.icon} />
            <h3 className={styles.title}>
              {" "}
              Advanced Diploma in Christian Leadership and Business management -
              18 months{" "}
            </h3>
          </div>
          <div className={styles.sections}>
            <BiCertification className={styles.icon} />
            <h3 className={styles.title}>
              {" "}
              Work place coaching in Strategy and Organizational Behaviour - 7
              days{" "}
            </h3>
          </div>
          <div className={styles.sections}>
            <AiOutlineSafetyCertificate className={styles.icon} />
            <h3 className={styles.title}>
              {" "}
              Workshops dedicated to specific areas of our curriculum – 3 to
              5days.{" "}
            </h3>
          </div>
          <div className={styles.sections}>
            <WiTsunami className={styles.icon} />
            <h3 className={styles.title}>
              {" "}
              One day Outreach Seminars and Public Speaking Engagements{" "}
            </h3>
          </div>
        </div>
      </div>

      <div className={styles.student}>
        <h2 className={styles.studentHeading}>What our students have to say</h2>
        <div className={styles.studentImg}>
          <Image className={styles.studentImage} alt="image" src={image3} />
        </div>
        <h2 className={styles.studentName}>Jonathan Mikeson</h2>

        <p className={styles.studentText}>
          {" "}
          A wonderful program indeed! one i will refer for all my friends and
          loved ones, try it and you will see how good it is
        </p>
      </div>

      <Footer />
    </div>
  );
}

export default programmes;
