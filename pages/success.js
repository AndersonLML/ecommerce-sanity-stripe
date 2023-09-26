import { useState, useEffect } from 'react'
import Link from 'next/link'
import { BsBagCheckFill } from 'react-icons/bs'

import { useStateContext } from '@/context/StateContext'

import { runConfetti } from '@/lib/utils'

export default function Success() {
  const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext()

  useEffect(() => {
    localStorage.clear()
    setCartItems([])
    setTotalPrice(0)
    setTotalQuantities(0)

    // * CONFETTI ANIMATION
    runConfetti()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className='success-wrapper'>
      <div className='success'>
        <p className='icon'>
          <BsBagCheckFill />
        </p>

        <h2>Obrigado pela compra</h2>
        <p className='email-msg'>Verifique sua caixa de entrada de e-mail para obter o recibo.</p>
        <p className='description'>
        Se você tiver alguma dúvida, envie um e-mail
          <a className='email' href='mailto:gtlt1999@gmail.com'>
          gtlt1999@gmail.com
          </a>
        </p>
        <Link href='/'>
          <button type='button' width='300px' className='btn'>
            Continue Comprando
          </button>
        </Link>
      </div>
    </div>
  )
}
