import React from "react";

function Experience() {
  const experiences = [
    {
      company: "ABC Company",
      position: "Software Engineer",
      duration: "June 2019 - Present",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec leo id orci suscipit tempor eu id ligula.",
    },
    {
      company: "XYZ Corporation",
      position: "Frontend Developer",
      duration: "January 2017 - May 2019",
      description:
        "Sed euismod arcu arcu, vitae scelerisque mi eleifend ac. Proin fringilla odio id libero pulvinar, vitae dictum nibh feugiat.",
    },
    {
      company: "PQR Solutions",
      position: "Full Stack Developer",
      duration: "August 2015 - December 2016",
      description:
        "Maecenas nec enim nec justo iaculis rhoncus nec vitae risus. Nullam tincidunt felis ut ex consequat convallis.",
    },
    {
      company: "LMN Technologies",
      position: "Web Developer",
      duration: "March 2014 - July 2015",
      description:
        "Curabitur nec lorem at nisi ultrices fermentum. Duis posuere purus sed vestibulum efficitur.",
    },
  ];

  return (
    <div className="experience-container">
      <h2>Work Experience</h2>
      <div className="experiences">
        {experiences.map((experience, index) => (
          <div key={index} className="experience">
            <h3>{experience.company}</h3>
            <p className="position">{experience.position}</p>
            <p className="duration">{experience.duration}</p>
            <p className="description">{experience.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
