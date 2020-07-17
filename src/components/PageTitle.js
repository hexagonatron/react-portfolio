import React from 'react';

const PageTitle = (props) => {
    return (
        <div className="row">
            <div className="col col-12 portfolio-hero d-flex align-items-center justify-content-center">
                <h1 className="page-heading text-center">{props.title}</h1>
            </div>
        </div>
    );
};

export default PageTitle;