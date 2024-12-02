import React, { Suspense } from 'react';
import { Theme, presetGpnDefault } from '@consta/uikit/Theme';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from '../../layouts/main-layout/MainLayout';
import { AppRoute } from '../../../const';
import { Loader } from '@consta/uikit/Loader';
import { Responses404 } from '@consta/uikit/Responses404';

const Homepage = React.lazy(() => import('../../pages/home-page/Home'));
const Service = React.lazy(() => import('../../pages/service-page/Service'));
const Auth = React.lazy(() => import('../../pages/auth-page/Auth'));
const Profile = React.lazy(() => import('../../pages/profile-page/Profile'));
const Services = React.lazy(() => import('../../pages/services-page/ServiceDetail'));

const App = function() {
  return (
    <Theme preset={presetGpnDefault}>
      <BrowserRouter>
        <Suspense fallback={ <div style={{ width:"100vw", display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', }}><Loader size="m" /></div> }>
        <Routes>
          <Route path={AppRoute.main} element={<MainLayout />}>
            <Route index element={<Homepage />}/>
            <Route path={AppRoute.service} element={<Service />}/>
            <Route path={AppRoute.auth} element={<Auth />}/>
            <Route path={AppRoute.profile} element={<Profile />}/>
            <Route path='/service/:id' element={<Services />}/>
          </Route>
          <Route path='*' element={ <div style={{width:"100vw", display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}> <Responses404 /></div> }/></Routes>
        </Suspense>
      </BrowserRouter>
    </Theme>
  );
}
export default App
