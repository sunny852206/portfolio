const Skills = () => {
  const skills = [
    { name: 'JavaScript', icon: 'JS' },
    { name: 'Java', icon: 'J' },
    { name: 'Python', icon: 'PY' },
    { name: 'C#', icon: 'C#' },
    { name: 'React', icon: '⚛' },
    { name: 'React Native', icon: 'RN' },
    { name: 'ASP.NET', icon: '.NET' },
    { name: 'PostgreSQL', icon: 'PG' },
    { name: 'MySQL', icon: 'SQL' },
    { name: 'MongoDB', icon: 'M' },
    { name: 'Neo4j', icon: 'N4J' },
    { name: 'Firebase', icon: 'FB' },
    { name: 'AWS', icon: 'AWS' },
    { name: 'HTML5', icon: 'H5' },
    { name: 'CSS', icon: 'CSS' },
  ];

  return (
    <section id="skills" className="skills section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">My Expertise</span>
          <h2 className="section-title">Skills & Technologies</h2>
        </div>
        <div className="skills-grid">
          {skills.map((skill) => (
            <div key={skill.name} className="skill-item" data-skill={skill.name}>
              <div className="skill-icon">{skill.icon}</div>
              <span className="skill-name">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
