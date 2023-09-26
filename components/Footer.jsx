import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai'

export default function Footer() {
  return (
    <div className='footer-container'>
      <p>{new Date().getFullYear()} ® SystemTec Loja Online</p>
      <p className='icons'>
        <AiFillInstagram />
        <AiOutlineTwitter />
      </p>
    </div>
  )
}
