import Hero from '../component/Hero'
import About from '../component/About'
import FAQSection from '../component/FAQSec'
import { Outlet } from 'react-router-dom'
const Home = () => {
    return (
        <>
            <Hero />
            <About />
            <FAQSection />
            <Outlet />
        </>
    )
}

export default Home
