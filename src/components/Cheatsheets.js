import React from 'react'
import { Link } from 'react-router-dom'
function Cheatsheets() {
    return (
        <>
            <section className="text-gray-400 bg-gray-900 body-font">
                <div className=" container mx-auto flex px-5 py-24 items-center justify-center flex-col ">
                    <div className="text-center lg:w-2/3 w-full">
                        <h1 className=" animate-pulse title-font sm:text-6xl text-3xl mb-4 uppercase font-extrabold text-white " style={{ lineHeight: 1.3 }}> Cheatsheet Capsules </h1>
                    </div>
                </div>
            </section>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        <div className="p-4 md:w-1/3">
                            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">

                                <div className="p-6">
                                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">HTML</h2>
                                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">HTML Cheatsheet Capsule</h1>
                                    <p className="leading-relaxed mb-3"></p>
                                    <div className="flex items-center flex-wrap ">
                                        <Link to="/cheatsheets/html" className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Get Started
                                            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                <path d="M5 12h14"></path>
                                                <path d="M12 5l7 7-7 7"></path>
                                            </svg>
                                        </Link>
                                        <span className="text-gray-400 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pl-3 py-1">
                                            <i class="far fa-check-circle"></i>&nbsp;Published
                                        </span>
                                        {/* <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                                            <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                            </svg>6
                                        </span> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/3">
                            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">

                                <div className="p-6">
                                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">PYTHON</h2>
                                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">PYTHON Cheatsheet Capsule</h1>
                                    <p className="leading-relaxed mb-3"></p>
                                    <div className="flex items-center flex-wrap ">
                                        <Link to="#" className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Get Started
                                            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                <path d="M5 12h14"></path>
                                                <path d="M12 5l7 7-7 7"></path>
                                            </svg>
                                        </Link>
                                        <span className="text-gray-400 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pl-3 py-1">
                                            <i class="far fa-clock"></i>&nbsp;Comming Soon
                                        </span>
                                        {/* <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                                            <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                            </svg>6
                                        </span> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/3">
                            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">

                                <div className="p-6">
                                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CSS</h2>
                                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">CSS Cheatsheet Capsule</h1>
                                    <p className="leading-relaxed mb-3"></p>
                                    <div className="flex items-center flex-wrap ">
                                        <Link to="#" className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Get Started
                                            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                <path d="M5 12h14"></path>
                                                <path d="M12 5l7 7-7 7"></path>
                                            </svg>
                                        </Link>
                                        <span className="text-gray-400 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pl-3 py-1">
                                            <i class="far fa-clock"></i>&nbsp;Comming Soon
                                        </span>
                                        {/* <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                                            <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                            </svg>6
                                        </span> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Cheatsheets
