import React from "react";

function Resume() {
    return (
        <section className='page-container'>
            <form>
                <h1>Resume</h1>
                <div>

                    <div className="column">
                        <a
                            className="button is-primary"
                            href={process.env.PUBLIC_URL + "/MTR.pdf"}
                            target="_blank" rel="noreferrer"
                        >
                            <span className="icon">
                                <i className="fas fa-download"></i>
                            </span>
                            <span className='res-link'>Download Miranda's Resume</span>
                        </a>
                    </div>
                </div>
            </form>
        </section>
    );
}

export default Resume;
