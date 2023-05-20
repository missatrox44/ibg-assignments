import React from "react";

function AboutMe() {
  return (
    <div className="about-me-container">
      <h1>About Me</h1>
      <div className="content">
        <img src="profile2.png" alt="Profile" className="profile-image" />
        <p className="description">
          Hi, I'm [Your Name]! I'm a passionate developer with experience in
          [programming languages or technologies]. I love creating web
          applications and solving problems through code. In my free time, I
          enjoy working on personal projects and expanding my knowledge in the
          ever-evolving field of technology.
        </p>
        <p className="description">
          Curabitur eu mauris et eros dictum imperdiet vitae in leo. Phasellus
          aliquet tellus nunc, ut semper mauris mollis sit amet. Proin pulvinar
          erat tincidunt elit faucibus, vitae semper arcu rutrum. Pellentesque
          scelerisque lacus quis euismod accumsan. Praesent fringilla aliquam
          faucibus. Etiam urna massa, dapibus id sem vehicula, consequat finibus
          enim. Aenean lorem ipsum, luctus a tortor eu, consectetur aliquam
          dolor. Nam dui enim, dapibus finibus orci ac, aliquet lobortis sem.
          Nam quis lorem dictum, ullamcorper dui non, sagittis eros. Aenean
          consequat diam ut laoreet vehicula. Duis est nulla, pharetra a
          ultrices et, venenatis ac sem. Vestibulum sed arcu vel lacus molestie
          fringilla. Nulla nec orci non metus placerat vulputate.
        </p>
      </div>
    </div>
  );
}

export default AboutMe;
