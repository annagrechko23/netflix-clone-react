import { createRoot } from 'react-dom/client'
import { RouterProvider, Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import { Provider } from "react-redux"
import { store } from "./app/store"
import './index.css'
import App from './App.tsx'
import HomePage from './pages/HomePage.tsx'
import LoginPage from './pages/LoginPage.tsx'
import PlansPage from './pages/PlansPage.tsx'
import BrowsePage from './pages/BrowsePage';
import WatchPage from './pages/WatchPage.tsx'
import PrivateRoutes from './utils/PrivateRoutes.tsx'
import PlansManagePage from './pages/PlansManagePage.tsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} >
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/plans" element={<PrivateRoutes />}>
        <Route path="/plans" element={<PlansPage />} />
        <Route path="/plans/manage" element={<PlansManagePage />} />

      </Route>
      <Route path="/browse" element={<PrivateRoutes />}>
        <Route path="/browse" element={<BrowsePage />} />
        <Route path="/browse/watch/:id" element={<WatchPage />} />
      </Route>
    </Route>)
);
createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
)
