import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router';
import './App.css';

import Home from '@/Pages/Home/Home';
import Review from '@/Pages/Review/Review';
import PrivacyPolicy from '@/Pages/PrivacyPolicy/PrivacyPolicy';
import About from '@/Pages/About/About';

import { ROUTES } from '@/constants/routes';
import ReviewType from '@/Pages/ReviewType/ReviewType';
import Wrapper from './Components/Wrapper/Wrapper';
import client from './utils/client';

export default function App() {
  const [routes, setRoutes] = useState([]);

  useEffect(function getRouteData() {
    async function fetchRoutes() {
      const data = await client.fetch(
        '*[_type == "reviewType"]{"slug": slug.current, name, sort}'
      );
      setRoutes(
        data.sort((a: { sort: number }, b: { sort: number }) => {
          return a.sort - b.sort;
        })
      );
    }
    fetchRoutes();
  }, []);
  return (
    <Wrapper routes={routes}>
      <Routes>
        <Route index element={<Home />} />
        <Route path={ROUTES.review} element={<Review />} />
        <Route path={ROUTES.type} element={<ReviewType routes={routes} />} />
        <Route path={ROUTES.privacy} element={<PrivacyPolicy />} />
        <Route path={ROUTES.about} element={<About />} />
      </Routes>
    </Wrapper>
  );
}
