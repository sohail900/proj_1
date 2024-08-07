import { useState } from 'react'
import { Play } from 'lucide-react'
import Button from './Button'
import AboutSec from './AboutSec'
import sprinkle from '../assets/gif/placesprinklers.gif'
import pipe from '../assets/gif/connectpipe.gif'
import hy from '../assets/gif/hydrocalc.gif'
import stock from '../assets/gif/stocklist.gif'
import AboutSecVid from './AboutSecVid'
const aboutContent = {
    title1: 'Sprinkler Placement',
    description1:
        'Sprink AutoPilot Automatically identifies walls in a drawing, even if the lines are in different layers. Sprinkler are strategically placed.',
    title2: 'Pipe Placement',
    description2:
        'The most efficient routes for piping are automatically calculated and drawn, optimizing the layout to reduce material costs and installation time.',
    title3: 'Hydraulic Calc',
    description3:
        'SInstantly calculate pressure and flow requirements of the system and determines the best pipe sizes',
    title4: 'Stocklisting',
    description4: 'Generate an instant stocklist',
}
const About = () => {
    const [openVideo, setOpenVideo] = useState(false)

    return (
        <>
            <section
                className='w-full px-16 m-auto  grid gap-10 mt-20'
                id='detail'
            >
                <div className='w-full h-full flex flex-col gap-4 lg:flex-row lg:h-[380px]'>
                    <img
                        src={sprinkle}
                        alt='sprinkle'
                        height={250}
                        className='flex-1 rounded-lg w-full lg:w-[350px]'
                        loading='lazy'
                    />
                    <AboutSec
                        title={aboutContent.title1}
                        description={aboutContent.description1}
                    />
                </div>
                <div className='w-full h-full flex flex-col gap-4 lg:flex-row lg:h-[380px]'>
                    <AboutSec
                        title={aboutContent.title2}
                        description={aboutContent.description2}
                    />
                    <img
                        src={pipe}
                        alt='pipe'
                        height={250}
                        className='flex-1  rounded-lg lg:w-[350px]'
                        loading='lazy'
                    />
                </div>
                <div className='w-full h-auto flex flex-col gap-4 lg:flex-row lg:h-[380px]'>
                    <img
                        src={hy}
                        alt='hydraulic'
                        height={250}
                        className='flex-1  rounded-lg lg:w-[350px]'
                        loading='lazy'
                    />
                    <AboutSec
                        title={aboutContent.title3}
                        description={aboutContent.description3}
                        button={
                            <Button
                                style={{
                                    paddingLeft: '2rem',
                                    paddingRight: '2rem',
                                    display: 'flex',
                                    gap: '0.8rem',
                                }}
                                setOpenVideo={setOpenVideo}
                            >
                                <Play
                                    fill='#ca3cfb'
                                    size={16}
                                    className='mt-1'
                                />{' '}
                                Watch Demo
                            </Button>
                        }
                    />
                    {/* if true then show video section else hide it  */}
                    {openVideo && <AboutSecVid setOpenVideo={setOpenVideo} />}
                </div>
                <div className='w-full h-auto  overflow-hidden flex flex-col gap-4 lg:flex-row lg:h-[380px]'>
                    <AboutSec
                        title={aboutContent.title4}
                        description={aboutContent.description4}
                        button={
                            <Button
                                style={{
                                    paddingLeft: '2rem',
                                    paddingRight: '2rem',
                                    display: 'flex',
                                    gap: '0.8rem',
                                }}
                            >
                                <Play
                                    fill='#ca3cfb'
                                    size={16}
                                    className='mt-1'
                                />{' '}
                                Watch Demo
                            </Button>
                        }
                    />
                    <img
                        src={stock}
                        alt='stocklisting'
                        height={250}
                        className='flex-1  rounded-lg lg:w-[350px]'
                        loading='lazy'
                    />
                </div>
            </section>
        </>
    )
}

export default About
