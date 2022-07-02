import React from "react";
import Header from "../components/Header";
import lady from "./../images/lady-scle.png";
import Footer from "./../components/Footer";
import styles from "./../styles/faculty.module.css";
import Image from "next/image";
import award from "./../images/award.png";
import image1 from "./../images/c1.png";
import image2 from "./../images/c2.png";
import image3 from "./../images/c3.png";
import image4 from "./../images/c4.png";
import image5 from "./../images/c5.png";
import image6 from "./../images/c6.png";

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
              <h3 className={styles.headingfaculties1}>
                Captains of Industry (Christian led organizations)
              </h3>
              <p>
                The faculty will include industry leaders who have established a
                reputation as effective and ethical leaders, and have achieved
                excellence in diverse economic sectors. These leaders will
                provide practical guidelines on effective leadership to
                complement the theoretical knowledge they receive.
              </p>
            </div>
            <div className={styles.greyDiv}>
              <img
                className={styles.greyBoxImg}
                alt="image"
                src={
                  "https://res.cloudinary.com/beam-innovations/image/upload/v1656787273/scle/WhatsApp_Image_2022-06-29_at_11.03.50_PM_zgxoqq.jpg"
                }
              />
            </div>
          </div>

          <div className={styles.textSectionStyle2}>
            <div className={styles.greyDiv}>
              <img
                className={styles.greyBoxImg}
                alt="image"
                src={
                  "https://res.cloudinary.com/beam-innovations/image/upload/v1656787272/scle/WhatsApp_Image_2022-06-29_at_11.03.49_PM_hcyr0x.jpg"
                }
              />
            </div>

            <div className={styles.textHolder}>
              <h3 className={styles.headingfaculties2}>
                Scholars and researchers of strategy, social psychology, and
                behavioural science
              </h3>
              <p>
                The study of strategy and the science of decision are providing
                insights about how we make good and bad decisions. We will bring
                scholars and researchers of strategy, social psychology and
                behavioral science to share results of their research into the
                science of decision-making so as to improve the quality of
                decision-making of leaders and enhance effectiveness and
                fairness in public and private sector management and leadership
              </p>
            </div>
          </div>

          <div className={styles.textSectionStyle1}>
            <div className={styles.textHolder}>
              <h3 className={styles.headingfaculties1}>
                Christian leaders from successful global organizations
              </h3>
              <p>
                As a bible-oriented leadership organization, we will bring
                Christian leaders who have established reputation and
                demonstrated competence in leadership to inspire leaders and
                offer testimonies and valuable experiences on how to lead with
                excellence and effectiveness
              </p>
            </div>
            <div className={styles.greyDiv}>
              <img
                className={styles.greyBoxImg}
                alt="image"
                src={
                  "https://res.cloudinary.com/beam-innovations/image/upload/v1656787270/scle/WhatsApp_Image_2022-06-29_at_10.51.47_PM_lc8vr5.jpg"
                }
              />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.blueBck}>
        <Footer />
      </div>
    </div>
  );
}

export default contact;
