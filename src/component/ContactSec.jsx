import Button from './Button'

const ContactSec = () => {
    return (
        <>
            <form method='post'>
                <div className='flex flex-col sm:flex-row gap-4 mb-4'>
                    <input
                        required
                        type='text'
                        name='firstName'
                        placeholder='First Name'
                        className='flex-1 border-b-2 bg-transparent py-3 px-4 border-gray-400 focus:outline-none focus:border-blue-500'
                    />
                    <input
                        required
                        type='text'
                        name='lastName'
                        placeholder='Last Name'
                        className='flex-1 border-b-2 bg-transparent py-3 px-4 border-gray-400 focus:outline-none focus:border-blue-500'
                    />
                </div>
                <div className='flex flex-col sm:flex-row gap-4 mb-4'>
                    <input
                        required
                        type='email'
                        name='email'
                        placeholder='Email'
                        className='w-full border-b-2 bg-transparent py-3 px-4 border-gray-400 focus:outline-none focus:border-blue-500'
                    />

                    <input
                        required
                        type='tel'
                        name='phone'
                        placeholder='Phone'
                        className='w-full border-b-2 bg-transparent py-3 px-4 border-gray-400 focus:outline-none focus:border-blue-500'
                    />
                </div>
                <div className='mb-4'>
                    <textarea
                        required
                        name='message'
                        placeholder='Message'
                        className='w-full border-b-2 bg-transparent py-3 px-4 border-gray-400 focus:outline-none focus:border-blue-500'
                        rows='4'
                    ></textarea>
                </div>
                <Button hover={'animate'} style={{ float: 'right' }}>
                    Sent
                </Button>
            </form>
        </>
    )
}

export default ContactSec
