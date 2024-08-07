import { Link } from 'react-router-dom'
import { Facebook, Instagram, Linkedin, Youtube } from 'lucide-react'
import Logo from '../assets/logo_white.svg'
const Footer = () => {
    return (
        <>
            <footer className='mt-14 w-full  bg-custom_gradient text-white'>
                <div className='pt-6 mb-6 flex flex-col gap-2 justify-between items-center'>
                    <img
                        src={Logo}
                        alt='logo'
                        className='mb-7 mt-10'
                        width={100}
                    />
                    <div className='flex gap-6 cursor-pointer opacity-70'>
                        <Facebook size={24} />
                        <Instagram size={24} />
                        <Linkedin size={24} />
                        <Youtube size={25} />
                    </div>
                </div>
                <hr className='opacity-50'></hr>
                <div className='flex place-items-center justify-center py-2 gap-4'>
                    <p className='footer-content'>Copyright eLabd Tech</p>
                    <Link to='#'>Privacy policy</Link>
                    <Link to='#'>Terms & conditions</Link>
                </div>
            </footer>
        </>
    )
}

export default Footer
