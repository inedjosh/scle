import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import logo from "./../images/MAIN-LOGO.png";
import lady from "./../images/lady.png";
import background from "./../images/new-hero.jpg";
import Link from "next/link";
import course from "./../images/friends-image.jpg";
import community from "./../images/community.png";
import Header from "./../components/Header";
import backgroundTestimony from "./../images/backgroundTestimony.png";
import image1 from "./../images/image1.png";
import image2 from "./../images/image2.png";
import image3 from "./../images/image3.png";
import contact from "./../images/contact-home.png";
import alumni from "./../images/alumni.png";
import Footer from "./../components/Footer";
import { HiOutlineAcademicCap } from "react-icons/hi";
import { AiOutlineCalendar } from "react-icons/ai";
import { IoIosPeople } from "react-icons/io";
import homeImage1 from "./../images/home-img1.png";
import homeImage2 from "./../images/home-img2.png";
import homeImage3 from "./../images/homeimg-3.png";

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.hero}>
        <div className={styles.containerHero}>
          <Image src={background} className={styles.background} />
        </div>
        <div className={styles.overlay}></div>
        <div className={styles.heroDescription}>
          <div className={styles.heroText}>
            To spread prosperity
            <br /> and peace for everyone <br /> every where in the{" "}
            <span className={styles.heroTextBlue}>world</span>
          </div>
          <div className={styles.heroTextSub}>
            <div className={styles.redBar}></div>
            <p className={styles.heroParagraph}>
              Leveraging on the wisdom in the word of God, we groom leaders to
              be effective problem solvers in government, industry and the
              social sector.
            </p>
          </div>
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
            <h2 className={styles.subHeading}>
              A leading leadership institute 
            </h2>
            <p className={styles.subHeadingText}>
              School of Christian Leadership and Entrepreneurship (SCLE) is a
              capacity building intervention that promotes excellent leadership
              and business management practices that are sourced from biblical
              principles and practices.
              <br /> <br />
              SCLE is a faith-based institute that promotes Christian values in
              public and private life as a form of evangelism for prosperity and
              social peace and their sustainability. <br /> <br />
              SCLE builds the capacity of public and private leaders and
              managers to identity critical issues, processes and values that
              promote prosperity, harmonious interdependence and social justice
              and establish consensus and commitment on institutions that
              guarantee sustainable prosperity and freedom. <br /> <br /> To
              achieve sustainable prosperity and just social order, SCLE focuses
              on imparting technical skills required to drive innovative
              business practices that can create prosperity and turn ideas from
              dreams into enterprise.
            </p>
            {/* <div className={styles.btnDiv}>Learn more</div> */}
          </div>
          <div className={styles.whoWeAreImageDiv}>
            <Image src={lady} className={styles.divImageMain} alt="image" />
            <div className={styles.overlapImages}>
              <Image src={homeImage1} className={styles.divImage} alt="image" />
              <Image src={homeImage2} className={styles.divImage} alt="image" />
              <Image src={homeImage3} className={styles.divImage} alt="image" />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.programme}>
        <div className={styles.backgroundHeading}>
          <h3 className={styles.headingText}>Our Mission</h3>
          {/* <div className={styles.headingBtn}>
           Learn more
         </div> */}
        </div>
        <div className={styles.sectionImageDiv}>
          <div className={styles.hide}>
            <img
              src="https://res.cloudinary.com/beam-innovations/image/upload/v1655289394/scle/friends-people-group-teamwork-diversity-min_gdj5pu.jpg"
              className={styles.sectionImage}
              alt="image"
            />
          </div>
          <div className={styles.overlap}>
            {/* <div>
            <h2 className={styles.overlapHeading}>certificate program in christian leadership</h2>
         </div> */}
            <div className={styles.overlapTextDiv}>
              <p className={styles.overlapText}>
                Our mission is to build a prosperous and peaceful environment
                for everyone by equipping global leaders with ethical and
                technical capabilities through an innovative and value-based
                leadership and management education sourced from the word of
                God.
              </p>
            </div>

            {/* <div className={styles.overlapList}>
            <p className={styles.listOverlap}>
              <AiOutlineCalendar className={styles.whiteColor} /> 3 Months
            </p>
            <p className={styles.listOverlap}>
              <HiOutlineAcademicCap className={styles.whiteColor} /> 6
              Faculties
            </p>
            <p className={styles.listOverlap}>
              <IoIosPeople className={styles.whiteColor} />
              178 Students
            </p>
          </div>
        */}
            <div>
              <button className={styles.overlapButton}>join programme</button>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.testimony}>
        <Image
          src={backgroundTestimony}
          className={styles.testimonyImage}
          alt="image"
        />
        <div className={styles.testimonyBox}>
          <h3 className={styles.headingText}>Testimonials</h3>

          <p className={styles.testimonyText}>
            SCLE is the best place to be, indeed joining the program has changed
            my life alot!
          </p>
          <div className={styles.testimonyImageDiv}>
            <Image
              src={image1}
              className={styles.testimonyPerson}
              alt="image"
            />
          </div>
        </div>
      </div>
      <div className={styles.contact}>
        <div className={styles.cantactImageDiv}>
          <div className={styles.hide}>
            <Image
              src={contact}
              className={styles.contactImage}
              // height={900}
              alt="image"
            />
          </div>
        </div>
        <div className={styles.form}>
          <h2 className={styles.bigHeading}>Stay updated</h2>
          <p className={styles.formText}>
            stay updated on news, events, entrepreneurs, research and more
          </p>
          <div className={styles.formDiv}>
            <label className={styles.label}>
              Email Address <span className={styles.redColor}>*</span>
            </label>
            <input className={styles.input} type="text" />
          </div>

          <div className={styles.formBtnDiv}>
            <button className={styles.formBtn}>Submit</button>
          </div>
        </div>
      </div>
      <div className={styles.alumni}>
        <h2 className={styles.alumniHeading}> Partner with our alumni</h2>
        <p className={styles.alumniTextTop}>
          Leveraging on the wisdom in the word of God, we groom leaders to be
          effective problem solvers in government, industry and the social
          sector
        </p>
        {/* <div className={styles.partnerImage}>
          <Image src={alumni} alt="image" className={styles.alumniImage} />
        </div> */}

        <p className={styles.alumniTextBottom}>
          To build a world of prosperity and peace for every one by equipping
          global leaders with ethical and technical capabilities through an
          innovative and value-based leadership and management education
        </p>
        <div className={styles.alumniButtonDiv}>
          <button className={styles.alumniButton}>Connect Now</button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
