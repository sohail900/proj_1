import { motion } from 'framer-motion'
import { Phone, Mail } from 'lucide-react'
import ContactSec from '../component/ContactSec'
const varients = {
    initial: { x: 180, scale: 0.9 },
    animate: { x: 0, scale: 1 },
    exit: { x: 180, scale: 0.9 },
}
const Contact = () => {
    return (
        <>
            <section className='w-[80%] m-auto mt-20 flex flex-col center  lg:flex-row lg:justify-between'>
                <div className='flex flex-col gap-4 w-full mb-4 lg:w-[50%] lg:mb-0'>
                    <motion.div
                        variants={varients}
                        initial='initial'
                        animate='animate'
                        exit='exit'
                        transition={{
                            duration: 0.5,
                            type: 'tween',
                            exit: { duration: 0, type: 'tween' }, // Set exit duration here
                        }}
                    >
                        <h1 className='text-2xl md:text-4xl font-semibold'>
                            Contact Us
                        </h1>
                        <p className='w-[85%] text-lg md:text-xl text-gray-500 mb-6 mt-3'>
                            Need help with Sprink AutoPilot? Contact us below,
                            and we’ll get back to you within 24 hours.
                        </p>
                    </motion.div>
                    <div>
                        <p className='flex mb-2 gap-3 text-xl font-semibold'>
                            <Mail fill='#000' color='#fff' /> info@example.com
                        </p>
                        <p className='flex gap-3 text-xl font-semibold'>
                            <Phone fill='#000' color='#fff' /> +123 456 7890
                        </p>
                    </div>
                </div>
                <div className='w-full lg:flex-1'>
                    <ContactSec />
                </div>
            </section>
        </>
    )
}

export default Contact
