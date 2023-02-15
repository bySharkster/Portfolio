import Head from 'next/head'
import Link from 'next/link'


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
      <div className="hero min-h-screen" style={{ backgroundImage: `url("bg.jpg")` }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 font-serif text-5xl font-bold">Fernando Aponte</h1>
            <p className="mb-5 font-serif text-justify indent-4 " >Fernando Aponte, an Automation Engineer with over a year of experience, has a proven track record of designing and implementing innovative automation solutions to improve efficiency and productivity. He has a strong background in programming languages such as Javascript, Python, VBA and query languages like SQL. Has experience in various automation tools like Batch, VMWare, and PLC. With a passion for technology and problem-solving, Fernando is dedicated to driving results and staying ahead of the curve in the rapidly evolving field of automation engineering.</p>
            <div className="flex" ><Link type="button" href="/about" className="btn-ast sm:btn-ast-sm md:btn-ast-md lg:btn-ast-lg"><span>Resume</span></Link></div>
          </div>
        </div>
      </div>
      </main>
    </>
  )
}
