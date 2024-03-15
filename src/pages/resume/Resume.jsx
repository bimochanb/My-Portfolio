import React from 'react';
import { Document, Page } from 'react-pdf';

const Resume = () => {
    return (
        <div>
            <div className="bg-gray-900 text-white min-h-screen py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold mb-8">Resume</h2>
                    <div className="max-w-md mx-auto">
                        <iframe
                            src="C:\Users\bmoch\Downloads\Bimochan Bajimaya Resume.pdf"
                            width="100%"
                            height="100%"
                            title="Resume"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Resume;
