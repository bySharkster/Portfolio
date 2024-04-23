import { FaEnvelope, FaPhone } from "react-icons/fa";
import { DownloadLink } from "components/DownloadLink";
import Link from "next/link";

export default function About() {
  return (
    <div className="hero bg-neutral noise">
      <div className="z-10 p-6 mt-8 mb-8 bg-white rounded-lg shadow-md card-shadow">
        <div className="text-2xl font-medium">Fernando J. Aponte-Aponte</div>
        <div className="flex mt-10 lg:items-center">
          <div className="">
            <FaPhone className="ml-4 mr-2 text-gray-600" />
            <div className="ml-4 text-justify text-gray-700">
              Personal: (939)638-8383
            </div>
          </div>
          <div className="">
            <FaEnvelope className="ml-4 mr-2 text-gray-600" />
            <a
              href="mailto:fernandoaponte0609@gmail.com"
              className="ml-4 text-gray-700"
            >
              contact@fernandoaponte.dev
            </a>
          </div>
        </div>
        <div className="mt-6">
          <div className="text-lg font-medium">Objective</div>
          <hr />
          <div className="text-center text-gray-700">
            Automation Engineer with a proven track record <br />
            of designing and implementing innovative automation solutions to
            improve efficiency and productivity. Can work with
            <br />
            programming languages such as Javascript, Python, VBA and query
            languages like SQL. Also can work
            <br />
            with automation tools like Batch, VMWare, and PLC. With a passion
            for technology and problemsolving dedicated to <br /> driving
            results and staying ahead of the curve in the rapidly evolving field
            of automation engineering.
          </div>
        </div>
        <div className="mt-6">
          <div className="text-lg font-medium">Academics</div>
          <hr />
          <div className="text-gray-700">
            Interamerican University of Puerto Rico, San German Campus <br />{" "}
            <strong>Bachelor of Computer Science</strong> <br />{" "}
          </div>
        </div>
        <div className="mt-6">
          <div className="text-lg font-medium">Key Skills</div>
          <hr />
          <div className="text-gray-700">
            <ul className="list-disc list-inside ">
              <li>Logical Programming</li>
              <li>Next.JS, React Frameworks (TypeScript)</li>
              <li>Web page development (HTML, JavaScript,PHP)</li>
              <li>VMWare & PLC</li>
              <li>Databases (SQL & noSQL)</li>
            </ul>
          </div>
        </div>
        <div className="mt-6">
          <div className="text-lg font-medium">Experience</div>
          <hr />
          <div className="text-gray-700">
            <p>Present</p>
            <h3 className="font-serif text-left text-gray-900 underline decoration-success-content">
              JC Automation
            </h3>
            <ul className="list-disc list-inside ">
              Automation Engineer
              <li>
                Troubloshooting and configuration of PLC, Microsoft SQL, VMware,
                FactoryTalk and batch related issues on field.
              </li>
              <li>
                Documentation Updates and Creation as per Automation viewpoint.
              </li>
              <li>Support during validations of New System/Equipments.</li>
            </ul>
          </div>
        </div>
        <div className="mt-6">
          <div className="text-lg font-medium">Abilities</div>
          <hr />
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
        <div className="flex items-center justify-center mt-6 ">
          <br />
          <div className="flex">
            <Link
              type="button"
              href="/coming_soon"
              className="btn-ast sm:btn-ast-sm md:btn-ast-md lg:btn-ast-lg sm:mr-0 md:mr-2 lg:mr-4"
            >
              <span>My Projects</span>
            </Link>
          </div>
          <div className="flex">
            <DownloadLink
              href="/Fernando_Aponte_Resume.pdf"
              fileName="Fernando_Aponte_Resume.pdf"
            ></DownloadLink>
          </div>
        </div>
      </div>
    </div>
  );
}
