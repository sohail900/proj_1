import Button from './Button'
import FAQItem from './FAQItem'

const faqData = [
    {
        question: 'What is Sprink AutoPilot and how does it work?',
        answer: 'Sprink AutoPilot automatically identifies walls in a drawing, even if the lines are in different layers. Sprinklers are strategically placed to ensure optimal coverage.',
    },
    {
        question: 'How can Sprink AutoPilot improve efficiency?',
        answer: 'Sprink AutoPilot automatically identifies walls in a drawing, even if the lines are in different layers. Sprinklers are strategically placed to ensure optimal coverage.',
    },
    {
        question:
            'Is Sprink AutoPilot easy to integrate with existing systems?',
        answer: 'Sprink AutoPilot automatically identifies walls in a drawing, even if the lines are in different layers. Sprinklers are strategically placed to ensure optimal coverage.',
    },
    {
        question: 'What are the key features of Sprink AutoPilot?',
        answer: 'Sprink AutoPilot automatically identifies walls in a drawing, even if the lines are in different layers. Sprinklers are strategically placed to ensure optimal coverage.',
    },
    {
        question: 'Can Sprink AutoPilot be customized for specific needs?',
        answer: 'Sprink AutoPilot automatically identifies walls in a drawing, even if the lines are in different layers. Sprinklers are strategically placed to ensure optimal coverage.',
    },
]

const FAQSection = () => {
    return (
        <>
            <section className='w-[50%] m-auto   p-10 mt-24' id='faq'>
                <h1 className='text-3xl font-semibold mb-8 text-center '>
                    Frequently Asked Questions
                </h1>
                {faqData.map((item, index) => (
                    <FAQItem
                        key={index}
                        question={item.question}
                        answer={item.answer}
                    />
                ))}
            </section>
            <section className='w-max m-auto px-20 py-10 mt-24 text-center shadow-sm bg-white rounded-xl'>
                <h1 className='text-3xl font-semibold mb-3'>
                    Still have questions?
                </h1>
                <p className='text-xl text-gray-500 mb-4'>
                    Contact us for more information
                </p>
                <Button
                    url='/contact'
                    style={{
                        fontSize: '0.9rem',
                    }}
                >
                    Contact Us
                </Button>
            </section>
        </>
    )
}

export default FAQSection
