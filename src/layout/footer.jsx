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
                    <div className='flex gap-7 cursor-pointer '>
                        <Facebook size={26} className='social_icon' />
                        <Instagram size={26} className='social_icon' />
                        <Linkedin size={26} className='social_icon' />
                        <Youtube size={27} className='social_icon' />
                    </div>
                </div>
                <hr className='opacity-50'></hr>
                <div className='flex place-items-center justify-center py-2 gap-4'>
                    <p className='footer-content'>
                        A Project By{' '}
                        <Link
                            to='https://elabdtech.com/'
                            target='__blank'
                            className='underline'
                        >
                            ElabdTech
                        </Link>
                    </p>
                    <Link to='#'>Privacy policy</Link>
                    <Link to='#'>Terms & conditions</Link>
                </div>
            </footer>
        </>
    )
}

export default Footer
