import { useState } from 'react'
import { Play } from 'lucide-react'
import Button from './Button'
import AboutSec from './AboutSec'
import sprinkle from '../assets/sprinkle.png'
import pipe from '../assets/pipe.png'
import hy from '../assets/hy.png'
import AboutSecVid from './AboutSecVid'
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
                    />
                    <AboutSec
                        title='Sprinkler Placement'
                        description='Sprink AutoPilot Automatically identifies walls in a drawing, even if the lines are in different layers. Sprinkler are strategically placed.'
                    />
                </div>
                <div className='w-full h-full flex flex-col gap-4 lg:flex-row lg:h-[380px]'>
                    <AboutSec
                        title='Pipe Placement'
                        description='The most efficient routes for piping are automatically calculated and drawn, optimizing the layout to reduce material costs and installation time.'
                    />
                    <img
                        src={pipe}
                        alt='pipe'
                        height={250}
                        className='flex-1  rounded-lg lg:w-[350px]'
                    />
                </div>
                <div className='w-full h-auto flex flex-col gap-4 lg:flex-row lg:h-[380px]'>
                    <img
                        src={hy}
                        alt='hydraulic'
                        height={250}
                        className='flex-1  rounded-lg lg:w-[350px]'
                    />
                    <AboutSec
                        title='Hydraulic Calc'
                        description='SInstantly calculate pressure and flow requirements of the system and determines the best pipe sizes'
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
                        title='Stocklisting'
                        description='Generate an instant stocklist'
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
                        src={hy}
                        alt='stocklisting'
                        height={250}
                        className='flex-1  rounded-lg lg:w-[350px]'
                    />
                </div>
            </section>
        </>
    )
}

export default About
