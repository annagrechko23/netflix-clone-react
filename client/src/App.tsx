
import { Outlet } from 'react-router-dom';
import WatchPage from './pages/WatchPage';
import useAuth from './hooks/useAuth';
import { useEffect } from 'react';

function App() {
  const { fetchUser } = useAuth();
  useEffect(() => {
    fetchUser();
  }, [])
  return (
    <div>
      <Outlet />

    </div>
  )
}

export default App
