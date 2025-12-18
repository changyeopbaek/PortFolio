import { skillCategories } from "../data/portfolio";
import { DiscordIcon, ZeplinIcon } from "./Icons";
import invisionIcon from "../assets/invision.png";
import styles from "./Skills.module.css";

export const Skills = () => {
  const renderSkillIcon = (skill: {
    name: string;
    icon: string;
    isSvg?: boolean;
  }) => {
    if (skill.isSvg) {
      if (skill.icon === "discord") return <DiscordIcon />;
      if (skill.icon === "zeplin") return <ZeplinIcon />;
    }
    if (skill.name === "InVision") {
      return (
        <img src={invisionIcon} alt={skill.name} className={styles.skillIcon} />
      );
    }
    return (
      <img src={skill.icon} alt={skill.name} className={styles.skillIcon} />
    );
  };

  return (
    <section className={styles.section} id="skills">
      <div className={styles.container}>
        <h2 className={styles.title}>&lt;skills/&gt;</h2>

        <div className={styles.grid}>
          {skillCategories.map((category, index) => (
            <div key={index} className={styles.card}>
              <h3 className={styles.categoryTitle}>
                <span className={styles.categoryIcon}>{category.icon}</span>
                {category.title}
              </h3>
              <div className={styles.skillsList}>
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className={styles.skillItem}>
                    <div className={styles.skillIconWrapper}>
                      {renderSkillIcon(skill)}
                    </div>
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
