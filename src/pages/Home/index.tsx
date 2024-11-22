import { Outlet } from 'react-router-dom'

import BarraLateral from '../../containers/BarraLateral'
export default function Home() {
  return (
    <>
      <div>
        <BarraLateral />
      </div>
      <Outlet />
    </>
  )
}
