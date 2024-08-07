import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { CircleX, Eye, EyeOff } from 'lucide-react'
import Button from '../component/Button'
const variants = {
    initial: { x: 0, y: 2000 },
    enter: { x: 0, y: 0 },
    exit: { x: 0, y: 2000 },
}
const Signin = () => {
    const navigate = useNavigate()
    const [showPass, setShowPass] = useState(false)
    const closeModel = () => {
        navigate('/')
    }
    return (
        <>
            <motion.section
                variants={variants}
                initial='initial'
                animate='enter'
                exit='exit'
                transition={{
                    duration: 0.5,
                    type: 'just',
                }}
                className='fixed top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.1)] flex justify-center items-center z-20'
                onClick={() => closeModel()}
            >
                <div
                    className='relative w-[500px] h-auto  bg-white rounded-3xl px-14 py-10'
                    onClick={(e) => e.stopPropagation()}
                >
                    <h1 className='text-2xl font-semibold mb-4'>Sign In</h1>
                    <form className='flex flex-col gap-4' method='post'>
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
                            className='bg-gray-100 rounded-lg py-4 px-7 '
                        />
                        <label
                            htmlFor='password'
                            className='text-xl font-semibold mb-1'
                        >
                            Password
                        </label>
                        <div className='relative'>
                            <input
                                type={`${!showPass ? 'password' : 'text'}`}
                                required
                                id='password'
                                name='password'
                                placeholder='Password'
                                className='bg-gray-100 rounded-lg py-4 px-7 mb-6  w-full'
                            />
                            {showPass ? (
                                <Eye
                                    className='absolute right-3 top-4 cursor-pointer'
                                    color='rgba(0,0,0,0.5)'
                                    onClick={() => setShowPass(false)}
                                />
                            ) : (
                                <EyeOff
                                    className='absolute right-3 top-4 cursor-pointer'
                                    color='rgba(0,0,0,0.5)'
                                    onClick={() => setShowPass(true)}
                                />
                            )}
                        </div>
                    </form>
                    <div className='flex justify-between items-center mb-3'>
                        <div className='flex gap-2'>
                            <input
                                type='checkbox'
                                name='checkbox'
                                id='checkbox'
                                className='p-5 rounded-lg'
                            />
                            <label htmlFor='checkbox' className='font-semibold'>
                                Remember me
                            </label>
                        </div>
                        <Link className='text-red-600 underline text-sm font-semibold'>
                            Forgot Password?
                        </Link>
                    </div>
                    <Button style={{ width: '100%', borderRadius: '10px' }}>
                        Sign In
                    </Button>
                    <p className=' mt-8 text-center'>
                        New to Sprink?{' '}
                        <span className='font-semibold ml-2'>Sign Up Now</span>
                    </p>
                    <div
                        className='absolute top-7 right-6'
                        onClick={() => closeModel()}
                    >
                        <CircleX fill='#000' color='#fff' size={30} />
                    </div>
                </div>
            </motion.section>
        </>
    )
}

export default Signin
