import PropTypes from 'prop-types'
const AboutSec = ({ title, description, button }) => {
    return (
        <div className='w-full lg:w-[30%] px-6 py-4 bg-white shadow-lg rounded-xl'>
            <div className='h-auto lg:h-[70%]'>
                <h1 className='text-2xl font-semibold mb-4'>{title}</h1>
                <p className='w-full text-[1rem] text-light_color mb-6 md:text-xl'>
                    {description}
                </p>
            </div>
            {button && button}
        </div>
    )
}

AboutSec.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    button: PropTypes.element,
}

export default AboutSec
