import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './components/Home'
import Signup from './components/Signup'
import Listings from './components/Listings'
import Profile from './components/Profile'
import Bookings from './components/Bookings'
import Houses from './components/Houses'
import House from './components/House'
import HouseEdit from './components/HouseEdit'
import Login from './components/Login'

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/Signup' element={<Signup />} />
                <Route path='/Listings' element={<Listings />} />
                <Route path='/Profile' element={<Profile />} />
                <Route path='/Bookings' element={<Bookings />} />
                <Route path='/houses' element={<Houses />} />
                <Route path='/houses/:id' element={<House />} />
                <Route path='/houses/:id/edit' element={<HouseEdit />} />
                <Route path='/login' element={<Login />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router