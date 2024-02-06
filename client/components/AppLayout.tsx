import { Outlet } from 'react-router-dom'

import Nav from './Nav.tsx'

export default function AppLayout() {
  return (
    <div className="app">
      <Nav />
      <main>
        <Outlet />
      </main>
    </div>
  )
}
