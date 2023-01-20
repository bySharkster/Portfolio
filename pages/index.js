import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Navbar from '../components/Navbar/Navbar'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Fernando Aponte</title>
        <meta name="description" content="My Online Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
      <div className="hero min-h-screen" style={{ backgroundImage: `url("https://i.ibb.co/yytz9ff/Whats-App-Image-2023-01-15-at-23-26-37.jpg")` }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 font-serif text-5xl font-bold">Fernando Aponte</h1>
            <p className="mb-5 font-serif text-justify indent-4 " >Fernando Aponte, an Automation Engineer with over a year of experience, has a proven track record of designing and implementing innovative automation solutions to improve efficiency and productivity. He has a strong background in programming languages such as Javascript, Python, VBA and query lenguages like SQL. Has experience in various automation tools like Batch, VMWare, and PLC. With a passion for technology and problem-solving, Fernando is dedicated to driving results and staying ahead of the curve in the rapidly evolving field of automation engineering.</p>
            <Link role="button" href="/portfolio" className="btn btn-info disabled:opacity-75 hover:scale-125 hover:shadow-xl hover:font-bold hover:text-white" disabled>My Projects</Link>
          </div>
        </div>
      </div>
      </main>
    </>
  )
}
