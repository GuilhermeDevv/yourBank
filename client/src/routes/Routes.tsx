import { Navigate, Route, Routes as RoutePage } from 'react-router-dom'
import Access from '@/pages/Access/Access'
import RegisterOrLogin from '@/pages/RegisterOrLogin/RegisterOrLogin'
import Login from '@/pages/Login/Login'
import Home from '@/pages/Home/Home'

function Routes() {
  return (
    <RoutePage>
      <Route path="/" element={<Access />} />
      <Route path="/acesso" element={<RegisterOrLogin />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="*" element={<Navigate to="/" />} />
    </RoutePage>
  )
}

export default Routes
