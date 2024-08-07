import { Link } from 'react-router-dom'
import Button from './Button'
import { Phone } from 'lucide-react'

const Hero = () => {
    return (
        <>
            <section className='w-full h-full flex justify-center items-center flex-col text-center gap-4'>
                <h1 className='w-full px-8 text-4xl font-normal mb-1 mt-10 leading-normal md:w-[60%] sm:text-6xl md:px-0 sm:leading-snug'>
                    The Revolution in Sprinkler Design is Here
                </h1>
                <p className='w-full  px-8 md:px-0 md:w-1/2 text-xl mb-10 text-gray-600'>
                    &quot;Combining machine learning and advanced computer
                    algorithms, Sprinkler AutoPilot is an AutoCAD Plugin that
                    can design efficient sprinkler systems in a fraction of the
                    time&quot;
                </p>
                <Button
                    url='/contact'
                    style={{
                        fontSize: '0.9rem',
                        width: '15rem',
                        display: 'flex',
                        alignItem: 'center',
                        justifyContent: 'center',
                    }}
                >
                    Contact Us{' '}
                    <span className='icon ml-2'>
                        <Phone size={17} fill='white' />
                    </span>
                </Button>
                <Link
                    to='#detail'
                    className='uppercase mt-12 font-bold cursor-pointer text-[0.8rem]'
                >
                    Scroll To Explore
                </Link>
            </section>
        </>
    )
}

export default Hero
