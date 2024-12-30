import React, { useRef } from 'react'
import { useScroll,motion } from 'framer-motion'
import Liicons from './Liicons';

const Education = () => {

  const ref = useRef(null);
  const {scrollYProgress} = useScroll(
    {
      target:ref,
      offset:["start end","center start"]
    }
  )

  const Details = ({education,time,address})=>{
    const first = useRef(null);
    return <li ref={ref} className='my-8 w-[60%] mx-auto flex flex-col justify-between'>
      <Liicons reference = {ref}/>
      <motion.div
        initial={{y:50}}
        whileInView={{y:0}}
        transition={{duration:1,type:"spring"}}
       className='flex flex-col gap-2'>
        <h3 className='capitalize font-bold text-2xl whitespace-nowrap'>{education}</h3>
        <span className='capitalize font-medium text-dark/75'>
          {time} | {address}
        </span>
      </motion.div>
    </li>

  }
  return (
    <div className='my-64 '>
        <h2 className='font-bold text-8xl mb-32 w-full text-center'>Education</h2>

        <div ref={ref} className='w-[75%] mx-auto relative'>

          <motion.div 
            style={{scaleY:scrollYProgress}}
            className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top'/>
            <ul className='w-full flex flex-col items-start justify-between ml-4'>
              <Details education={"B.Tech In Electronics and Communication Engineering(ECE)"} time={"2019-2023"} address={"Netaji Subhash Institute of Technology (East Campus)"}/>
              <Details education={"CBSE 12th Standard"} time={"Passed-2019"} address={"Govt. Sarvodaya Co.Ed Vidyalaya"}/>
              <Details education={"CBSE 10th Standard"} time={"Passed-2016"} address={"Govt. Sarvodaya Co.Ed Vidyalaya"}/>

            </ul>
        </div>
    </div>


  )
}

export default Education