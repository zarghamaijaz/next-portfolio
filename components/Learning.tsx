import React from 'react'
import { BackgroundBeams } from './ui/BackgroundBeams'
import { ContainerScroll } from './ui/ContainerScrollAnimation'
import { Cover } from './ui/Cover'

const Learning = () => {
  return (
    <div className='relative'>
        <BackgroundBeams/>
        <ContainerScroll titleComponent={(
          <h1 className='flex gap-5 flex-wrap justify-center heading text-center mb-20'>
            <span>Currently learning</span>
            <Cover>Advanced Javascript</Cover>
          </h1>
        )}>
            <img className='h-full w-full object-cover' src='/learning.jpg' />
        </ContainerScroll>
    </div>
  )
}

export default Learning