import { Route, createRoutesFromElements } from 'react-router-dom'

import AppLayout from './components/AppLayout.tsx'
import Collection from './components/Collection.tsx'
import LoginPage from './components/LoginPage.tsx'
import App from './components/App.tsx'
import SingleDuck from './components/SingleDuck.tsx'
import Ducks from './components/Ducks.tsx'

export const routes = createRoutesFromElements(
  <>
    <Route path="/" element={<AppLayout />}>
      <Route index element={<App />} />
      <Route path="/ducks/:id" element={<SingleDuck />} />
      <Route path="/ducks" element={<Ducks />} />
    </Route>
    <Route path="/login" element={<LoginPage />} />
  </>
)
