import { motion } from 'framer-motion'
import { Phone, Mail } from 'lucide-react'
import Button from '../component/Button'
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
                        <h1 className='text-3xl font-semibold'>Contact Us</h1>
                        <p className='text-xl text-gray-500 mb-6'>
                            We are here to assist you.<br></br> Feel free to
                            reach out to us via email or phone.
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
                    <form>
                        <div className='flex flex-col sm:flex-row gap-4 mb-4'>
                            <input
                                type='text'
                                name='firstName'
                                placeholder='First Name'
                                className='flex-1 border-b-2 bg-transparent py-3 px-4 border-gray-400 focus:outline-none focus:border-blue-500'
                            />
                            <input
                                type='text'
                                name='lastName'
                                placeholder='Last Name'
                                className='flex-1 border-b-2 bg-transparent py-3 px-4 border-gray-400 focus:outline-none focus:border-blue-500'
                            />
                        </div>
                        <div className='flex flex-col sm:flex-row gap-4 mb-4'>
                            <input
                                type='email'
                                name='email'
                                placeholder='Email'
                                className='w-full border-b-2 bg-transparent py-3 px-4 border-gray-400 focus:outline-none focus:border-blue-500'
                            />

                            <input
                                type='tel'
                                name='phone'
                                placeholder='Phone'
                                className='w-full border-b-2 bg-transparent py-3 px-4 border-gray-400 focus:outline-none focus:border-blue-500'
                            />
                        </div>
                        <div className='mb-4'>
                            <textarea
                                name='message'
                                placeholder='Message'
                                className='w-full border-b-2 bg-transparent py-3 px-4 border-gray-400 focus:outline-none focus:border-blue-500'
                                rows='4'
                            ></textarea>
                        </div>
                        <Button
                            style={{
                                float: 'right',
                                background: '#ca3cfb',
                                color: '#fff',
                            }}
                        >
                            Sent
                        </Button>
                    </form>
                </div>
            </section>
        </>
    )
}

export default Contact
