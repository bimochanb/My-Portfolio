import React from 'react'
import './Home.css';

const Home = () => {
    return (
        <div className="bg-gray-900 text-white min-h-screen flex justify-center items-center">
            <div className="max-w-3xl mx-auto text-center">
                <div className="mb-8">
                    <img src='/images/bimo.jpg' alt="Profile" className="rounded-full w-64 h-64 border-4 border-gradient-blue-purple mx-auto mb-4" />
                </div>
                <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
                <p className="text-lg mb-8">I'm excited to showcase my work and skills.</p>
                <a href="/portfolio" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300">View Portfolio</a>
            </div>
        </div>
    )
}

export default Home
