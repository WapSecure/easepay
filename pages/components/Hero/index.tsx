import React from 'react'
import Image from 'next/image'
import arrowPath from '../../../public/images/HeroImages/arrowPath.svg'
import getStartedIcon from '../../../public/images/HeroImages/getStartedIcon.svg'
import heroCard from '../../../public/images/HeroImages/heroCard.svg'
import heroImage from '../../../public/images/HeroImages/heroImage.svg'
import assetGrouped from '../../../public/images/HeroImages/assetGrouped.svg'
import SeeHow from '../../../public/images/HeroImages/seeHow.svg'

// interface Props {
//     name: string;
//     src: any;
//   }

const HeroBody: React.FC = (props)=>  {
  return (
    <div className='HeroHeadings'>
        <div>
            <h1>Business  banking with</h1>
            <h1>No credit check</h1>
            <p>Thousands of entrepreneurs bank on Winden to start or grow their business. Open an account in under 3 minutes.</p>
            <button>Get Started <image src={arrowPath} alt='Arrow path' />
            </button>
            <p><Image src={getStartedIcon} alt='get Started Icon' /> Sign up today and earn up to $200. Conditions apply. ** </p>
        </div>
        <div>
            <div className='HeroCard'>
                <Image src={heroCard} alt='Hero Card' />
            </div>
            <div className='Hero Image'>
                <Image src={heroImage} alt='Hero Image' />
            </div>
            <div className='GroupedAssets'>
                <Image src={assetGrouped} alt='Phones' />
            </div>
            <div className='SeeHow'>
                <Image src={SeeHow} alt='See how text' />
            </div>
        </div>

    </div>
  )
}

export default HeroBody;