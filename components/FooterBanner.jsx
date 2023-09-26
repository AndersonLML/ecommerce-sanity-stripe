/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'

import { urlFor } from '@/lib/client' // used to build the sanity image url

export default function FooterBanner({
  footerBanner: {
    discount,
    largeText1,
    largeText2,
    saleTime,
    smallText,
    midText,
    desc,
    product,
    buttonText,
    image,
  },
}) {
  return (
    
      
    <div className='footer-banner-container'>
          
          <div className='center'>     
        <img
          src={urlFor(image)}
          className='footer-banner-image'
          alt='footer banner'
        />
     
     
      </div>
      </div>
        
      
    
  )
}
