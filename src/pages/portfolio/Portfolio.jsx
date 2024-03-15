import React from 'react';
const projects = [
    {
        id: 1,
        title: "Project 1",
        image: "", // Replace with your project image URL
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et semper nisi.",
        link: "/project1"
    },
    {
        id: 2,
        title: "Project 2",
        image: "project2.jpg", // Replace with your project image URL
        description: "Vestibulum luctus, odio vel tempor dictum, velit leo egestas felis, vel euismod sem mi nec erat.",
        link: "/project2"
    },
    {
        id: 2,
        title: "Project 2",
        image: "project2.jpg", // Replace with your project image URL
        description: "Vestibulum luctus, odio vel tempor dictum, velit leo egestas felis, vel euismod sem mi nec erat.",
        link: "/project2"
    },
    {
        id: 2,
        title: "Project 2",
        image: "project2.jpg", // Replace with your project image URL
        description: "Vestibulum luctus, odio vel tempor dictum, velit leo egestas felis, vel euismod sem mi nec erat.",
        link: "/project2"
    },
    // Add more projects as needed
];

const Portfolio = () => {
    return (
        <div className="bg-gray-900 text-white min-h-screen py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold mb-8">Portfolio</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map(project => (
                        <div key={project.id} className="bg-gray-800 rounded-lg overflow-hidden shadow-md">
                            <img src={project.image} alt={project.title} className="w-full h-64 object-cover" />
                            <div className="p-4">
                                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                                <p className="text-gray-300">{project.description}</p>
                                <a href={project.link} className="block mt-4 text-blue-500 hover:text-blue-600">View Project</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};


export default Portfolio;
