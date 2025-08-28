import { Routes, Route } from 'react-router'
import './App.css'
import Home from '@/Pages/Home/Home'
import Music from '@/Pages/Music/Music'
import Adapt from '@/Pages/Adapt/Adapt'
import Recipes from '@/Pages/Recipes/Recipes'
import { ROUTES } from './routes'
import PrivacyPolicy from './Pages/PrivacyPolicy/PrivacyPolicy'

export default function App() {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path={ROUTES.music} element={<Music />} />
        <Route path={ROUTES.recipes} element={<Recipes />} />
        <Route path={ROUTES.adapt} element={<Adapt />} />
        <Route path={ROUTES.privacy} element={<PrivacyPolicy />} />
      </Routes>
    </>
  )
}
