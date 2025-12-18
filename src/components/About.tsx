import {
  interests,
  timeline,
  awards,
  overseasExperience,
} from "../data/portfolio";
import styles from "./About.module.css";

export const About = () => {
  return (
    <section className={styles.section} id="about">
      <div className={styles.container}>
        <h2 className={styles.title}>&lt;about/&gt;</h2>

        {/* Self Introduction */}
        <div className={`${styles.card} ${styles.introCard}`}>
          <h3 className={styles.cardTitle}>자기소개</h3>
          <p className={styles.introText}>
            스타트업, 프랜차이즈 본사에서의 근무 경험 그리고 부트캠프 수료
            경험까지 <br /> PM/기획자로서 풍부한 경험과 팀원들과 원만하게 지낼
            수 있는 사교성까지 갖추어 <br />
            좋은 서비스를 만들어가는 데에 있어서 역량을 충분히 가지고 있다고
            생각합니다.
            <br />
          </p>
        </div>

        {/* Interests */}
        <div className={styles.card}>
          <h3 className={styles.cardTitle}>관심분야</h3>
          <div className={styles.interestsGrid}>
            {interests.map((interest, index) => (
              <div key={index} className={styles.interestItem}>
                <div className={styles.interestIcon}>{interest.icon}</div>
                <span>{interest.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline - Career */}
        <div className={styles.card}>
          <h3 className={styles.cardTitle}>경력 및 이력</h3>
          <div className={styles.timeline}>
            {timeline.map((item, index) => (
              <div key={index} className={styles.timelineItem}>
                <div className={styles.timelineDot}></div>
                <div className={styles.timelineContent}>
                  <span className={styles.timelineDate}>{item.date}</span>
                  <h4 className={styles.timelineTitle}>{item.company}</h4>
                  <p className={styles.timelineDesc}>{item.role}</p>
                  {item.description && (
                    <p className={styles.timelineDetail}>{item.description}</p>
                  )}
                  {item.details && item.details.length > 0 && (
                    <ul className={styles.detailsList}>
                      {item.details.map((detail, detailIndex) => (
                        <li key={detailIndex}>{detail}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Awards */}
        {awards.length > 0 && (
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>수상</h3>
            <div className={styles.awardsList}>
              {awards.map((award, index) => (
                <div key={index} className={styles.awardItem}>
                  <span className={styles.awardDate}>{award.date}</span>
                  <div className={styles.awardContent}>
                    <h4 className={styles.awardTitle}>{award.title}</h4>
                    <p className={styles.awardOrg}>{award.organization}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Overseas Experience */}
        <div className={styles.card}>
          <h3 className={styles.cardTitle}>해외경험</h3>
          <div className={styles.experienceItem}>
            <div className={styles.experienceHeader}>
              <span className={styles.experiencePeriod}>
                {overseasExperience.period}
              </span>
              <span className={styles.experienceLocation}>
                {overseasExperience.location}
              </span>
            </div>
            <p className={styles.experienceDesc}>
              {overseasExperience.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
