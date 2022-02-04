import React from "react";

function Resume() {
    return (
        <section className='page-container'>
            <form>
        
                <h4>I have experience in the medical field, electric industry, amateur photography, journalism, food and beverage service, and more. I am currently expanding into the world of full-stack web development. I have completed a course through University of Oregon, as well as other online resources and development programs. I am versed with HTML, CSS, JavaScript, APIs, Node, Express, SQL, No Sql, React, Computer Science, Github, Slack, and more. I am open to many new opportunities and looking for an employer that values what I can offer and encourages growth and advancement opportunities.</h4>
                <div>

                    <div className="column">
                        <a
                            className="button is-primary"
                            href={process.env.PUBLIC_URL + "/MTR.pdf"}
                            // target="_blank" rel="noreferrer"
                        >
                            <span className="icon">
                                <i className="fas fa-download"></i>
                            </span>
                            <span className='res-link'>Download my Resume
                            </span>
                        </a>
                    </div>
                </div>
            </form>
        </section>
    );
}

export default Resume;