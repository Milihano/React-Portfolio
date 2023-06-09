//import lappy from './Images/Laptop.jpg'
//import pic01 from './Images/pic01.JPG'
import pic02 from '../Images/pic02.JPG'
import { BsFillArrowUpCircleFill } from 'react-icons/bs'
import '../Style.css'
// import {FaLinkedin} from 'react-icons/fa'
// import {FaGithub} from 'react-icons/fa' 
// import {FaInstagram} from 'react-icons/fa'



export default function App() {
    return (
        <home>
            <nav className="flex justify-between py-[1rem] px-[4rem] bg-[#302625] fixed w-full z-50">
                <button className='rounded hover:bg-[#594c3d] duration-700 hover:font-semibold hover:text-[#c5d0d0] w-[3rem] hover:animate-pulse'><a href="Home.jsx">LOGO</a></button>
                <div className="flex justify-between text-[#ffffff] font-semibold w-[17rem] text-base ">
                    <button className='px-2  hover:-translate-y-1 duration-700 hover:underline hover:text-gray-300'><a href="#about">About Me</a></button>
                    <button className='px-2  hover:-translate-y-1 duration-700 hover:underline hover:text-gray-300'><a href="#work">My Work</a></button>
                    <button className='px-2  hover:-translate-y-1 duration-700 hover:underline hover:text-gray-300'><a href="#skills">Skills</a></button>
                    <button className='px-2  hover:-translate-y-1 duration-700 hover:underline hover:text-gray-300'><a href="Home.jsx"><BsFillArrowUpCircleFill/></a></button>
                </div>
            </nav>
            <body className='px-[2rem] py-[4rem]'>
                <div id='nav' className="flex justify-between gap-x-[5rem]"  style={{paddingBottom:'100px'}}>
                    <div id="image1" className='rounded-lg'>
                        <div id="hoverdiv" style={{width:'300px',paddingTop:'50px'}}>
                            <img className='hover:grayscale-0' src={pic02} alt=""  />
                        </div>
                    </div>
                    <div className='rounded-lg bg-[#594c3d] px-[2rem] py-[10rem]'>
                        <h1 className='text-[3rem] font-bold text-[#fff]'>Hi,I AM MUJIB.</h1>
                        <p style={{paddingBottom:'12px'}} className='text-[#fff]'>
                            <b>A University Student Who's Aspiring To Work With Your Team To Achieve Greater Heights And Gain Impactful Knowledege. 
                            Get To Know About My Career As You Scroll Through My Portfolio....</b>
                        </p>
                        <button className='border rounded py-1 px-2 text-[#fff] font-semibold hover:bg-[#fff] hover:text-gray-500'>
                            <div class="dropdown">
                                <button class="dropbtn">Reach Me</button>
                                <div class="dropdown-content">
                                    <a href="https://www.linkedin.com/in/mujib-azeez-8ba064254/">LinkedIn</a>
                                    <a href="https://github.com/Milihano">GitHub</a>
                                    <a href="www">Link 3</a>
                                </div>
                            </div>
                        </button>
                    </div>
                </div>
                <div>
                    <div id='about'>
                        <h1 className='text-[#c5d0d0] text-[1.5rem] font-bold hover:underline duration-700 delay-500 hover:text-[2rem] duration-700'>About Me</h1>
                        <p className='text-[#c5d0d0]'>
                            I am a software developer, I have a unique blend of skills and experience that allows me to provide valuable support to companies and their customers.

                            As a software developer, I have great knowledge of Data structure & Algorithm. Backend development is my major strength with experience Javscript, NodeJs, Express, SQL........

                            I am skilled at developing and implementing strategies to help companies grow and succeed, and have experience working with teams to achieve common goals.
                        </p> 
                    </div>
                    {/* <marquee behavior="" direction="">HTML  CSS JAVASCRIPT REACT TAILWIND REACT-NATIVE BOOTSTRAP GIT</marquee> */}
                    <div id='work'>
                        <h1 className='text-[#c5d0d0] text-[1.5rem] font-bold hover:underline duration-700 delay-500 hover:text-[2rem] duration-700'> My Work</h1>
                        <p className='text-[#c5d0d0]'>
                            I currently have no work experience formally. I have mostly been able to replicate different websites across the web to keep my coding knowledge refreshed... 
                            I have been opportuned to work with an amazing team in my study cohort in zulfah group to build some projects like banking-applications interface and back-end to test our coding ability.
                        </p>
                    </div>
                </div>
            </body>
        </home>
    )
}

