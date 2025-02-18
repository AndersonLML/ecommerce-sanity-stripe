/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import { urlFor } from '@/lib/client'

export default function HeroBanner({ heroBanner }) {
  return (
    <Link href={`/product/${heroBanner.product}`}>
    <div className='hero-banner-container'>
      <div>
        {/* TODO: change to nextjs Image component */}
        <img
          src={urlFor(heroBanner.image)}
          alt='headphones'
          className='hero-banner-image'
        />

        <div>
          {/* NOTE: Since the slug is the same as product name, we can navigate to /product/heroBanner.product which is the name of the product used on the banner */}
          
          <div className='desc'>
            <h5>SystemTec Prod.</h5>
            <p>{heroBanner.desc}</p>
          </div>
        </div>
      </div>
    </div>
    </Link>
  )
}
