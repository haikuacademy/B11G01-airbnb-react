import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './components/Home'
import Signup from './components/Signup'
import Listings from './components/Listings'
import Profile from './components/Profile'
import Bookings from './components/Bookings'

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/Signup' element={<Signup />} />
                <Route path='/Signup' element={<Signup />} />
                <Route path='/Listings' element={<Listings />} />
                <Route path='/Profile' element={<Profile />} />
                <Route path='/Bookings' element={<Bookings />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router