import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'


export default function Contact() {
    return (
      <div className="hero min-h-screen" style={{ backgroundImage: `url("https://i.ibb.co/hHpVwKQ/desktop-1920x1080.png")` }}>
        <div className="flex mx-auto my-auto mt-4 card w-96 bg-base-100 shadow-md  hover:shadow-xl scale-95 hover:scale-100">
        <figure><img src="https://i.ibb.co/61mPgWz/IMG-20230115-WA0168.jpg" alt="MeIcon" /></figure>
        <div className="card-body">
          <h2 className="card-title">Contact Me!</h2>
          <div className="flex items-center">
        <FaMapMarkerAlt className="text-gray-600 mr-2" />
        <div className="text-gray-700">Puerto Rico, USA</div>
      </div>
      <div className="mt-2 flex items-center">
        <FaPhone className="text-gray-600 mr-2" />
        <div className="text-gray-700">+1 (939) 280-8824</div>
      </div>
      <div className="mt-2 flex items-center">
        <FaEnvelope className="text-gray-600 mr-2" />
        <a href="mailto:fernandoa@apontecorp.com" className="text-gray-700">fernandoa@apontecorp.com</a>
          </div>
        </div>
      </div>
      </div>
    )
   
}