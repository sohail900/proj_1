import { Route, Routes } from 'react-router-dom'
import Footer from './layout/footer'
import Navbar from './layout/navbar'
import Home from './page/Home'
import Contact from './page/Contact'
import Signin from './page/Signin'
function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />}>
                    <Route path='/signin' element={<Signin />} />
                </Route>
                <Route path='/contact' element={<Contact />} />
            </Routes>
            <Footer />
        </>
    )
}

export default App
