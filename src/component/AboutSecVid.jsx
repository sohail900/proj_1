import { CircleX } from 'lucide-react'
import PropTypes from 'prop-types'

const AboutSecVid = ({ setOpenVideo }) => {
    return (
        <>
            <section
                className='fixed top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.7)] grid place-items-center z-40'
                onClick={() => setOpenVideo(false)}
            >
                <iframe
                    onClick={(e) => e.stopPropagation()}
                    src='https://www.youtube-nocookie.com/embed/jx2dDV2eWBM?si=d01vvjVRHQYT4W_Y'
                    title='YouTube video player'
                    frameBorder='0'
                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                    referrerPolicy='strict-origin-when-cross-origin'
                    allowfullscreen
                    className='rounded-2xl w-[85%] h-[70%] md:w-[70%]'
                ></iframe>
                <CircleX
                    size={30}
                    className='cursor-pointer absolute top-10 right-10 '
                    color='#fff'
                    onClick={() => setOpenVideo(false)}
                />
            </section>
        </>
    )
}

AboutSecVid.propTypes = {
    setOpenVideo: PropTypes.string.isRequired,
}

export default AboutSecVid
