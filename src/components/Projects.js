import React from 'react';
// import PhotoList from './PhotoList';
// import { capitalizeFirstLetter } from '../utils/helpers';

function Projects(props) {
  // const { currentCategory } = props;
  return (
    <div>
    {props.projects.map((Projects) => (
        <div  className='whole-card'>
            <div>
            <p className="title" key={Projects.id}>
                            {Projects.title}
                        </p>
                <figure>
                    <a href={Projects.live} target="_blank" rel="noreferrer">
                        <img src={process.env.PUBLIC_URL + Projects.image} alt="Placeholder" />
                    </a>
                </figure>
            </div>
            <div className="card-content">
                <div className="media">
                    <div className="media-left"></div>
                    <div className="media-content">
                       
                    </div>
                </div>

                <div>
                    {Projects.description}
                    <div className="card">
                        <div>
                            <a
                                href={Projects.repo}
                                className="card-footer-item"
                                target="_blank" rel="noreferrer"
                            >
                                Repo
                            </a>
                            
                            <a
                                href={Projects.live}
                                className="card-footer-item"
                                target="_blank" rel="noreferrer"
                            >
                                Live Site
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    ))}

</div>
);
}
export default Projects;
