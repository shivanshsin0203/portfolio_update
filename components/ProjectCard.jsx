import Image from 'next/image';
import { FaGithub, FaVideo } from 'react-icons/fa'; // Import FontAwesome icons
import styles from '../styles/ProjectCard.module.css';

const ProjectCard = ({ project }) => {
  return (
    <div className={styles.card}>
      <Image src={project.image} height={300} width={500} alt={project.name} />
      <div className={styles.content}>
        <h3>
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.underline}
          >
            {project.name}
          </a>
        </h3>
        <p>{project.description}</p>
        
        {/* Tags */}
        <div className={styles.tags}>
          {project.tags.map((tag) => (
            <span key={tag} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>
        
        {/* Buttons for Demo and Code */}
        <div className={styles.buttons}>
          {/* Demo Button */}
          <a
            href={project.demos}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.button}
          >
            <FaVideo className={styles.icon} /> Demo
          </a>
          {/* Code Button */}
          <a
            href={project.code}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.button}
          >
            <FaGithub className={styles.icon} /> Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
