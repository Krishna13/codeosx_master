import React from 'react'
import logo from "../logo.svg"
function Footer() {
    const year = new Date().getFullYear()
    return (
        <footer className="text-gray-400 bg-gray-900 body-font">
            <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
                <a href="/#" className="flex title-font font-medium items-center md:justify-start justify-center text-white">
                    <img className="w-10 h-10 rounded-full" viewBox="0 0 24 24" src={logo} alt="logo" />
                    <span className="ml-3 text-xl">CodeOsX</span>
                </a>
                <p className="text-sm text-gray-400 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:mt-0 mt-4">© {year} CodeOsX — Coder's Hub
                </p>
                <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start text-lg">
                    An Innitiative by&nbsp;<span className="text-red-500">Kw</span><span className="text-blue-500">infosys</span>
                </span>
            </div>
        </footer>
    )
}

export default Footer
