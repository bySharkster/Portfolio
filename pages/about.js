import { FaEnvelope, FaPhone } from 'react-icons/fa'
import { DownloadLink } from 'components/DownloadLink'
import Link from 'next/link'

export default function About() {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url("https://i.ibb.co/yytz9ff/Whats-App-Image-2023-01-15-at-23-26-37.jpg")` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-2xl font-medium">Fernando J. Aponte-Aponte</div>
                <div className="mt-4 flex items-center">
                    <FaPhone className="text-gray-600 mr-2" />
                    <div className="text-gray-700">Personal: (939) 280 - 8824</div>
                </div>
                <div className="mt-2 flex items-center">
                    <FaEnvelope className="text-gray-600 mr-2" />
                    <a href="mailto:fernandoaponte0609@gmail.com" className="text-gray-700">fernandoaponte0609@gmail.com</a>
                </div>
                <div className="mt-6">
                    <div className="text-lg font-medium">Objective</div>
                    <hr/>
                    <div className="text-gray-700">I’m searching for a company where I can demonstrate my skills and knowledge while contributing to the success of the team.</div>
                </div>
                <div className="mt-6">
                    <div className="text-lg font-medium">Education</div>
                    <hr/>
                    <div className="text-gray-700">Interamerican University of Puerto Rico, San German Campus <br/> <strong>Bachelor of Computer Science</strong> <br/> Graduated in 2022</div>
                </div>
                <div className="mt-6">
                    <div className="text-lg font-medium">Computer Skills</div>
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
                    <div className="text-lg font-medium">Experiences</div>
                    <hr/>
                    <div className="text-gray-700">
                        <h3 className="text-gray-900 text-center decoration-success-content font-serif underline">JC Automation</h3>
                        <ul className="list-disc list-inside ">Automation Engineer
                        <li>Troubloshooting and configuration of PLC, Microsoft SQL, VMware, FactoryTalk and batch related issues on field.</li>
                        <li>Documentation Updates and Creation as per Automation viewpoint.</li>
                        <li>Support during validations of New System/Equipments.</li>
                        </ul>
                    </div>
                </div>
                <div className="mt-6">
                    <br/>
                    <Link role="button" href="/portfolio" className="btn btn-neutral btn-outline hover:scale-95 hover:shadow-xl hover:font-bold hover:text-white btn-xs sm:btn-sm md:btn-md lg:btn-lg">My Projects</Link>
                    <DownloadLink href="http://localhost:3000/Fernando_Aponte_Resume.pdf" fileName="Fernando_Aponte_Resume.pdf"/>
                </div>
            </div>
        </div>
        )
}