import { MailIcon } from "./Icons";
import styles from "./Contact.module.css";

export const Contact = () => {
  const handleMailClick = () => {
    const email = "martinbaek94@gmail.com";
    const subject = encodeURIComponent("문의");
    const body = encodeURIComponent(
      "안녕하세요,\n\n포트폴리오를 보고 연락드립니다.\n\n"
    );
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`;
    window.open(gmailUrl, "_blank");
  };

  return (
    <section className={styles.section} id="contact">
      <div className={styles.container}>
        <h2 className={styles.title}>&lt;contact/&gt;</h2>

        <div className={styles.content}>
          <p className={styles.text}>
            프로젝트 협업이나 채용 문의는 아래 버튼을 클릭해 주세요
          </p>

          <div className={styles.buttons}>
            <button
              onClick={handleMailClick}
              className={`${styles.button} ${styles.primary}`}
            >
              <MailIcon />
              메일 보내기
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
