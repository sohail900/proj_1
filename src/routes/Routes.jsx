import { Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Home from '../page/Home'
import Contact from '../page/Contact'
import Signin from '../page/Signin'
const RoutesWithAnimate = () => {
    const location = useLocation()
    return (
        <>
            <AnimatePresence mode='wait'>
                <Routes location={location} key={location.pathname}>
                    <Route path='/' element={<Home />}>
                        <Route path='/signin' element={<Signin />} />
                    </Route>
                    <Route path='/contact' element={<Contact />} />
                </Routes>
            </AnimatePresence>
        </>
    )
}

export default RoutesWithAnimate
