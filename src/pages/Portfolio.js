import React from 'react';

import PageTitle from '../components/PageTitle';
import ProjectBox from '../components/ProjectBox';

const Portfolio = () => {

    const projects = [
        {
            title:"Hexagonal Minesweeper",
            description:"Hexagonal minesweeper made with Javascript, HTML and CSS",
            deployedUrl:"https://hexagonatron.github.io/HexagonalMinesweeper/",
            thumbnailPath:"/img/hex-sweeper.jpg",
            githubUrl:"https://github.com/hexagonatron/HexagonalMinesweeper"
        },
        {
            title:"Full-Stack E-Commerce App",
            description:"An E-commerce store using Vue, MySQL, Node and Express.",
            deployedUrl:"https://lion-movie-store.herokuapp.com/",
            thumbnailPath:"/img/movie-store.jpg",
            githubUrl:"https://github.com/hexagonatron/LionStoreApp"
        },
        {
            title:"Movie Guessing Game",
            description:"A movie guessing game that makes api calls to the OMDb api with javascript logic and custom CSS",
            deployedUrl:"https://hexagonatron.github.io/MovieMash/play.html",
            thumbnailPath:"/img/movie-mash.jpg",
            githubUrl:"https://github.com/hexagonatron/MovieMash"
        },
        {
            title:"Password Generator",
            description:"A simple password generator using JQuery and custom CSS",
            deployedUrl:"https://hexagonatron.github.io/AnotherPasswordGenerator/",
            thumbnailPath:"/img/pass-gen.jpg",
            githubUrl:"https://github.com/hexagonatron/AnotherPasswordGenerator"
        },
        {
            title:"Git Commit Scoreboard",
            description:"A class scoreboard that utilises the Github API built using NodeJS and Javascript.",
            deployedUrl:"https://git-commit-scoreboard.herokuapp.com/",
            thumbnailPath:"/img/git-board.jpg",
            githubUrl:"https://github.com/hexagonatron/GitCommitScoreBoardV2"
        },
        {
            title:"Giphy Boggle",
            description:"A group project that combines the Giphy API with a boggle API to make a fun word game. The layout utilises the CSS framework Semantic UI.",
            deployedUrl:"https://teamcabbn.github.io/GiphyBoggle/",
            thumbnailPath:"/img/giphy-boggle.jpg",
            githubUrl:"https://github.com/TeamCABBN/GiphyBoggle"
        },
        {
            title:"Weather Dashboard",
            description:"A simple weather dashboard the uses the open weather API to show a 5 day forecast for a user inputed city. I wrote my own CSS for this app in the style of neumorphism.",
            deployedUrl:"https://hexagonatron.github.io/WeatherDashboard/",
            thumbnailPath:"img/weather-dash.jpg",
            githubUrl:"https://github.com/hexagonatron/WeatherDashboard"
        },
        {
            title:"Daily Planner App",
            description:"An app to track daily tasks.",
            deployedUrl:"https://hexagonatron.github.io/DailyPlanner/",
            thumbnailPath:"/img/daily-planner.jpg",
            githubUrl:"https://github.com/hexagonatron/DailyPlanner"
        },
    ]

    return (
        <div>
            <PageTitle title="My Projects" />
            <div className="container">
                <div className="row py-3 align-items-stretch justify-content-around">
                    {projects.map((project, i) => <ProjectBox key={i} project={project} />)}
                </div>
            </div>
        </div>
    );
};

export default Portfolio;