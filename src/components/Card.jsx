import React from 'react'
import { FaFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion"

function Card({data , reference}) {
    const tagColorClass = {
        black: 'bg-black',
        white: 'bg-white',
        gray: 'bg-gray-700',
        red: 'bg-red-700',
        yellow: 'bg-yellow-700',
        green: 'bg-green-700',
        blue: 'bg-blue-700',
        indigo: 'bg-indigo-700',
        purple: 'bg-purple-700',
        pink: 'bg-pink-700',
        orange: 'bg-orange-700',
        teal: 'bg-teal-700',
        cyan: 'bg-cyan-700',
        amber: 'bg-amber-700',
        lime: 'bg-lime-700',
        emerald: 'bg-emerald-700',
        rose: 'bg-rose-700',
        violet: 'bg-violet-700',
        fuchsia: 'bg-fuchsia-700',
        sky: 'bg-sky-700',
    };
    return (
        <motion.div drag dragConstraints={reference} className='relative w-60 h-72 bg-zinc-900 text-zinc-200 rounded-[30px] py-10 px-8 overflow-hidden'>
            <FaFileAlt />
            <p className='text-m leading-tight mt-5 font-semibold'>{data.desc}</p>
            <div className='footer absolute bottom-0 w-full left-0'>
                <div className='flex items-center justify-between mb-3 py-3 px-7'>
                    <h5>{data.filesize}</h5>
                    <span className=' bg-zinc-600 h-7 w-7 rounded-full flex items-center justify-center'>
                    {data.close ? <IoClose size="1em" color='#fff'/> : <LuDownload size="0.7em" color='#fff'/>}
                    </span>
                </div>
                {data.tag.isOpen && (
                    <div className={`tag flex justify-center items-center font-semibold w-full h-12 ${tagColorClass[data.tag.tagColor] || 'bg-gray-700'}`}>
                        <h3>{data.tag.tagTitle}</h3>
                    </div>
                )}
            </div>
        </motion.div>
    )
}

export default Card
