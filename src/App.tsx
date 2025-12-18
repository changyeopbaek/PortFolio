import { useTheme } from "./hooks/useTheme";
import { Header, Hero, About, Skills, Contact, Footer } from "./components";

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <Header theme={theme} onToggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
