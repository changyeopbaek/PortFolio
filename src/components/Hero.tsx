import { useTypingEffect } from "../hooks/useTypingEffect";
import { DownloadIcon } from "./Icons";
import styles from "./Hero.module.css";

export const Hero = () => {
  const { displayedText } = useTypingEffect(
    " 좋은 서비스가 무엇인지 항상 고민하며 설계하는 백창엽입니다.",
    100,
    1000
  );

  const handleDownload = () => {
    try {
      const link = document.createElement("a");
      link.href = "/resume.pdf";
      link.download = "백창엽_이력서.pdf";
      link.target = "_blank";

      link.onerror = () => {
        alert(
          "이력서 파일을 찾을 수 없습니다.\n\n사용 방법:\n1. 이력서 PDF 파일을 public 폴더에 추가\n2. 파일명을 resume.pdf로 지정"
        );
      };

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      alert(
        "이력서 다운로드 중 오류가 발생했습니다.\n\n사용 방법:\n1. 이력서 PDF 파일을 public 폴더에 추가\n2. 파일명을 resume.pdf로 지정"
      );
    }
  };

  const handlePortfolio1 = () => {
    window.open("/portfolio-1.html", "_blank");
  };

  const handlePortfolio2 = () => {
    window.open("/portfolio-2.html", "_blank");
  };

  const handleScrollDown = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      const headerHeight = 80;
      const targetPosition =
        aboutSection.getBoundingClientRect().top +
        window.pageYOffset -
        headerHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className={styles.hero} id="hero">
      <div className={styles.content}>
        <h1 className={styles.title}>VICTORY LOVES PREPARATION</h1>
        <p className={styles.subtitle}>
          <span>{displayedText}</span>
          <span className={styles.cursor}>|</span>
        </p>

        <div className={styles.buttons}>
          <button
            onClick={handleDownload}
            className={`${styles.button} ${styles.primary}`}
          >
            <DownloadIcon />
            이력서 Download
          </button>
          <button
            onClick={handlePortfolio1}
            className={`${styles.button} ${styles.secondary} ${styles.tooltipButton}`}
            data-tooltip="2020년 ~ 2023년 까지의 경험이 담겨있습니다."
          >
            포트폴리오-A
          </button>
          <button
            onClick={handlePortfolio2}
            className={`${styles.button} ${styles.secondary} ${styles.tooltipButton}`}
            data-tooltip="2023년 ~ 2024년 까지의 경험이 담겨있습니다."
          >
            포트폴리오-B
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className={styles.scrollIndicator}
        onClick={handleScrollDown}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            handleScrollDown();
          }
        }}
        aria-label="아래로 스크롤"
      >
        <div className={styles.scrollText}>Scroll</div>
        <div className={styles.scrollArrow}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};
