import { Navigate, Route, Routes as RoutePage } from 'react-router-dom'
import Access from '@/pages/Access/Access'
import RegisterOrLogin from '@/pages/RegisterOrLogin/RegisterOrLogin'
import Login from '@/pages/Login/Login'
import Home from '@/pages/Home/Home'
import About from '@/pages/About/About'

function Routes() {
  return (
    <RoutePage>
      <Route path="/" element={<Access />} />
      <Route path="/acesso" element={<RegisterOrLogin />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<Navigate to="/" />} />
    </RoutePage>
  )
}

export default Routes
