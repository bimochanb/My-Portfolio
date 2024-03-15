import React from 'react';
import './Contact.css';

const Contact = () => {
    return (

        <div className="container px-[30rem] bg-gray-900 py-[6rem]">
            <h2>Contact Us</h2>
            <form>
                <div className="form-control">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" placeholder="Enter your name" />
                </div>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" placeholder="Enter your email" />
                </div>
                <div className="form-control">
                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" rows="6" placeholder="Enter your message"></textarea>
                </div>
                <button type="submit" className="btn">Send Message</button>
            </form>
        </div>
    );
}

export default Contact;
