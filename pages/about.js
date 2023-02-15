import { FaEnvelope, FaPhone } from 'react-icons/fa'
import { DownloadLink } from 'components/DownloadLink'
import Link from 'next/link'

export default function About() {
    return (
        <div className="hero bg-neutral noise">
            <div className="bg-white p-6 rounded-lg shadow-md mt-8 mb-8 card-shadow z-10">
                <div className="text-2xl font-medium">Fernando J. Aponte-Aponte</div>
                <div className="flex lg:items-center  mt-10">
                    <div className=" ">
                        <FaPhone className="text-gray-600 mr-2 ml-4" />
                        <div className="text-gray-700 ml-4 text-justify">Personal: (939)280-8824</div>
                    </div>
                    <div className=" ">
                        <FaEnvelope className="text-gray-600 mr-2 ml-4" />
                        <a href="mailto:fernandoaponte0609@gmail.com" className="text-gray-700 ml-4">fernandoaponte0609@gmail.com</a>
                    </div>
                </div>
                <div className="mt-6">
                    <div className="text-lg font-medium">Objective</div>
                    <hr/>
                    <div className="text-gray-700 text-center">Automation Engineer with over a year of experience with a proven track record <br/>of designing and implementing innovative automation solutions to improve efficiency and productivity. Can work with
                    <br/>programming languages such as Javascript, Python, VBA and query languages like SQL. Also can work
                    <br/>with automation tools like Batch, VMWare, and PLC. With a passion for technology and problemsolving dedicated to <br/> driving results and staying ahead of the curve in the rapidly evolving field of automation engineering.</div>
                </div>
                <div className="mt-6">
                        <div className="text-lg font-medium">Academics</div>
                        <hr/>
                        <div className="text-gray-700">Interamerican University of Puerto Rico, San German Campus <br/> <strong>Bachelor of Computer Science</strong> <br/> </div>
                </div>
                <div className="mt-6">
                        <div className="text-lg font-medium">Key Skills</div>
                        <hr/>
                        <div className="text-gray-700">
                        <ul className="list-disc list-inside ">
                            <li>Logical Programming</li>
                            <li>Next.JS, React</li>
                            <li>Web page development (HTML, JavaScript,PHP)</li>
                            <li>VMWare & PLC</li>
                            <li>Databases (SQL)</li>
                        </ul>

                        </div>
                </div>
                <div className="mt-6">
                        <div className="text-lg font-medium">Experience</div>
                        <hr/>
                        <div className="text-gray-700">
                            <p>Present</p>
                            <h3 className="text-gray-900 text-left decoration-success-content font-serif underline">JC Automation</h3>
                            <ul className="list-disc list-inside ">Automation Engineer
                            <li>Troubloshooting and configuration of PLC, Microsoft SQL, VMware, FactoryTalk and batch related issues on field.</li>
                            <li>Documentation Updates and Creation as per Automation viewpoint.</li>
                            <li>Support during validations of New System/Equipments.</li>
                            </ul>
                        </div>
                </div>
                <div className="mt-6">
                        <div className="text-lg font-medium">Abilities</div>
                        <hr/>
                        <div className="text-gray-700">
                            
                            <ul className="list-disc list-inside ">
                            <li>Bilingual: Spanish / English</li>
                            <li>Team Leader</li>
                            <li>Responsible</li>
                            <li>Fast Learner</li>
                            <li>Complex Problem Solving</li>
                            <li>Achieve goals in record time</li>
                            <li>Critcal Thinking</li>
                            <li>Operations Analysis</li>
                            </ul>
                        </div>
                </div>
                <div className="mt-6 flex justify-center items-center ">
                        <br/>
                        <div className="flex"><Link type="button"  href="/coming_soon" className="btn-ast sm:btn-ast-sm md:btn-ast-md lg:btn-ast-lg sm:mr-0 md:mr-2 lg:mr-4"><span>My Projects</span></Link></div>
                        <div className="flex"><DownloadLink href="/Fernando_Aponte_Resume.pdf" fileName="Fernando_Aponte_Resume.pdf"></DownloadLink></div>
                </div>
                 
            </div>
        </div>
        )
}