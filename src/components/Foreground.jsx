import React, { useState ,useRef } from 'react'
import Card from './Card'
import { useReducedMotion } from 'framer-motion'

function Foreground() {
    const ref = useRef(null);
    const data = [{
        desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit. lo", 
        filesize: ".7mb",
        close: false,
        tag: {
            isOpen: true,
            tagTitle: "Download Now",
            tagColor: "green"
        },
    },{
        desc: "mamo mdoam dmmv ejnovf vmomv ",
        filesize: ".6mb",
        close: false,
        tag: {
            isOpen: false,
            tagTitle: "Download Now",
            tagColor: "green"
        },
    },{
        desc: "hey there, this is a file description and it's pretty long but it's okay",
        filesize: ".9mb",
        close: true,
        tag: {
            isOpen: false,
            tagTitle: "Upload Now",
            tagColor: "yellow"
        },
    },{
        desc: "im a coquette file",
        filesize: ".9mb",
        close: true,
        tag: {
            isOpen: true,
            tagTitle: "Upload Now",
            tagColor: "pink"
        },
    }]
  return (
    <div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-5'>
        {data.map((item,index) => (
            <Card data={item} reference={ref}/>
        ))}
    </div>
  )
}

export default Foreground
