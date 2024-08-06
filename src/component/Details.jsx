import asset1 from '../assets/asset1.png'
import Button from './Button'
import DetailSec from './DetailSec'
const Details = () => {
    return (
        <>
            <section
                className='w-[90%] lg:w-[80%] m-auto  grid gap-10 mt-20'
                id='detail'
            >
                <div className='w-full flex flex-col gap-4 md:flex-row'>
                    <img
                        src={asset1}
                        height={250}
                        className='flex-1 rounded-lg w-full md:w-[350px]'
                    />
                    <DetailSec
                        title='Sprinkler Placement'
                        description='Sprink AutoPilot Automatically identifies walls in a drawing, even if the lines are in different layers. Sprinkler are strategically placed.'
                    />
                </div>
                <div className='w-full flex flex-col gap-4 md:flex-row'>
                    <DetailSec
                        title='Pipe Placement'
                        description='Sprink AutoPilot Automatically identifies walls in a drawing, even if the lines are in different layers. Sprinkler are strategically placed.'
                    />
                    <img
                        src={asset1}
                        height={250}
                        className='flex-1  rounded-lg md:w-[350px]'
                    />
                </div>
                <div className='w-full flex flex-col gap-4 md:flex-row'>
                    <img
                        src={asset1}
                        height={250}
                        className='flex-1  rounded-lg md:w-[350px]'
                    />
                    <DetailSec
                        title='Hydraulic Calc'
                        description='Sprink AutoPilot Automatically identifies walls in a drawing, even if the lines are in different layers. Sprinkler are strategically placed.'
                        button={
                            <Button style={{ fontSize: '0.7rem' }}>
                                Watch Demo
                            </Button>
                        }
                    />
                </div>
            </section>
        </>
    )
}

export default Details
