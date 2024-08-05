import { Phone, Mail } from 'lucide-react'
import Button from '../component/Button'
const Contact = () => {
    return (
        <>
            <section className=' w-[80%] m-auto mt-20 flex justify-between '>
                <div className='flex flex-col gap-4 w-[50%]'>
                    <h1 className='text-2xl font-semibold'>Contact Us</h1>
                    <p className='text-xl text-gray-500 mb-6'>
                        We are here to assist you.<br></br> Feel free to reach
                        out to us via email or phone.
                    </p>
                    <div>
                        <p className='flex mb-2 gap-3 text-xl text-gray-600'>
                            <Mail /> info@example.com
                        </p>
                        <p className='flex gap-3 text-xl text-gray-600'>
                            <Phone /> +123 456 7890
                        </p>
                    </div>
                </div>
                <div className='flex-1'>
                    <form>
                        <div className='flex gap-4 mb-4'>
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
                        <div className='flex gap-4 mb-4 mb-4'>
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
                        <Button>Submit</Button>
                    </form>
                </div>
            </section>
        </>
    )
}

export default Contact
