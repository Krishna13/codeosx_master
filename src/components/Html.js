import React from 'react'
import ReactPrismEditor from 'react-prism-editor'
function Html() {
    const language = "html"
    const theme = "okaidia"
    const readonly = true;
    const lineNumber = true;
    const clipboard = true;
    return (

        <>
            <section className="text-gray-600 body-font overflow-hidden">
                <div className="container px-5 py-24 mx-auto">
                    <div className="-my-8 divide-y-2 divide-w-50 divide-gray-100">
                        <h2 className="text-2xl font-bold text-center mb-5">Ultimate HTML Cheatsheet Capsule</h2>
                        <div className="py-8 flex flex-wrap md:flex-nowrap">
                            <div className="md:w-40 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                                <span className="font-semibold title-font text-gray-700 text-xl uppercase mb-2">Setting
                                    Up</span>
                                <span className="mt-1 text-gray-500 text-sm">Getting Ready</span>
                            </div>
                            <div className="md:flex-grow ml-2">
                                <h2 className="text-lg font-semibold text-gray-700 title-font mb-2">Boilerplate
                                    Code for HTMl</h2>
                                <p className="leading-relaxed">You don't need to download or install any of the
                                    compiler or software for creating webpages on the local computer. Use
                                    the code to setup your first html project in index.html file in your
                                    directory. You can populate the code by changing the title of your
                                    webpage in the title tag and by adding your content in body tag. </p>
                                <ReactPrismEditor
                                    language={language}
                                    theme={theme}
                                    code={`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>`}
                                    lineNumber={lineNumber}
                                    readOnly={readonly}
                                    clipboard={clipboard}
                                />
                                

                            </div>
                        </div>
                        <div className="py-8 flex flex-wrap md:flex-nowrap">
                            <div className="md:w-40 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                                <span className="font-semibold title-font text-gray-700 text-xl uppercase mb-2">Linking
                                    Css</span>
                                <span className="mt-1 text-gray-500 text-sm">Design Html with Css</span>
                            </div>
                            <div className="md:flex-grow ml-2">
                                <h2 className="text-lg font-semibold text-gray-700 title-font mb-2">Link your HTML
                                    Web Page to a css page</h2>
                                <p className="leading-relaxed">You can also use Bootstrp or Tailwind according to
                                    your project according to the project needs</p>
                                    <ReactPrismEditor
                                    language={language}
                                    theme={theme}
                                    code={`<link rel="stylesheet" href="style.css">`}
                                    lineNumber={lineNumber}
                                    readOnly={readonly}
                                    clipboard={clipboard}
                                />
                               

                            </div>
                        </div>

                        <div className="py-8 flex flex-wrap md:flex-nowrap">
                            <div className="md:w-40 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                                <span className="font-semibold title-font text-gray-700 text-xl uppercase mb-2">Linking
                                    JS</span>
                                <span className="mt-1 text-gray-500 text-sm">Give Brain to Html by
                                    Javascript</span>
                            </div>
                            <div className="md:flex-grow ml-2">
                                <h2 className="text-lg font-semibold text-gray-700 title-font mb-2">Link your HTML
                                    Web Page to a javascript page</h2>
                                <p className="leading-relaxed">You can add script tag wherever you eant but
                                    preferable to have in <b>head</b> tag.</p>
                                    <ReactPrismEditor
                                    language={language}
                                    theme={theme}
                                    code={`<script src="index.js"></script>`}
                                    lineNumber={lineNumber}
                                    readOnly={readonly}
                                    clipboard={clipboard}
                                />

                            </div>
                        </div>

                        <div className="py-8 flex flex-wrap md:flex-nowrap">
                            <div className="md:w-40 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                                <span className="font-semibold title-font text-gray-700 text-xl uppercase mb-2">Quick
                                    Start with Bootstarp</span>
                                <span className="mt-1 text-gray-500 text-sm">No css to code</span>
                            </div>
                            <div className="md:flex-grow ml-2">
                                <h2 className="text-lg font-semibold text-gray-700 title-font mb-2">This is the
                                    boilerplate for eastablishing a ne bootstarp project</h2>
                                <p className="leading-relaxed">Create amazing websites with Bootstrap 5 or 4</p>
                                <ReactPrismEditor
                                    language={language}
                                    theme={theme}
                                    code={`<!Doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">

<!-- Bootstrap CSS -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossorigin="anonymous">

<title>Hello, world!</title>
</head>
<body>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-U1DAWAznBHeqEIlVSCgzq+c9gqGAJn5c/t99JyeKa9xxaYpSvHU5awsuZVVFIhvj" crossorigin="anonymous"></script>

</body>
</html>`}
                                    lineNumber={lineNumber}
                                    readOnly={readonly}
                                    clipboard={clipboard}
                                />

                            </div>
                        </div>
                        <div className="py-8 flex flex-wrap md:flex-nowrap">
                            <div className="md:w-40 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                                <span className="font-semibold title-font text-gray-700 text-xl uppercase mb-2">Heading
                                    Tags</span>
                                <span className="mt-1 text-gray-500 text-sm">6 heading tags</span>
                            </div>
                            <div className="md:flex-grow ml-2">
                                <h2 className="text-lg font-semibold text-gray-700 title-font mb-2">6- Heading
                                    Tags in Html</h2>
                                <p className="leading-relaxed">H1 tag </p>
                                <ReactPrismEditor
                                    language={language}
                                    theme={theme}
                                    code={`<h1>Hello World, this is Heading 1</h1>`}
                                    lineNumber={lineNumber}
                                    readOnly={readonly}
                                    clipboard={clipboard}
                                />
                                <p className="leading-relaxed">H2 tag </p>
                                <ReactPrismEditor
                                    language={language}
                                    theme={theme}
                                    code={`<h2>Hello World, this is Heading 2</h2>`}
                                    lineNumber={lineNumber}
                                    readOnly={readonly}
                                    clipboard={clipboard}
                                />
                                <p className="leading-relaxed">H3 tag </p>
                                <ReactPrismEditor
                                    language={language}
                                    theme={theme}
                                    code={`<h3>Hello World, this is Heading 3</h3>`}
                                    lineNumber={lineNumber}
                                    readOnly={readonly}
                                    clipboard={clipboard}
                                />
                                <p className="leading-relaxed">H4 tag </p>
                                <ReactPrismEditor
                                    language={language}
                                    theme={theme}
                                    code={`<h4>Hello World, this is Heading 4</h4>`}
                                    lineNumber={lineNumber}
                                    readOnly={readonly}
                                    clipboard={clipboard}
                                />
                                <p className="leading-relaxed">H5 tag </p>
                                <ReactPrismEditor
                                    language={language}
                                    theme={theme}
                                    code={`<h5>Hello World, this is Heading 5</h5>`}
                                    lineNumber={lineNumber}
                                    readOnly={readonly}
                                    clipboard={clipboard}
                                />
                                <p className="leading-relaxed">H6 tag </p>
                                <ReactPrismEditor
                                    language={language}
                                    theme={theme}
                                    code={`<h6>Hello World, this is Heading 6</h6>`}
                                    lineNumber={lineNumber}
                                    readOnly={readonly}
                                    clipboard={clipboard}
                                />
                            </div>
                        </div>

                        <div className="py-8 flex flex-wrap md:flex-nowrap">
                            <div className="md:w-40 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                                <span
                                    className="font-semibold title-font text-gray-700 text-xl uppercase mb-2">Utilities</span>
                                <span className="mt-1 text-gray-500 text-sm">Some Basics of HTML</span>
                            </div>
                            <div className="md:flex-grow ml-2">
                                <h2 className="text-lg font-semibold text-gray-700 title-font mb-2">Basic and
                                    commonly used html tags</h2>
                                <p className="leading-relaxed">Div tag is used to create a block element</p>
                                <ReactPrismEditor
                                    language={language}
                                    theme={theme}
                                    code={`<div>Block Element</div>`}
                                    lineNumber={lineNumber}
                                    readOnly={readonly}
                                    clipboard={clipboard}
                                />
                                <p className="leading-relaxed">Paragraph tag is used to write a paragraph</p>
                                <ReactPrismEditor
                                    language={language}
                                    theme={theme}
                                    code={`<p>The content to show as a paragraph</p>`}
                                    lineNumber={lineNumber}
                                    readOnly={readonly}
                                    clipboard={clipboard}
                                />
                                
                                <p className="leading-relaxed">Image tag is used to show an Image on the web page
                                </p>
                                <ReactPrismEditor
                                    language={language}
                                    theme={theme}
                                    code={`<img src="image/demo.png" alt="another_name"/>`}
                                    lineNumber={lineNumber}
                                    readOnly={readonly}
                                    clipboard={clipboard}
                                />
                                
                                <p className="leading-relaxed">Anchor tag is used to create a link to any page</p>
                                <ReactPrismEditor
                                    language={language}
                                    theme={theme}
                                    code={`<a href="www.google.com">Google.com</a>
<a href="./index.html">Index</a>
<a href="mailto:mail@gmail.com">Contact</a>`}
                                    lineNumber={lineNumber}
                                    readOnly={readonly}
                                    clipboard={clipboard}
                                />
                               
                                <p className="leading-relaxed">Strong tag is used to show a text bold</p>
                                <ReactPrismEditor
                                    language={language}
                                    theme={theme}
                                    code={`<strong>The text to show in BOLD</strong>
We can also use b tag`}
                                    lineNumber={lineNumber}
                                    readOnly={readonly}
                                    clipboard={clipboard}
                                />
                                
                                <p className="leading-relaxed">Em tag is used to show a text italic</p>
                                <ReactPrismEditor
                                    language={language}
                                    theme={theme}
                                    code={`<em>The text to show in ITALIC</em>
We can also use i tag`}
                                    lineNumber={lineNumber}
                                    readOnly={readonly}
                                    clipboard={clipboard}
                                />
                               
                                <p className="leading-relaxed">iframe tag specifies an inline frame</p>
                                <ReactPrismEditor
                                    language={language}
                                    theme={theme}
                                    code={`<iframe src="link.html" width="200" height="200"></iframe>`}
                                    lineNumber={lineNumber}
                                    readOnly={readonly}
                                    clipboard={clipboard}
                                />
                                <p className="leading-relaxed">{`<br /> tag create a line break and <hr />`}
                                    tag will create a horizontal line</p>
                                    <ReactPrismEditor
                                    language={language}
                                    theme={theme}
                                    code={`<br /><hr />`}
                                    lineNumber={lineNumber}
                                    readOnly={readonly}
                                    clipboard={clipboard}
                                />
                                
                            </div>
                        </div>
                        <div className="py-8 flex flex-wrap md:flex-nowrap">
                            <div className="md:w-40 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                                <span className="font-semibold title-font text-gray-700 text-xl uppercase mb-2">Video
                                    & Audio</span>
                                <span className="mt-1 text-gray-500 text-sm">Embed video and audio in html</span>
                            </div>
                            <div className="md:flex-grow ml-2">
                                <h2 className="text-lg font-semibold text-gray-700 title-font mb-2">Show Video as
                                    well as Audio in the web page</h2>
                                <p className="leading-relaxed">Video tag will embed a video in html web page</p>
                                <ReactPrismEditor
                                    language={language}
                                    theme={theme}
                                    code={`<video controls="controls" width="200" height="150">
<source src="vid.mp4" type="video/mp4" />
<source src="vid.ogg" type="video/ogg" />
</video>`}
                                    lineNumber={lineNumber}
                                    readOnly={readonly}
                                    clipboard={clipboard}
                                />

                                <p className="leading-relaxed">Audio tag will embed a audio in html web page</p>
                                <ReactPrismEditor
                                    language={language}
                                    theme={theme}
                                    code={`<audio controls="controls">
<source src="sound.ogg" type="audio/ogg" />
<source src="sound.mp3" type="audio/mpeg" />
</audio>`}
                                    lineNumber={lineNumber}
                                    readOnly={readonly}
                                    clipboard={clipboard}
                                />
                               
                            </div>
                        </div>
                        <div className="py-8 flex flex-wrap md:flex-nowrap">
                            <div className="md:w-40 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                                <span className="font-semibold title-font text-gray-700 text-xl uppercase mb-2">Tables in html</span>
                                <span className="mt-1 text-gray-500 text-sm">Create tables</span>
                            </div>
                            <div className="md:flex-grow ml-2">
                                <h2 className="text-lg font-semibold text-gray-700 title-font mb-2">Boilerplate for tables</h2>
                                <p className="leading-relaxed">Use this code to create table in html</p>
                                <ReactPrismEditor
                                    language={language}
                                    theme={theme}
                                    code={`<table>
<tbody>
<tr>
<td>Table row 1</td>
<td>Table row 2</td>
</tr>
</tbody>
</table>`}
                                    lineNumber={lineNumber}
                                    readOnly={readonly}
                                    clipboard={clipboard}
                                />
                                

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Html
