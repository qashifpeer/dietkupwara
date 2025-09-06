import React from 'react'
import AboutDiet from './AboutDiet'
import PrincipalMessage from './PrincipalMessage'

const AboutSection = () => {
  return (
    <div className='md:flex max-w-7xl mx-auto'>
      <PrincipalMessage />
        <AboutDiet />
    </div>
  )
}

export default AboutSection