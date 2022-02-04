import React, { useState } from 'react';
import './App.css';
import Nav from './components/Nav';
import About from './components/About';
import Projects from './components/Projects';
import ContactForm from './components/Contact';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';


function App() {
  const [categories] = useState([
    {
      name: 'Projects',
      description: 'Welcome to my Coding Projects. This will highlight some of the modules, homework challenges and projects I have completed during my courses.'
    },
      {
      name: 'Resume',
      description: 'I have experience in the medical field, electric industry, amateur photography, journalism, food and beverage service, and more. I am currently expanding into the world of full-stack web development. I have completed a course through University of Oregon, as well as other online resources and development programs. I am versed with HTML, CSS, JavaScript, APIs, Node, Express, SQL, No Sql, React, Computer Science, Github, Slack, and more. I am open to many new opportunities and looking for an employer that values what I can offer and encourages growth and advancement opportunities.',
    },
    
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const [contactSelected, setContactSelected] = useState(true);

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      <main>
        {!contactSelected ? (
          <>
            <Projects currentCategory={currentCategory}></Projects>
            <About currentCategory={currentCategory}></About>
            <Resume currentCategory={currentCategory}></Resume>
            <Portfolio currentCategory={currentCategory}></Portfolio>
          </>
        ) : (
          <ContactForm currentCategory={currentCategory}></ContactForm>
          
        )}
        
      </main>
      
    </div>
  );
}

export default App;
