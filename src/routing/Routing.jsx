import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from '../layouts/Layout'
import Home from '../pages/home/Home'
import About from '../pages/about/About'
import Portfolio from '../pages/portfolio/Portfolio'
import Resume from '../pages/resume/Resume'
import Contact from '../pages/contact/Contact'

const Routing = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />} >
                    <Route index element={<Home />} />
                    <Route path='home' element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="portfolio" element={<Portfolio />} />
                    <Route path="resume" element={<Resume />} />
                    <Route path="contact" element={<Contact />} />
                </Route>
            </Routes>
        </BrowserRouter >
    )
}

export default Routing
