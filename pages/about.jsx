import Image from 'next/image';
import styles from '../styles/About.module.css';
import brain from '../public/brain.jpg';

export default function AboutMe() {
  return (
    <div className={styles.about}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.imageContainer} data-aos="fade-right">
            <Image
              src={brain}
              alt="About Me"
              width={150}
              height={150}
              priority
              className={styles.myImage}
            />
          </div>
          <div className={styles.textContainer} data-aos="fade-left">
            <h3 className={styles.textHead}>Mobile App &amp; Web Developer</h3>
            <ul className={styles.list}>
              <li className={styles.listItem}>
                <i className={`${styles.icon} bi bi-chevron-right`}></i>
                <span><strong className={styles.strong}>Name: </strong>
                  Shivansh Singh</span>
              </li>
              <li className={styles.listItem}>
                <i className={`${styles.icon} bi bi-chevron-right`}></i>
                <span> <strong className={styles.strong}>Nationality: </strong>
                  Indian </span>
              </li>
              <li className={styles.listItem}>
                <i className={`${styles.icon} bi bi-chevron-right`}></i>
                <span><strong className={styles.strong}>College : </strong>
                  National Institute of Technology Hamirpur</span>
              </li>
            </ul>
          </div>
          <div className={styles.textContainer} data-aos="fade-left">
            <ul className={styles.list}>
              <li className={styles.listItem}>
                <i className={`${styles.icon} bi bi-chevron-right`}></i>
                <span> <strong className={styles.strong}>Graduation Year: </strong>
                  2026</span>
              </li>
              <li className={styles.listItem}>
                <i className={`${styles.icon} bi bi-chevron-right`}></i>
                <span> <strong className={styles.strong}>Availability: </strong>
                  Freelance, Remote, & Hybrid</span>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.paragraph}>
          Innovative and deadline-driven Developer researching and developing solutions that meet client satisfaction using the easiest, yet effective approach possible. I make the whole concept of developing, a whole vibe - A Normal Life is Boring.        </div>

        {/* Skills Section */}
        <div className={styles.skillsSection}>
        <h3 className={styles.textHead}>Skills</h3>
          <div className={styles.skillsGrid}>
            <div className={styles.skill}>
              <span className={styles.skillName}>JavaScript and Typescript</span>
              <div className={styles.progressBar}>
                <div className={styles.progress} style={{ width: '89%' }}></div>
              </div>
            </div>
            <div className={styles.skill}>
              <span className={styles.skillName}>ReactJS, NextJS & React Native</span>
              <div className={styles.progressBar}>
                <div className={styles.progress} style={{ width: '85%' }}></div>
              </div>
            </div>
            <div className={styles.skill}>
              <span className={styles.skillName}>AWS and Docker</span>
              <div className={styles.progressBar}>
                <div className={styles.progress} style={{ width: '82%' }}></div>
              </div>
            </div>
            <div className={styles.skill}>
              <span className={styles.skillName}>Websockets, ExpressJS & NodeJS</span>
              <div className={styles.progressBar}>
                <div className={styles.progress} style={{ width: '88%' }}></div>
              </div>
            </div>
            <div className={styles.skill}>
              <span className={styles.skillName}>Golang</span>
              <div className={styles.progressBar}>
                <div className={styles.progress} style={{ width: '60%' }}></div>
              </div>
            </div>
            <div className={styles.skill}>
              <span className={styles.skillName}>CSS and Taiwind</span>
              <div className={styles.progressBar}>
                <div className={styles.progress} style={{ width: '95%' }}></div>
              </div>
            </div>
            <div className={styles.skill}>
              <span className={styles.skillName}>Firebase,MongoDB and Redis </span>
              <div className={styles.progressBar}>
                <div className={styles.progress} style={{ width: '85%' }}></div>
              </div>
            </div>
            <div className={styles.skill}>
              <span className={styles.skillName}>Git & Postman</span>
              <div className={styles.progressBar}>
                <div className={styles.progress} style={{ width: '85%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Fetch static props if needed for SSR or static generation
export async function getStaticProps() {
  return {
    props: { title: 'About' },
  };
}
