import { projects } from "../data/portfolio";
import styles from "./Projects.module.css";

export const Projects = () => {
  return (
    <section className={styles.section} id="projects">
      <div className={styles.container}>
        <h2 className={styles.title}>&lt;projects/&gt;</h2>

        <div className={styles.grid}>
          {projects.map((project, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.imageWrapper}>
                <div className={styles.placeholder}>
                  <span>{project.emoji}</span>
                </div>
              </div>
              <div className={styles.content}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDesc}>{project.description}</p>
                <div className={styles.tags}>
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
