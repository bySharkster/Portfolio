import { FaEnvelope, FaPhone } from "react-icons/fa";
import { DownloadLink } from "components/DownloadLink";
import Link from "next/link";
import { phoneNumber, email } from "@/config";

export default function About() {
  const skills = [
    "Logical Programming",
    "Next.JS, React Frameworks, Vue.JS (Javascript and TypeScript)",
    "Web page development (HTML, JavaScript, PHP)",
    "Databases (SQL & noSQL)",
    "Microsoft Office Suite",
    "Figma",
    "Git & GitHub",
    "VMWare & PLC",
  ];

  const renderSkills = () => {
    return skills.map((skill, index) => <li key={index}>{skill}</li>);
  };

  return (
    <div className="hero bg-neutral noise">
      <div className="z-10 bg-white rounded-lg shadow-md sm:p-2 sm:my-2 md:p-6 md:my-8 card-shadow">
        <div className="text-2xl font-medium text-center">
          Fernando J. Aponte-Aponte
        </div>

        <div className="flex flex-col justify-around mt-10 text-center lg:flex-row">
          <div className="flex flex-row text-gray-700 justify-evenly lg:justify-between flex-nowrap">
            <FaPhone className="text-gray-600 " />
            <span className="ml-1 lg:ml-4">Personal: {phoneNumber}</span>
          </div>
          <div className="flex flex-row text-gray-700 justify-evenly lg:justify-between flex-nowrap">
            <FaEnvelope className="text-gray-600 " />
            <a href="mailto:{email}" className="ml-1 text-gray-700 lg:ml-4">
              {email}
            </a>
          </div>
        </div>

        <div className="mt-6">
          <div className="text-lg font-medium">Objective</div>
          <hr />
          <div className="justify-center max-w-5xl mx-auto text-center text-gray-700">
            Passionate about technology and problem-solving. Dedicated to
            driving results and staying ahead in the rapidly evolving tech
            field. Proven track record in designing and implementing innovative
            solutions to enhance efficiency and productivity Automation Engineer
            with a proven track record of designing and implementing innovative
            automation solutions to improve efficiency and productivity. Can
            work with programming languages such as Javascript, Python, VBA and
            query languages like SQL. Also can work with automation tools like
            Batch, VMWare, and PLC. With a passion for technology and
            problemsolving dedicated to driving results and staying ahead of the
            curve in the rapidly evolving field of automation engineering.
          </div>
        </div>
        <div className="mt-6">
          <div className="text-lg font-medium">Academics</div>
          <hr />
          <div className="text-gray-700">
            Interamerican University of Puerto Rico, San German Campus <br />{" "}
            <strong>Bachelor of Science</strong> <br /> <strong>Major:</strong>{" "}
            Computer Science <br />{" "}
          </div>
        </div>
        <div className="mt-6">
          <div className="text-lg font-medium">Key Skills</div>
          <hr />
          <div className="text-gray-700">
            <ul className="list-disc list-inside ">{renderSkills()}</ul>
          </div>
        </div>
        <div className="mt-6">
          <div className="text-lg font-medium">Experience</div>
          <hr />
          <div className="text-gray-700">
            <p>2022 - Present</p>
            <h3 className="font-serif text-left text-gray-900 underline decoration-success-content">
              Haleon
            </h3>
            <ul className="list-disc list-inside ">
              Automation Specialist II
              <li>
                Troubloshooting and configuration of PLC, Microsoft SQL, VMware,
              </li>
              <li>FactoryTalk and batch related issues on field.</li>
              <li>Virtualization of systems and servers.</li>
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
              href="https://github.com/bySharkster"
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
