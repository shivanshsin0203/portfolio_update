import Link from 'next/link';
// import Illustration from '../components/Illustration';
import styles from '../styles/HomePage.module.css';
import styling from '../styles/Home.module.css';
import logo from "../public/logo.png";
import Image from 'next/image';

// FontAwesome imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact,faAws , faJs, faGolang, faNode } from '@fortawesome/free-brands-svg-icons';


export default function HomePage() {
  const handleDownloadClick = (event) => {
    event.preventDefault(); // Prevent default routing behavior
    const link = document.createElement('a');
    link.href = '/shivansh.pdf'; // The path to your resume in the public folder
    link.download = 'shivansh.pdf'; // The name of the downloaded file
    link.click();
  };
  return (
    <>
      <div className={styles.container}>
        <div className={styles.background}>
          <h1>I BUILD</h1>
          <h1>MAGIC!</h1>
        </div>
        <d    iv className={styles.foreground}>
          <div className={styles.content}>
            <h1 className={styles.name}>Shivansh SIngh</h1>
            <h6 className={styles.bio}>Fullstack Developer with
              <span className={styles.react}> Next.</span></h6>

            {/* Skill Icons Section */}
            <div className={styling.skillsContainer}>
              {/* Skill item for React */}
              <div className={styling.skillItem}>
                <FontAwesomeIcon icon={faReact} size="3x" className={`${styling.icon} ${styling.reactIcon}`} />
                <div className={styling.skillText}>React</div>
              </div>

              {/* Skill item for WordPress */}
              <div className={styling.skillItem}>
                <FontAwesomeIcon icon={faGolang} size="3x" className={`${styling.icon} ${styling.wordpressIcon}`} />
                <div className={styling.skillText}>Golang</div>
              </div>

              {/* Skill item for JavaScript */}
              <div className={styling.skillItem}>
                <FontAwesomeIcon icon={faJs} size="3x" className={`${styling.icon} ${styling.jsIcon}`} />
                <div className={styling.skillText}>JavaScript</div>
              </div>

              {/* Skill item for Solana Rust */}
              <div className={styling.skillItem}>
                <FontAwesomeIcon icon={faAws} size="3x" className={`${styling.icon} ${styling.rustIcon}`} />
                <div className={styling.skillText}>AWS</div>
              </div>

              {/* Skill item for Express.js */}
              <div className={styling.skillItem}>
                <FontAwesomeIcon icon={faNode} size="3x" className={`${styling.icon} ${styling.nodeIcon}`} />
                <div className={styling.skillText}>Express.js</div>
              </div>
            </div>


           <div className={styling.forMobile}>
              <Link href="/projects">
              <button className={`${styles.button} ${styling.workBtn}`}>View Work</button>
              </Link>
              <Link href="/">
                <button onClick={handleDownloadClick} className={`${styles.outlined} ${styling.contactBtn}`}>Resume</button>
              </Link>
           </div>
          </div>
          {/* <Illustration className={styles.illustration} /> */}
          {/* Logo image */}
          <div className={styling.imageWrapper}>
            <Image src={logo} alt="Sarcastic Geek Logo" className={styling.myImg} />
          </div>
        </d>
      </div>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: { title: 'Home' },
  };
}
