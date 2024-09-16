import React from 'react'

function Background() {
  return (
    <div>
      <div className='fixed w-full h-screen bg-zinc-800'>
        <div className='absolute top-[5%] w-full py-10 flex justify-center text-zinc-500 text-xl font-semibold'>Documents.</div>
        <h1 className='absolute top-1/3 left-1/3 text-[12vw] leading-none tracking-tight font-semibold text-zinc-900'>Docs.</h1>
      </div>
    </div>
  )
}

export default Background
