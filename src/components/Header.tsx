import { SunIcon, MoonIcon } from "./Icons";
import styles from "./Header.module.css";

interface HeaderProps {
  theme: "light" | "dark";
  onToggleTheme: () => void;
}

export const Header = ({ theme, onToggleTheme }: HeaderProps) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerHeight = 80;
      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - headerHeight,
        behavior: "smooth",
      });
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <a href="#" className={styles.logo}>
          <span className={styles.bracket}></span>
          ChangyeoPolio
          <span className={styles.bracket}></span>
        </a>

        <nav className={styles.nav}>
          <button onClick={() => scrollTo("about")} className={styles.navLink}>
            &lt;about/&gt;
          </button>
          <button onClick={() => scrollTo("skills")} className={styles.navLink}>
            &lt;skills/&gt;
          </button>
          <button
            onClick={() => scrollTo("contact")}
            className={styles.navLink}
          >
            &lt;contact/&gt;
          </button>

          <button
            className={styles.themeToggle}
            onClick={onToggleTheme}
            aria-label="테마 전환"
          >
            {theme === "light" ? <SunIcon /> : <MoonIcon />}
          </button>
        </nav>
      </div>
    </header>
  );
};
