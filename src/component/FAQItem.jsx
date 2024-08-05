import { useState } from 'react'
import PropTypes from 'prop-types'
import { ChevronDown, ChevronUp } from 'lucide-react'

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleOpen = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className=' border-b border-gray-200 py-6 '>
            <div
                className='flex justify-between items-center cursor-pointer'
                onClick={toggleOpen}
            >
                <h2 className='text-xl '>{question}</h2>
                {isOpen ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
            </div>
            {isOpen && <p className='mt-4 text-xl  text-gray-600'>{answer}</p>}
        </div>
    )
}

FAQItem.propTypes = {
    question: PropTypes.string.isRequired,
    answer: PropTypes.string.isRequired,
}
FAQItem.PropTypes = {
    question: PropTypes.string.isRequired,
    answer: PropTypes.string.isRequired,
}
export default FAQItem
