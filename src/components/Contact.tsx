import { MailIcon } from "./Icons";
import styles from "./Contact.module.css";

export const Contact = () => {
  return (
    <section className={styles.section} id="contact">
      <div className={styles.container}>
        <h2 className={styles.title}>&lt;contact/&gt;</h2>

        <div className={styles.content}>
          <p className={styles.text}>
            프로젝트 협업이나 채용 문의는 아래 버튼을 클릭해 주세요
          </p>

          <div className={styles.buttons}>
            <a
              href="mailto:martinbaek94@gmail.com"
              className={`${styles.button} ${styles.primary}`}
            >
              <MailIcon />
              메일 보내기
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
