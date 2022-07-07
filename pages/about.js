import Image from "next/image";
import React from "react";
import FooterTwo from "../components/Footer";
import Header from "../components/HeaderWhite";
import styles from "./../styles/about.module.css";
import { BsSun, BsShieldLock } from "react-icons/bs";
import { WiTsunami } from "react-icons/wi";
import { GiAlarmClock } from "react-icons/gi";
import image1 from "./../images/about-1.jpg";
import image2 from "./../images/about-2.jpg";
import image3 from "./../images/sam.jpeg";

function about() {
  return (
    <div className={styles.about}>
      <Header />

      <div className={styles.videoHolder}>
        <div className={styles.topImgDiv}>
          <img
            className={styles.topImg}
            alt="image"
            src="https://res.cloudinary.com/beam-innovations/image/upload/v1656787272/scle/WhatsApp_Image_2022-06-29_at_11.03.49_PM_hcyr0x.jpg"
          />
        </div>

        <div className={styles.theText}>
          <h2 className={styles.blue}>Why SCLE?</h2>
          <p className={styles.videoText}>
            SCLE comes to fill a gap in leadership and management studies,
            Leadership studies have suffered loss of values. This loss has
            fractured real life leadership. <br /> <br />
            The failure to mainstream value in leadership and management
            education arises from the dominant philosophy that discounts values
            in scholarship. Leadership and management education is going through
            a crisis, it is a crisis of orientation and objectivity. <br />{" "}
            <br /> Moral agnosticism has made leadership and management
            education no longer able to produce leaders who can effectively deal
            with pressing social and economic challenges Nigeria has an urgent
            need for quality leadership and management education for public and
            private institutions that would deliver economic and social
            prosperity
          </p>
        </div>
      </div>

      <div className={styles.nextDivContainer}>
        <div className={styles.greyBox2}>
          <h2 className={styles.headingText}>We are impact driven</h2>
          <img
            className={styles.topImageTwo}
            alt="image"
            src={
              "https://res.cloudinary.com/beam-innovations/image/upload/v1656787272/scle/WhatsApp_Image_2022-06-29_at_11.00.16_PM_misynx.jpg"
            }
          />
        </div>
      </div>

      {/*<div className={styles.redTextBackground}>
        <h3 className={styles.headingText}>what defines us</h3>
        <p className={styles.redBackgroundText}>
          To build a world of prosperity and peace for every one by equipping
          global leaders with ethical and technical capabilities through an
          innovative and value-based leadership and management education
        </p>
        <p className={styles.redBackgroundText}>
          Leveraging the wisdom entrenched in the Word of God effective leaders
          will be groomed as beacons of light in industry and governance around
          the world.
        </p>
          </div>
    */}
      <div className={styles.obj}>
        <h2 className={styles.headingText}>Our core values</h2>

        <div className={styles.sectionHolder}>
          <div className={styles.sections}>
            <BsSun className={styles.icon} />
            <h3 className={styles.title}>#Leadership</h3>
            <p className={styles.sectionText}>
              Leadership is a core focus of the scriptures. The major messages
              in the bible are about the failures of leadership, its huge
              consequences and principles that define effective and good
              leadership
            </p>
          </div>
          <div className={styles.sections}>
            <GiAlarmClock className={styles.icon} />
            <h3 className={styles.title}>#Integrity</h3>
            <p className={styles.sectionText}>
              The bible is clear on the purpose of leadership, to wit, to
              promote righteousness and justice. And the results of righteous
              and just leadership are prosperity and peace
            </p>
          </div>
          <div className={styles.sections}>
            <BsShieldLock className={styles.icon} />
            <h3 className={styles.title}> #Excellence </h3>
            <p className={styles.sectionText}>
              SCLE provides teachings on proven leadership principles from the
              pages of the Holy Scripture and use same to equip individuals to
              excel beyond their expectation
            </p>
          </div>
          <div className={styles.sections}>
            <WiTsunami className={styles.icon} />
            <h3 className={styles.title}>#Commitment to values </h3>
            <p className={styles.sectionText}>
              At SCLE we reinvest commitment on the importance of value in
              leadership and management education. We are transforming
              leadership and management education by focusing on both ethical
              and technical capabilities of effective leadership
            </p>
          </div>
        </div>
      </div>
      <div className={styles.founderDiv}>
        <h2 className={styles.headingText}>Meet the founder</h2>
        <div className={styles.greyBoxContainer}>
          <div className={styles.authorImgDiv}>
            <img
              src="https://res.cloudinary.com/beam-innovations/image/upload/v1656787053/scle/IMG-20220615-WA0004_t0icyd.jpg"
              className={styles.authorImg}
              alt="image"
            />
          </div>
        </div>

        <p>CEO/Founder</p>
        <p className={styles.boldText}>Dr. Sam Amadi</p>
        <p className={styles.paddedText}>
          Dr Sam Amadi, a policy strategist and law and governance expert, is
          the Director of Abuja School of Social and Political Thoughts and a
          Visiting Professor at the Emerald Energy Institute at the University
          of Port Harcourt. He is the Chair of the Development Law Group of the
          Nigerian Bar Association’s Section on Public Interest Law and
          Development (SPIDEL), which he as a founding council member. He was
          Associate Professor and Head of Department of International Law and
          Jurisprudence at Baze University, Abuja until June 2021. He was a
          Visiting Research Fellow at the Nigerian Institute of Advanced Legal
          Studies from 2016-2018. Between 2010-2015, he was Chairman and CEO of
          the Nigerian Electricity Regulatory Commission (NERC). He has been
          editor of journals and held lecturing and advisory positions in
          universities, government institutions and international
          organizations.Amadi has been a member of several boards including,
          UN’s Advisory Council of Global Electricity Initiative, Section on
          Public Interest and Development Law of the Nigerian Bar Association,
          Center for Law and Social Action (CLASA), and Maldova Foundation, a
          Washington-based policy Think Tank. He is the Chair of Board of
          Trustee of Albino Association of Nigeria and Civil Liberties
          Organization, Abuja Branch
        </p>
      </div>
      <FooterTwo />
    </div>
  );
}

export default about;
