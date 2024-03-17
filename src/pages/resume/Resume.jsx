import React from 'react';

const Resume = () => {
    return (
        <div>
            <div className="bg-gray-900 text-white min-h-screen py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* <h2 className="text-3xl font-bold mb-3">Resume</h2> */}
                    <div>
                        <iframe
                            title="CV"
                            src="/Resume.pdf"
                            style={{ width: '100%', height: '1000px' }}
                            frameBorder="0"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Resume;
