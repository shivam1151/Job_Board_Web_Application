import React from 'react'
import { Button } from './ui/button'

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-6">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
                {/* Brand */}
                <div className="text-lg font-semibold">
                    <span className="text-blue-400">My</span>Website
                </div>

                {/* Social Media Links */}
                <div className="flex space-x-6 mt-4 md:mt-0">
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 text-xl">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 text-xl">
                        <i className="fab fa-facebook"></i>
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 text-xl">
                        <i className="fab fa-linkedin"></i>
                    </a>
                </div>
            </div>

            {/* Copyright Section */}
            <div className="text-center text-gray-400 text-sm mt-4">
                © {new Date().getFullYear()} MyWebsite. All rights reserved.
            </div>
        </footer>
    )
}

export default Footer