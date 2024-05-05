import React from "react";
import "../public/intro.css";
function Intro(){
    return <div className="Introduction">
        <h3>Hello It’s me</h3>
        <h1>Aditya Raj Kaushik</h1>
        <ul>
            <li className="ab">And I’m a</li>
            <li className="cd"> Full-Stack Developer</li>
        </ul>
        <p className="descryption">Fueled by a passion for tech innovation, I aim to utilize my skills in Computer Science and Engineering as a developer, contributing meaningfully to dynamic projects and driving positive change.</p>
        <button className="button">Download CV</button>
    </div>
}

export default Intro;