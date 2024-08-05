import { Link } from 'react-router-dom'
import Button from '../component/Button'

const Navbar = () => {
    return (
        <>
            <section className='w-full px-16 py-[1.2rem] flex justify-between items-center'>
                <Link to='/' className='text-center text-2xl font-semibold'>
                    Sprink{' '}
                    <span className='font-normal text-[0.8rem] block -my-[0.2rem]'>
                        Autopilot
                    </span>
                </Link>
                <ul className='flex items-center gap-10 font-xl'>
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
                </ul>
            </section>
        </>
    )
}

export default Navbar
