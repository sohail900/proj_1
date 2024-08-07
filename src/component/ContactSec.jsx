import Button from './Button'

const ContactSec = () => {
    return (
        <>
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
        </>
    )
}

export default ContactSec
