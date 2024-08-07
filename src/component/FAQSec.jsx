import ContactInfo from './ContactInfo'
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
            <section className='w-full md:w-[50%] m-auto   p-10 mt-24' id='faq'>
                <h1 className='text-2xl md:text-3xl font-semibold mb-8 text-center '>
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
            {/* Contact Us Info */}
            <ContactInfo />
        </>
    )
}

export default FAQSection
