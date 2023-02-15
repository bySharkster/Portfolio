import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'


export const Footer = () => {
  
    return(
  <footer className="bg-gray-900 text-white py-4 z-10">
    <div className="container mx-auto flex justify-between">
      <div className="text-sm">
        &copy; Fernando Aponte {new Date().getFullYear()}
      </div>
      <div className="flex">
        <a href="https://github.com/bySharkster" className="mr-4" target="_blank" rel="noopener noreferrer">
          <FaGithub  size="lg" className="text-white" />
        </a>
        <a href="https://www.linkedin.com/in/fernando-aponte-aponte-147a32192/" className="mr-4" target="_blank" rel="noopener noreferrer">
          <FaLinkedin  size="lg" className="text-white" />
        </a>
        <a href="https://www.instagram.com/aponte_fer/" className="mr-4" target="_blank" rel="noopener noreferrer">
          <FaInstagram  size="lg" className="text-white" />
        </a>
      </div>
    </div>
  </footer>
)
}
