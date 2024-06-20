import React from 'react'

function About() {
    return (
        <div name="About" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20">
            <div>
                <h1 className="text-3xl font-bold mb-5">About</h1>
                <p>
                    Hello, I'm Abhishek, a passionate Web developer with a keen eye for MERN
                    Stack . With a background in IT, I strive to create impactful and
                    visually stunning Software solutions that leave a lasting impression.
                </p>
                <br />
                <h1 className="text-green-600 font-semibold text-xl">
                    Education 
                </h1>
                <span>
                I completed my 12th grade at Jagat Jyoti public School and am currently pursuing  Bachelor of Computer Applications Amritsar Group of Colleges.
                </span>
                <br />
                <br />
                <h1 className="text-green-600 font-semibold text-xl">
                    Skills & Expertise
                </h1>
                <span>
                Proficient in C++ and JavaScript, experienced with ReactJS and Tailwind CSS. Strong grasp of Data Structures and Algorithms (DSA). Excellent problem-solving skills, effective communicator, and collaborator.
                </span>
                <br />
                <br />
              
                <h1 className="text-green-600 font-semibold text-xl">
                    Achievements 
                </h1>
                <span>
                Completed 400+ coding challenges across various difficulty levels on <a className='text-blue-700' href="https://www.geeksforgeeks.org/user/abhisheke4bw/">GeeksforGeeks </a>  
                and <a className='text-blue-700' href="https://leetcode.com/u/abhishek334/"> LeetCode</a>, enhancing my analytical and programming capabilities.   
                </span>
                <br />
                <br />
                <h1 className="text-green-600 font-semibold text-xl">
                    Mission 
                </h1>
                <p>
                My mission is to leverage my skills and creativity to deliver innovative software development solutions that exceed client expectations and contribute positively to the digital landscape. I am committed to continuous learning and growth, always seeking new challenges and opportunities
                </p>
            </div>
        </div>
    )
}

export default About