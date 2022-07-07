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
      </div>

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

      <Footer />
    </div>
  );
}

export default programmes;
