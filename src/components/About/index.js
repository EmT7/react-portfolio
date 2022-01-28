import React from 'react';
import coverImage from '../../assets/cover/cover-image.jpg';
function About() {
  return (
    <section className="my-5">
      <h1 id="about">About Me</h1>
      <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
      <div className="my-2">
        <p>
        Hello! I'm Miranda, a blossoming full-stack developer from the beautiful Oregon Coast! I enjoy a wide variety of things, from web design and photography to hunting and fishing. My greatest achievements are my 3 children, they are my driving motivation and inspiration in everything I do. 
        </p>
        <p>
        My desire is that my portfolio will show case my personality and new talents as a web developer and overall give you a sneak peek at who I am! Please feel free to reach out with any opportunities and most of all, enjoy my page!
        </p>
      </div>
    </section>
  );
}

export default About;
