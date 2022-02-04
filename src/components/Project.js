import React from "react";
// import PhotoList from './PhotoList';
// import { capitalizeFirstLetter } from '../utils/helpers';

function Project(props) {
    return (
        <div>
            {props.projects.map((project) => (
                <div  className='whole-card'>
                    <div>
                    <p className="title" key={project.id}>
                                    {project.title}
                                </p>
                        <figure>
                            <a href={project.live}>
                                <img className="img"src={process.env.PUBLIC_URL + project.image} alt="Placeholder" />
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
                            {project.description}
                            <div className="card">
                                <div>
                                    <a
                                        href={project.repo}
                                        className="card-footer-item"

                                    >
                                        Repository
                                    </a>
                                    
                                    <a
                                        href={project.live}
                                        className="card-footer-item"
                                    
                                    >
                                        Deployed Application
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

export default Project;
