import { useState, useEffect, useMemo } from "react";

const HeroTerminal = () => {
  const [nameText, setNameText] = useState("");
  const [nameComplete, setNameComplete] = useState(false);
  const fullName = "Sunny Lau";

  useEffect(() => {
    let nameIndex = 0;
    const nameInterval = setInterval(() => {
      if (nameIndex <= fullName.length) {
        setNameText(fullName.slice(0, nameIndex));
        nameIndex++;
      } else {
        clearInterval(nameInterval);
        setNameComplete(true);
      }
    }, 100);

    return () => clearInterval(nameInterval);
  }, []);

  const particles = useMemo(
    () =>
      Array.from({ length: 50 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: Math.random() * 3 + 1,
        duration: Math.random() * 20 + 10,
        delay: Math.random() * 5,
      })),
    []
  );

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="hero" className="hero-modern">
      <div className="particles-container">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="particle"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              animationDuration: `${particle.duration}s`,
              animationDelay: `${particle.delay}s`,
            }}
          />
        ))}
      </div>

      <div className="hero-modern-content">
        <p className="hero-greeting fade-in">Hello, I'm</p>

        <div className="hero-name-wrapper">
          <h1 className="hero-name">
            {nameText}
            {!nameComplete && <span className="typing-cursor">|</span>}
          </h1>
          <div
            className={`hero-gradient-line ${nameComplete ? "animate" : ""}`}
          ></div>
        </div>

        <p className={`hero-role ${nameComplete ? "show" : ""}`}>
          Full Stack Developer
        </p>

        <p className={`hero-info ${nameComplete ? "show" : ""}`}>
          MS Computer Science @ UIUC
        </p>

        <div
          className={`scroll-indicator ${nameComplete ? "show" : ""}`}
          onClick={scrollToAbout}
        >
          <span className="scroll-text">Explore</span>
          <div className="scroll-arrow">↓</div>
        </div>
      </div>
    </section>
  );
};

export default HeroTerminal;
