import Head from "next/head";
import Link from "next/link";

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
        <div
          className="min-h-screen hero"
          style={{ backgroundImage: `url("bg.jpg")` }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="text-center hero-content text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 font-serif text-5xl font-bold">
                Fernando Aponte
              </h1>
              <p className="mb-5 font-serif text-justify indent-4 ">
                Fernando Aponte, a Software Engineer with over a year of
                experience, has a proven track record of designing and
                implementing innovative automation solutions to improve
                efficiency and productivity. He has a strong background in
                programming languages such as Javascript, React, Next.JS, and
                query languages like SQL. Has experience in various automation
                tools like Batch, VMWare, and PLC. Passionate about technology
                and problem-solving. Dedicated to driving results and staying
                ahead in the rapidly evolving tech field.
              </p>
              <div className="flex">
                <Link
                  type="button"
                  href="/about"
                  className="btn-ast sm:btn-ast-sm md:btn-ast-md lg:btn-ast-lg"
                >
                  <span>Resume</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
