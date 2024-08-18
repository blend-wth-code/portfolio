import Head from 'next/head';
import BorderImage from './Image';
import Portfolio from './portfolio';

export default function Home() {
  return (
    <div className="min-h-screen bg-custom-bg text-white flex flex-col px-20">
      <Head>
        <title>Next.js Tailwind CSS Example</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" />
      </Head>
      <nav className="w-full flex justify-between items-center p-4 pt-8">
        <div className="text-3xl font-bold">FS</div>
        <ul className="flex space-x-12">
          <li><a href="#home" className="hover-underline">HOME</a></li>
          <li><a href="#about" className="hover-underline">ABOUT ME</a></li>
          <li><a href="#experience" className="hover-underline">EXPERIENCE</a></li>
          <li><a href="#projects" className="hover-underline">PROJECTS</a></li>
          <li><a href="#skills" className="hover-underline">SKILLS</a></li>
          <li>
            <a href="#contact"
              className="bg-gradient-to-r from-purple-400 to-blue-500 px-4 py-2 rounded-md text-white hover:from-purple-500 hover:to-blue-600 hover:text-custom-bg transition-all duration-300">
              CONTACT
            </a>
          </li>
        </ul>
      </nav>
      <div className="flex flex-col items-start mt-20 text-left">
        <h1 className="text-5xl font-extrabold">I&apos;m a</h1>
        <h2 className="text-6xl font-extrabold mt-4">Full Stack</h2>
        <h2 className="text-6xl font-extrabold mt-4">Software</h2>
        <h2 className="text-6xl font-extrabold mt-4">Developer</h2>
        <button className="mt-10 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-md text-lg hover:from-blue-600 hover:to-purple-600">Previous Projects</button>
      </div>
      
      <div id="about" className="flex items-center justify-center mt-32">
        <BorderImage src="/designer.png" />
        <div className="flex-1 ml-12 relative">
          <h2 className="text-3xl font-bold mb-4">ABOUT ME</h2>
          <p className="mb-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys
            standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
            type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining
            essentially unchanged.
          </p>
          <div className="flex space-x-4">
            <button className="bg-gradient-to-r from-purple-400 to-blue-500 text-white px-6 py-3 rounded-md text-lg hover:from-purple-500 hover:to-blue-600">HIRE ME</button>
            <button className="border-2 border-blue-500 text-white px-6 py-3 rounded-md text-lg hover:bg-blue-500">RESUME</button>
          </div>
          <div className="absolute left-0 w-full h-1 bg-transparent border-b-2 border-blue-500 transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></div>
        </div>
      </div>

      <Portfolio/>
    </div>
  );
}
