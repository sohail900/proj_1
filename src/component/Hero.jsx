import { Link } from 'react-router-dom'
import Button from './Button'
import { Phone } from 'lucide-react'
import HeroSecImg from './HeroSecImg'

const Hero = () => {
    return (
        <>
            <section className='w-full h-full flex justify-center items-center flex-col text-center gap-4'>
                <h1 className='w-full px-10 text-4xl font-normal mb-1 mt-10 leading-normal lg:w-[60%] md:text-6xl md:px-14 lg:px-0 md:leading-snug'>
                    The Revolution in Sprinkler Design is Here
                </h1>
                <p className='w-full text-[1rem]  px-10 md:px-14 lg:px-0 lg:w-1/2 md:text-xl mb-8 text-light_color '>
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
                    className='uppercase mt-10 font-extrabold cursor-pointer text-[0.8rem]'
                >
                    Scroll To Explore
                </Link>
                <HeroSecImg />
            </section>
        </>
    )
}

export default Hero
