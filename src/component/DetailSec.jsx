import PropTypes from 'prop-types'
const DetailSec = ({ title, description, button }) => {
    return (
        <div className='w-full md:w-[30%] px-6 py-4 bg-white shadow-lg rounded-xl'>
            <h1 className='text-2xl font-semibold mb-4'>{title}</h1>
            <p className='w-full text-xl text-gray-600 sm:w-[70%] mb-3'>
                {description}
            </p>
            {button && button}
        </div>
    )
}

DetailSec.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    button: PropTypes.element,
}

export default DetailSec
