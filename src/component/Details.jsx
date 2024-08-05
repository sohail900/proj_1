import asset1 from '../assets/asset1.png'
import Button from './Button'
import DetailSec from './DetailSec'
const Details = () => {
    return (
        <>
            <section className='w-[80%] m-auto  grid gap-10 mt-20' id='detail'>
                <div className='w-full flex gap-4'>
                    <img
                        src={asset1}
                        height={250}
                        width={350}
                        className='flex-1  rounded-lg'
                    />
                    <DetailSec
                        title='Sprinkler Placement'
                        description='Sprink AutoPilot Automatically identifies walls in a drawing, even if the lines are in different layers. Sprinkler are strategically placed.'
                    />
                </div>
                <div className='w-full flex gap-4'>
                    <DetailSec
                        title='Pipe Placement'
                        description='Sprink AutoPilot Automatically identifies walls in a drawing, even if the lines are in different layers. Sprinkler are strategically placed.'
                    />
                    <img
                        src={asset1}
                        height={250}
                        width={350}
                        className='flex-1  rounded-lg'
                    />
                </div>
                <div className='w-full flex gap-4'>
                    <img
                        src={asset1}
                        height={250}
                        width={350}
                        className='flex-1  rounded-lg'
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
