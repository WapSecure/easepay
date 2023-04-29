import React from 'react'
import Image from 'next/image'
import techCrunch from '../../../public/images/HeroImages/techcrunch.svg'
import forbes from '../../../public/images/HeroImages/forbes.svg'
import enterpreneur from '../../../public/images/HeroImages/enterpreneur.svg'
import TechTimes from '../../../public/images/HeroImages/techTimes.svg'
import theWall from '../../../public/images/HeroImages/theWall.svg'

export default function HeroFooter() {
  return (
    <div className='FooterLogos'>
        <div>
            <Image src={ techCrunch } alt='tech crunch' />
        </div>
        <div>
            <Image src={ forbes } alt='forbes' />
        </div>
        <div>
            <Image src={ enterpreneur } alt='enterpreneur' />
        </div>
        <div>
            <Image src={ TechTimes } alt='tect times' />
        </div>
        <div>
            <Image src={ theWall } alt=' the wall' />
        </div>
    </div>
  )
}
