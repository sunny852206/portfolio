import { useState } from "react";
import ScreenshotModal from "./ScreenshotModal";

// Screenshot imports
import chopmeet1 from "../screenshots/chopmeet_1.png";
import chopmeet2 from "../screenshots/chopmeet_2.png";
import chopmeet3 from "../screenshots/chopmeet_3.png";
import chopmeet4 from "../screenshots/chopmeet_4.png";

import weatherapp1 from "../screenshots/weatherapp_1.jpeg";
import weatherapp2 from "../screenshots/weatherapp_2.jpeg";
import weatherapp3 from "../screenshots/weatherapp_3.jpeg";
import weatherapp4 from "../screenshots/weatherapp_4.jpeg";
import weatherapp5 from "../screenshots/weatherapp_5.jpeg";

import database1 from "../screenshots/database_1.png";
import database2 from "../screenshots/database_2.png";

import catlorie1 from "../screenshots/catlorie.jpg";

const Projects = () => {
  const featuredProjects = [
    {
      id: 1,
      title: "Chop Meet",
      shortDescription:
        "Social meal-matching app connecting people through dining experiences",
      description:
        "A React Native mobile app where users can create or join dining events, add details like time, place, and vibe, and chat in real time. Features include vibe-based filters, event creation, and real-time group chat with unread counts and message previews. Internal testing with 50+ users showed a 40% increase in event participation.",
      tags: ["React Native", "Firebase"],
      type: "mobile",
      status: "screenshots",
      imageUrl: chopmeet1,
      githubUrl: "https://github.com/sunny852206/chop-meet",
      liveUrl: null,
      screenshots: [
        { url: chopmeet1, caption: "Event discovery and matching" },
        { url: chopmeet2, caption: "Real-time group chat" },
        { url: chopmeet3, caption: "Event details and RSVP" },
        { url: chopmeet4, caption: "User profile and preferences" },
      ],
    },
    {
      id: 2,
      title: "Weather App",
      shortDescription:
        "AI-powered weather forecasts with interactive maps and insights",
      description:
        "A Java-based mobile weather application with Firebase backend, providing location-based weather forecasts with interactive maps and AI-generated insights using Gemini LLM. Features include weather detail screens, dynamic custom themes, and modular architecture. Includes automated tests for quality assurance.",
      tags: ["Java", "Gemini AI"],
      type: "mobile",
      status: "screenshots",
      imageUrl: weatherapp1,
      githubUrl: null,
      liveUrl: null,
      screenshots: [
        { url: weatherapp1, caption: "Weather overview and forecast" },
        { url: weatherapp2, caption: "Detailed weather information" },
        { url: weatherapp3, caption: "Interactive weather maps" },
        { url: weatherapp4, caption: "AI-powered insights" },
        { url: weatherapp5, caption: "Custom themes" },
      ],
    },
    {
      id: 3,
      title: "Database Dashboard",
      shortDescription:
        "Unified visualization platform for multi-database systems",
      description:
        "A web application built with Python and Dash that integrates three different databases (MySQL, MongoDB, and Neo4j) for unified data visualization. Users can interact with datasets from multiple database systems in one place through custom widgets. Demonstrates expertise in multi-database integration and data visualization.",
      tags: ["Python", "Dash"],
      type: "web",
      status: "screenshots",
      imageUrl: database1,
      githubUrl: null,
      liveUrl: null,
      screenshots: [
        { url: database1, caption: "Multi-database integration dashboard" },
        { url: database2, caption: "Data visualization widgets" },
      ],
    },
    {
      id: 4,
      title: "Catlorie",
      shortDescription:
        "Mobile health tracker for cat owners to monitor pets' nutrition",
      description:
        "A React Native mobile app with Expo CLI for cat owners to monitor their pets' health situations. Supports CRUD operations for users to add meals for their pets as a calories counter and meals tracker. User credentials were stored and managed through Firebase, ensuring secure authentication and data persistence.",
      tags: ["React Native", "Expo", "Firebase"],
      type: "mobile",
      status: "screenshots",
      imageUrl: catlorie1,
      githubUrl: "https://github.com/sunny852206/catlorie",
      liveUrl: null,
      screenshots: [
        { url: catlorie1, caption: "Pet meal tracking and health monitoring" },
      ],
    },
  ];

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">My Work</span>
          <h2 className="section-title">Featured Projects</h2>
        </div>

        <div className="projects-magazine">
          {featuredProjects.map((project) => (
            <article key={project.id} className="magazine-card">
              <div className="magazine-image">
                {project.imageUrl ? (
                  <img src={project.imageUrl} alt={project.title} />
                ) : (
                  <div className="magazine-placeholder">
                    <span className="placeholder-icon">
                      {project.type === "mobile" ? "📱" : "🌐"}
                    </span>
                  </div>
                )}
                <div className="magazine-overlay">
                  <span className="magazine-type">
                    {project.type === "mobile" ? "Mobile" : "Web"}
                  </span>
                </div>
              </div>

              <div className="magazine-content">
                <h3 className="magazine-title">{project.title}</h3>
                <p className="magazine-subtitle">{project.shortDescription}</p>

                <div className="magazine-tech">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tech-tag">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="magazine-actions">
                  {project.status === "screenshots" && (
                    <button
                      onClick={() => openModal(project)}
                      className="magazine-btn"
                    >
                      Details
                    </button>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="magazine-btn"
                    >
                      Code
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="magazine-btn primary"
                    >
                      Live
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="projects-footer">
          <p className="projects-note">
            Additional projects currently in development and will be added soon.
          </p>
        </div>

        <ScreenshotModal
          isOpen={modalOpen}
          onClose={closeModal}
          project={selectedProject}
        />
      </div>
    </section>
  );
};

export default Projects;
