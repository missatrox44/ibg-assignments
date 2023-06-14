import React from "react";

function Education() {
  const educationData = [
    {
      college: "University of ABC",
      degree: "Bachelor of Science",
      type: "Major",
      honors: "Summa Cum Laude",
      yearsAttended: "2015 - 2019",
    },
    {
      college: "XYZ College",
      degree: "Master of Arts",
      type: "Minor",
      honors: "Dean's List",
      yearsAttended: "2019 - 2021",
    },
    {
      college: "PQR University",
      degree: "Bachelor of Technology",
      type: "Major",
      honors: "Magna Cum Laude",
      yearsAttended: "2012 - 2016",
    },
    {
      college: "LMN College",
      degree: "Associate of Science",
      type: "Minor",
      honors: "",
      yearsAttended: "2010 - 2012",
    },
  ];

  return (
    <div className="education-container">
      <h2>Education</h2>
      <div className="education">
        {educationData.map((education, index) => (
          <div key={index} className="education-item">
            <h3>{education.college}</h3>
            <p className="degree">{education.degree}</p>
            <p className="type">{education.type}</p>
            {education.honors && <p className="honors">{education.honors}</p>}
            <p className="years-attended">{education.yearsAttended}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Education;
