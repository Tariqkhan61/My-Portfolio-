import React from 'react'

const Skills = () => {
  return (
    <div id='skills' className='container pt-32'>
        <div className='grid md:grid-cols-2 gap-20 items-center'>
            <div data-aos="zoom-in-up">
                <h2 className='text-4xl md:text-5xl'>Technologies I Work With</h2>
                <p className='text-yellow-500 pt-2'>Here's an updated version of your skills paragraph:

"I am currently building a strong foundation in web development, with a focus on mastering HTML, CSS, and TypeScript. As I expand my skill set, I am delving into frameworks like React and Next.js to develop dynamic and user-friendly applications. Additionally, I am exploring Tailwind CSS to create visually appealing and responsive designs. While I’m still in the learning phase, I am dedicated to continuously improving and expanding my expertise in these technologies with the guidance of the brilliant teachers from the Governor Sindh IT Initiative."</p>
<br /> <h1>Technical Skills</h1>
<p className='text-yellow-500 pt-2'>As a certified Avionics mechanic with extensive experience in advanced military aircraft, I specialized in the precise repair, maintenance, calibration, and overhauling of critical components across platforms like the F-16, C-130, T-37, and Mashak. My expertise in handling the intricate instruments of the F-16 reflects a high standard of skill and technical knowledge, ensuring each aircraft operates with peak reliability and precision. With a commitment to excellence, I’ve contributed to aviation safety and operational readiness, making me a valuable asset in any advanced avionics and aerospace setting.</p>
            </div>
            <div>
                <div className='grid grid-cols-2 text-accent text-3xl sm:text-4xl'>
                    <div className='space-y-2'>
                        <h2 data-aos="zoom-in-up">TypeScript</h2>
                        <h2 data-aos="zoom-in-up">React.js</h2>
                        <h2 data-aos="zoom-in-up">Next.js</h2>

                    </div>
                    <div className='space-y-2'>
                        <h2 data-aos="zoom-in-up">TailwinD</h2>
                        <h2 data-aos="zoom-in-up">CSS</h2>
                        <h2 data-aos="zoom-in-up">Node.js</h2>

                    </div>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Skills
