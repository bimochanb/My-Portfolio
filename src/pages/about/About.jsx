import React from 'react';
import './About.css';
import profileImage from './bimo.jpg'

const About = () => {
    return (
        <div>
            <div className="bg-gray-900 text-white min-h-screen flex justify-center items-center">
                <div className="max-w-4xl mx-auto text-center p-8">
                    <h2 className="text-3xl font-bold mb-10 mt-0">About Me</h2>
                    <div className="mb-8">
                        <img src={profileImage} alt="Profile" className="rounded-full w-64 h-64 border-4 border-gradient-blue-purple mx-auto mb-4" />
                    </div>
                    <div className="mb-8">
                        <h3 className="text-3xl font-bold mb-2">Bimochan Bajimaya</h3>
                        <p className="text-lg text-center text-gray-300">Software Developer</p>
                    </div>
                    <p className="text-lg">I am a passionate developer with a strong interest in web development and software engineering. I love building projects and solving problems using code. My goal is to continually improve my skills and contribute to meaningful projects.</p>
                </div>
            </div>        </div>
    );
}

export default About;
