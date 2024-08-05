import { Link } from 'react-router-dom'
import Button from './Button'

const Hero = () => {
    return (
        <>
            <section className='w-full h-full flex justify-center items-center flex-col text-center gap-4'>
                <h1 className='text-6xl font-semibold mb-1 mt-10 leading-snug'>
                    The Revolution in <br></br>Sprinkler Design is Here
                </h1>
                <p className='w-1/2 text-xl mb-10 text-gray-600'>
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
                    }}
                >
                    Contact Us
                </Button>
                <Link to='#detail' className='mt-24 font-bold cursor-pointer'>
                    Scroll To Explore
                </Link>
            </section>
        </>
    )
}

export default Hero
