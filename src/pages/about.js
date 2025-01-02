import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import profileimage from '../../public/images/profile/porfolioimagenew.png'
import React, { useEffect, useRef } from 'react'
import { useInView, useMotionValue, useSpring } from 'framer-motion'
import Skills from '@/components/Skills'
import Education from '@/components/Education'
import TransitionEffect from '@/components/TransitionEffect'



const AnimatedNumbers = ({value}) =>{
    const ref = useRef(null);
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue,{duration:3000});
   
    const isInView = useInView(ref,{once:true});

    useEffect(()=>{
        if(isInView){
            motionValue.set(value);
        }
    },[isInView,value,motionValue]);

    useEffect(()=>{
        springValue.on("change",(latest)=>{
            if( ref.current && latest.toFixed(0) <= value){
                ref.current.textContent = latest.toFixed(0);
            }
        })
    },[springValue,value])


    return <span ref={ref}></span>
}

const about = () => {
  return (
    <>
        <Head>
            <title>Ankit Kumar | About Page</title>
            <meta name='description' content='any description'></meta>
        </Head>

        <TransitionEffect/>
        <main className='flex w-full flex-col items-center justify-center dark:text-light'>

            <Layout className='pt-16'>
                <AnimatedText text={"Passion Fuels Purpose!"} className='!text-8xl !text-center mb-16 sm:!text-6xl xs:!text-4xl sm:mb-8'/>
                <div className='grid w-full grid-cols-8 gap-16 sm:gap-8'>

                    <div className='col-span-3 xl:col-span-4 flex flex-col items-start justify-start gap-3 md:col-span-8  md:order-2'>
                        <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75 md:mx-auto'>About Me</h2>
                        <p className='font-medium text-base'>Hello and welcome to my portfolio!</p>
                        <p className='font-medium text-sm'>
                        I am Ankit Kumar, a passionate and aspiring web developer dedicated to creating dynamic, responsive, and user-friendly websites. My journey into web development began with a curiosity to understand how the web works, and it quickly grew into a deep passion for designing and building digital experiences.
                        This portfolio showcases my skills, projects, and journey as a web developer.
                        </p>
                        <p className='font-medium text-sm'>This Portfolio contains:</p>
                        <p className='font-medium text-sm'> <span className='font-semibold'>Projects: &nbsp;</span> A collection of websites and applications I have built, showcasing my work with technologies like HTML, CSS, JavaScript, and frameworks such as React.</p>
                        <p className='font-medium text-sm'><span className='font-semibold'>Skills: &nbsp;</span>My growing proficiency in front-end and back-end development tools, as well as design principles.</p>
                        <p className='font-medium text-sm'> <span className='font-semibold'>About Me: &nbsp;</span>Insights into my journey, interests, and what motivates me as a developer.</p>

                        <p className='font-medium text-sm'>I am constantly learning and exploring new technologies, so this portfolio will keep evolving with fresh ideas and projects.
                        Thank you for visiting, and feel free to explore my work.</p>
                    </div>

                    <div className='col-span-3 xl:col-span-4 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 shadow-[8px_8px_0_5px_rgba(27,27,27)] dark:bg-dark dark:border-light dark:shadow-[8px_8px_0_5px_rgba(245,245,245)]
                                    md:order-1 md:col-span-8'>
                            <Image src={profileimage} alt='profile' className='w-full h-auto rounded-2xl'
                                priority
                                sizes='(max-width: 768px) 100vw,
                                (max-width: 1200px) 50vw,
                                33vw'
                            />
                    </div>

                    <div className='col-span-2 flex flex-col items-end justify-center xl:col-span-8 xl:flex-row xl:items-center xl:mt-5  md:order-3'>
                        <div className='flex flex-col items-end justify-center gap-6 md:gap-3 sm:gap-2 xl:flex-row xl:items-center xl:mt-5'>
                            <span className='inline-block text-7xl font-bold md:text-5xl sm:text-3xl'>
                                <AnimatedNumbers value={15}/>+
                           </span>
                            <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 md:text-base sm:text-sm'>Projects Completed</h2>
                        </div>
                    </div>

                </div>

                <Skills/>
                <Education/>
            </Layout>
        </main>
    </>
  )
}

export default about