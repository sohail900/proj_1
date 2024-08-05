import Hero from '../component/Hero'
import Details from '../component/Details'
import FAQSection from '../component/FAQSec'
import { Outlet } from 'react-router-dom'
const Home = () => {
    return (
        <>
            <Hero />
            <Details />
            <FAQSection />
            <Outlet />
        </>
    )
}

export default Home
