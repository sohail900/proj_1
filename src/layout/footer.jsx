import { Facebook, Instagram, Linkedin } from 'lucide-react'
const Footer = () => {
    return (
        <>
            <footer className='mt-14 w-full  bg-main_color text-white'>
                <div className='pt-6 mb-6 flex flex-col gap-2 justify-between items-center'>
                    <h1 className='text-center text-2xl font-semibold '>
                        Sprink{' '}
                        <span className='font-normal text-[0.8rem] block -my-[0.2rem]'>
                            Autopilot
                        </span>
                    </h1>
                    <div className='flex gap-6 '>
                        <Facebook size={25} />
                        <Instagram size={25} />
                        <Linkedin size={25} />
                    </div>
                </div>
                <hr className='opacity-20'></hr>
                <p className='text-center mt-2 text-gray-200'>
                    &copy; 2024 Bull - All rights reserved.
                </p>
            </footer>
        </>
    )
}

export default Footer
