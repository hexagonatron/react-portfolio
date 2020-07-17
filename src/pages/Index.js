import React from 'react';

import Hero from '../components/Hero';

const Index = () => {
    return (
        <div>
            <Hero/>
            <div class="container col col-12 col-md-8 px-4 pb-1">
            <h2 class="pt-4 text-center">About Me</h2>
            <div class="about-text">
                <p> I'm soon to be a full stack web developer with a flair for complex yet simple to read code. For
                    years I've been programming various things whether it be Arduinos to Chrome extensions to basic
                    websites.</p>
                <p>I'm ready to take my career to the next step and become empployed as a full stack web developer.
                    Enjoy your stay here and please have a look and my work and reach out when you're ready.</p>
                <p>I look forward to working with you.</p>
                <p class="signiture">
                    Ben
                </p>
            </div>
        </div>
        </div>
    );
};

export default Index;