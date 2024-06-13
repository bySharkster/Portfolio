import Link from "next/link";
import Image from "next/image";
import config from "@/config";

export default function Portfolio() {
  const projects = config.projects;

  return (
    <div
      className="min-h-screen hero"
      style={{
        backgroundImage: `url("https://i.ibb.co/hHpVwKQ/desktop-1920x1080.png")`,
        backgroundPosition: "top", // Add this line to start the image from the top
      }}
    >
      <div
        className="container p-4 mx-auto"
        style={{
          height: "100vh",
          overflowY: "scroll",
          scrollbarColor: "transparent transparent",
        }}
      >
        <h1 className="mb-4 text-3xl font-bold text-white">Projects</h1>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.id}
              className="overflow-hidden bg-white rounded-lg shadow-md"
            >
              <figure>
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  className="object-cover w-full h-48"
                  width={400}
                  height={500}
                  loading="lazy"
                />
              </figure>

              <div className="flex flex-col p-4">
                <h2 className="mb-2 text-xl font-bold">{project.title}</h2>
                <p className="mb-4 text-gray-700 min-h-12">
                  {project.description}
                </p>
                <Link
                  href={project.projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" btn btn-primary btn-sm"
                >
                  View Project
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
