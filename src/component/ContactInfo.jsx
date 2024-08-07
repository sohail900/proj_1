import { Phone } from 'lucide-react'
import Button from './Button'
const ContactInfo = () => {
    return (
        <>
            <section className='w-full px-10 sm:px-16 mt-24 grid place-items-center'>
                <div className='box_shadow w-max m-auto  px-12 sm:px-20  py-10 flex flex-col items-center  rounded-xl'>
                    <h1 className='text-3xl font-semibold mb-3'>
                        Still have questions?
                    </h1>
                    <p className='text-lg text-light_color mb-4'>
                        Contact us for more information
                    </p>
                    <Button
                        url='/contact'
                        style={{
                            fontSize: '0.9rem',
                            width: '13rem',
                            display: 'flex',
                            alignItem: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        Contact Us
                        <span className='icon ml-2'>
                            <Phone size={17} fill='white' className='mt-1' />
                        </span>
                    </Button>
                </div>
            </section>
        </>
    )
}

export default ContactInfo
