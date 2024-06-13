import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Fernando Aponte</title>
        <meta name="description" content="Fernado Aponte's Digital Portfolio" />
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
                As a seasoned Senior Front End Developer with over five years of
                experience, I excel in creating dynamic, user-friendly web
                applications using cutting-edge technologies like HTML5, CSS3,
                and JavaScript and TypeScript. My expertise extends to modern
                frameworks such as React, Next.JS, and Vue.js, ensuring
                responsive and visually appealing interfaces. I have a proven
                track record of leading technical teams, optimizing web
                performance, and implementing best practices in version control
                with Git. My strong problem-solving skills, coupled with a deep
                understanding of UI/UX principles, enable me to deliver
                high-quality, scalable solutions that enhance user satisfaction
                and drive business growth. Let&apos;s connect to discuss how my
                skills and experience can contribute to your team&apos;s
                success.
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
