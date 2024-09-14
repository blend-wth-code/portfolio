import Image from 'next/image'

const skills: {[key:string]: string} = {
    java: 'java',
    typescript: 'typescript',
    react: 'react.js',
    socketio: 'socket.io',
    spring: 'spring',
    jenkins: 'jenkins',
    openapi: 'openapi',
    html5: 'HTML5',
    css3: 'css3',
    jquery: 'jquery',
    gitlab: 'gitlab',
    bitbucket: 'bitbucket',
    bootstrap: 'bootstrap',
    mongodb: 'mongodb',
    mysql: 'mysql',
    postgresql: 'postgresql',
    tomcat: 'tomcat',
    linux: 'linux',
    unix: 'unix',
    junit: 'junit',
    adobexd: 'adobexd',
    figma: 'figma',
    flutter: 'flutter',
    aws: 'aws',
}

const Skills: React.FC = () => {
    return (
        <div id="skills" className="mt-20 sm:mt-32 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-12">
  {Object.entries(skills).map(([key, skill]) => (
    <div key={key} className="flex flex-col items-center">
      <Image src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${key}/${key}-original.svg`} height={80} width={90} alt={skill} />
      <p className="mt-2">{skill}</p>
    </div>
  ))}
</div>

    );
}

export default Skills;