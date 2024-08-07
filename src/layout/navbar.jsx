import { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from '../component/Button'
import { AlignJustify, X } from 'lucide-react'

const Navbar = () => {
    const [showNav, setShowNav] = useState(false)
    return (
        <>
            <section className='w-full px-16 py-[1.2rem] flex justify-between items-center'>
                <Link to='/' className='text-center text-2xl font-semibold'>
                    Sprink{' '}
                    <span className='font-normal text-[0.8rem] block -my-[0.2rem]'>
                        Autopilot
                    </span>
                </Link>
                <ul
                    className='flex flex-col items-center absolute right-5 bg-white top-7 z-10 px-16 py-8 rounded-lg shadow-md gap-10 font-xl lg:flex-row lg:relative transition-all lg:bg-transparent lg:shadow-none lg:top-0 lg:px-0 lg:py-0'
                    style={showNav ? { top: ' 1.75rem' } : { top: '-100%' }}
                >
                    <li>
                        <a href='#detail'>Technology</a>
                    </li>
                    <li>
                        <a href='#detail'>Privacy</a>
                    </li>
                    <li>
                        <a href='#detail'>About Us</a>
                    </li>
                    <li>
                        <a href='#detail'>Pricing</a>
                    </li>
                    <Button
                        url='./signin'
                        style={{
                            fontSize: '0.9rem',
                            backgroundColor: '#ca3cfb',
                            color: '#fff',
                        }}
                    >
                        Sign In
                    </Button>
                    <button
                        className='block lg:hidden absolute mb-6 right-1 top-1'
                        onClick={() => setShowNav(!showNav)}
                    >
                        <X />
                    </button>
                </ul>
                <button
                    className='block lg:hidden'
                    onClick={() => setShowNav(!showNav)}
                >
                    <AlignJustify />
                </button>
            </section>
        </>
    )
}

export default Navbar
