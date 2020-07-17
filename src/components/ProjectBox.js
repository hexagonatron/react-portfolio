import React from 'react';

const ProjectBox = ({project}) => {
    return (
        <div className="card-container col col-12 col-md-6 col-lg-4 col-xl-3 my-2 px-1">
            <div className="card col">
                <div className="card-img-top border mt-3">
                    <a href={project.deployedUrl} target="_blank"
                        rel="noopener noreferrer"><img src={project.thumbnailPath} alt="" className="img-fluid"/></a>
                        <div className="card-banner">
                            <h5>{project.title}</h5>
                        </div>
                        </div>
                    <div className="card-body d-flex flex-column align-items-center justify-content-between">
                        <p className="card-text text-center">
                            {project.description}
                            </p>
                        <p className="git-icon"><a href={project.githubUrl}><i
                            className="fab fa-github pl-1"></i></a></p>
                    </div>
                </div>
            </div>
    );
};

export default ProjectBox;