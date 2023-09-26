import { createContext } from 'react';
import { Outlet } from 'react-router-dom';
import { SupashipUserInfo, useSession } from '../hooks/use-session';
import { NavBar } from './NavBar';

export const UserContext = createContext<SupashipUserInfo>({
  session: null,
  profile: null,
});

export const Layout = () => {
  const supashipUserInfo = useSession();

  return (
    <UserContext.Provider value={supashipUserInfo}>
      <NavBar />
      <Outlet />
    </UserContext.Provider>
  );
};
