import React, { useState } from "react";

function Projects() {
  const projectsData = [
    {
      title: "Project 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec leo id orci suscipit tempor eu id ligula.",
      image: "project1.jpg",
      deployedLink: "https://example.com/project1",
      githubRepo: "https://github.com/username/project1",
    },
    {
      title: "Project 2",
      description:
        "Sed euismod arcu arcu, vitae scelerisque mi eleifend ac. Proin fringilla odio id libero pulvinar, vitae dictum nibh feugiat.",
      image: "project2.jpg",
      deployedLink: "https://example.com/project2",
      githubRepo: "https://github.com/username/project2",
    },
    {
      title: "Project 3",
      description:
        "Sed euismod arcu arcu, vitae scelerisque mi eleifend ac. Proin fringilla odio id libero pulvinar, vitae dictum nibh feugiat.",
      image: "project3.jpg",
      deployedLink: "https://example.com/project2",
      githubRepo: "https://github.com/username/project2",
    },
    {
      title: "Project 4",
      description:
        "Sed euismod arcu arcu, vitae scelerisque mi eleifend ac. Proin fringilla odio id libero pulvinar, vitae dictum nibh feugiat.",
      image: "project4.jpg",
      deployedLink: "https://example.com/project2",
      githubRepo: "https://github.com/username/project2",
    },
    // Add more project objects as needed
  ];

  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="projects-container">
      <h2>Projects</h2>
      <div className="projects">
        {projectsData.map((project, index) => (
          <div
            key={index}
            className="project"
            onClick={() => handleProjectClick(project)}
          >
            <img src={project.image} alt={project.title} />
            <div className="overlay">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
      {selectedProject && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <h3>{selectedProject.title}</h3>
            <p>{selectedProject.description}</p>
            <p>
              <a
                href={selectedProject.deployedLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            </p>
            <p>
              <a
                href={selectedProject.githubRepo}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub Repo
              </a>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Projects;
