import { Routes, Route, BrowserRouter } from 'react-router-dom'

// import Dashboard from '../pages/Dashboard'
import Login from '../pages/Login'
import SignUp from '../pages/SignUp'
import Landing from '../pages/Landing'
import Landing2 from "../pages/Landing2"
// import Landing2 from '../pages/Landing2'
import Home from '../pages/Home'
import CreatePostPage from '../pages/CreatePostPage'
// import FavPostPage from '../pages/FavPostPage'
import Settings from '../pages/Settings'
import Account from '../pages/Account'
import PrivacyPolicy from '../pages/PrivacyPolicy'
import PrivateWrapper from './PrivateRoutes'
import LandingPage3 from '../pages/LandingPage3'
import FavPostPage from '../pages/FavPostPage'

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Uncommit next line to apply token security */}
        <Route element={<PrivateWrapper />}>
          <Route path='/home' element={<Home />} />
          <Route path='/create-post' element={<CreatePostPage />} />
          {/* <Route path='/fav-post' element={<FavPostPage />} /> */}
          <Route path='/account-details' element={<Account />} />
          <Route path='/setting' element={<Settings />} />
          {/* <Route path='/dashboard' element={<Dashboard />} /> */}
          {/* <Route path='*' element={<Navigate to='/' />} /> */}
        </Route>

        <Route path='/' element={<Landing />} />
        <Route path='/fav' element={<FavPostPage />} />
        <Route path='/l2' element={<Landing2 />} />
        <Route path='/l3' element={<LandingPage3 />} />
        {/* <Route path='/' element={<Landing2 />} /> */}
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/privacy-policy' element={<PrivacyPolicy />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Routers
