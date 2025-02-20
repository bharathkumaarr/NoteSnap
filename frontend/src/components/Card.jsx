import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion"


function Card({data, reference}) {
    const tagColorMap={
        emerald: 'bg-emerald-300',
        sky: 'bg-sky-300'
    };
  return (
    <motion.div drag dragConstraints={reference} dragTransition={{ bounceStiffness: 300, bounceDamping: 30 }} whileDrag={{scale:1.1}} dragElastic={0.2} transition={{ type: 'spring', stiffness: 300 }} className='flex-shrink-0  relative w-52 h-64 rounded-[40px] bg-zinc-900/50 text-zinc-300 px-5 py-8 overflow-hidden'>
        <FaRegFileAlt />
        <p className='text-zinc-300 text-md pt-4 leading-tight'>{data.desc}</p>
        <div className='footer absolute bottom-2  w-full mb-10 h-14 left-0 py-1 '>
            <div className='flex items-center justify-between px-5 py-3 text-md'>
                <h5>{data.fileSize}</h5>

                <span className='w-[22px] h-[22px] bg-zinc-300 rounded-full flex items-center justify-center text-xl'>
                    
                    {data.close ? <IoClose size="0.8em" color='rgb(24 24 27 / 0.9)' /> : <FiDownload size="0.8em" color='rgb(24 24 27 / 0.9)' />}
                    
                </span>

            </div>

            {
                data.tagDetails.isOpen && (
                <div className={`tag w-full h-20 ${tagColorMap[data.tagDetails.tagColor] || 'bg-gray-300'} px-5 flex justify-center`}>
                <h3 className='text-lg text-zinc-900 mt-2 font-semibold'>{data.tagDetails.tagTitle}</h3>
                </div> 
                )
            }

            
        </div>

    </motion.div>






  )
}

export default Card