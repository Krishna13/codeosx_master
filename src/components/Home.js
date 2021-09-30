import React from 'react'
import {FaClipboard, FaCode, FaCogs} from 'react-icons/fa'
import { Link } from 'react-router-dom'
function Home() {
  return (
    <>
      <section className="text-gray-400 bg-gray-900 body-font">
        <div className=" container mx-auto flex px-5 py-24 items-center justify-center flex-col ">
          <div className="text-center lg:w-2/3 w-full">
            <h1 className=" animate-pulse title-font sm:text-6xl text-3xl mb-4 uppercase font-extrabold text-white " style={{ lineHeight: 1.3 }}> The Ultimate coding guidance platform </h1>
            <p className="leading-relaxed mb-8 text-xl"> CodeOsx will provide all the important and helpful coding guidance tools which will make your programming experience great </p>
            <div className="flex justify-center"> <Link to="/cheatsheets"><button className=" inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg "> Browse Capsules </button> </Link></div>
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h2 className="text-md text-indigo-500 font-semibold title-font mb-1">CODEOSX - CODER'S HUB</h2>
            <a href="//www.kwinfosys.com"><h1 className="sm:text-3xl text-2xl font-semibold title-font text-gray-900">An Initiative by <span className="text-red-500">Kw</span><span className="text-blue-500">infosys</span></h1></a>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="p-4 md:w-1/3">
              <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-red-500 text-white flex-shrink-0">
                    <FaCode />
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">Tech-Blog</h2>
                </div>
                <div className="flex-grow">
                  <p className="leading-relaxed text-base">Tech-Blogs will let you know all the technical fundamentals of technology</p>
                  <Link to="" className="mt-3 text-gray-500 inline-flex items-center">Coming Soon&nbsp;
                    <i className="far fa-clock"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                    <FaClipboard />
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">Cheatsheet Capsules</h2>
                </div>
                <div className="flex-grow">
                  <p className="leading-relaxed text-base">Cheatsheet Capsule is one of the coding guidance tool that will improve your coding experience</p>
                  <Link to="/cheatsheets" className="mt-3 text-indigo-500 inline-flex items-center">Get Started
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-red-500 text-white flex-shrink-0">
                    <FaCogs />
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">Developer Notes</h2>
                </div>
                <div className="flex-grow">
                  <p className="leading-relaxed text-base">These Notes will help you to code faster and easier which will enhance your knowledge</p>
                  <Link to="" className="mt-3 text-gray-500 inline-flex items-center">Coming Soon&nbsp;
                    <i className="far fa-clock"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
