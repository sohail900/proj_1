import { useNavigate } from 'react-router-dom'
import { CircleX } from 'lucide-react'
import Button from '../component/Button'

const Signin = () => {
    const navigate = useNavigate()
    const closeModel = () => {
        navigate('/')
    }
    return (
        <>
            <section
                className='fixed top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.2)] flex justify-center items-center'
                onClick={() => closeModel()}
            >
                <div
                    className='relative w-[500px] h-auto  bg-white rounded-xl px-8 py-6'
                    onClick={(e) => e.stopPropagation()}
                >
                    <h1 className='text-2xl font-semibold mb-4'>Sign In</h1>
                    <form className='flex flex-col gap-4'>
                        <label
                            htmlFor='email'
                            className='text-xl font-semibold mb-1'
                        >
                            Email
                        </label>
                        <input
                            type='email'
                            required
                            id='email'
                            name='email'
                            placeholder='Email'
                            className='bg-gray-400 rounded-xl py-4 px-7 '
                        />
                        <label
                            htmlFor='password'
                            className='text-xl font-semibold mb-1'
                        >
                            Password
                        </label>
                        <input
                            type='password'
                            required
                            id='password'
                            name='password'
                            placeholder='Password'
                            className='bg-gray-400 rounded-xl py-4 px-7 mb-6'
                        />
                    </form>
                    <Button style={{ width: '100%', borderRadius: '10px' }}>
                        Sign In
                    </Button>
                    <p className=' mt-4 text-gray-400 text-center'>
                        New to Sprink?{' '}
                        <span className='font-semibold'>Sign Up Now</span>
                    </p>
                    <div
                        className='absolute top-7 right-6'
                        onClick={() => closeModel()}
                    >
                        <CircleX />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Signin
