import { motion } from 'framer-motion'
import React from 'react'

const Skill = ({name,x,y}) =>{
    return (
        <motion.div
            whileHover={{
                scale:1.05
            }}
            initial={{
                x:0,y:0
            }}
            whileInView={{x:x,y:y}}
            transition={{duration:1.5}}
            viewport={{once:true}}
            className='flex items-center justify-center bg-dark text-light font-semibold py-3 px-6 rounded-full shadow-dark cursor-pointer absolute'>
            {name}
        </motion.div>
    )

}

const Skills = () => {
  return (
    <>
        <h2 className='font-bold text-8xl mt-64 w-full text-center'>Skills</h2>
        <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight'>
            <motion.div
                whileHover={{
                    scale:1.05
                }}
                className='flex items-center justify-center bg-dark text-light font-semibold p-8 rounded-full shadow-dark cursor-pointer'>
                Web
            </motion.div>
            <Skill name="HTML" x="-20vw" y="2vw"/>              
            <Skill name="CSS" x="-5vw" y="-10vw"/>
            <Skill name="JavaScript" x="20vw" y="6vw"/>
            <Skill name="ReactJs" x="0vw" y="12vw"/>
            <Skill name="Nextjs" x="-20vw" y="-15vw"/>
            <Skill name="Express" x="15vw" y="-12vw"/>
            <Skill name="Nodejs" x="32vw" y="-5vw"/>
            <Skill name="Tailwind CSS" x="0vw" y="-20vw"/>
            <Skill name="GitHub" x="-25vw" y="18vw"/>
            <Skill name="Mongodb" x="18vw" y="18vw"/>
            <Skill name="C++" x="-32vw" y="-5vw"/>
        </div>
    </>
  )
}

export default Skills