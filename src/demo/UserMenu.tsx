import { useContext } from 'react';
import { supaClient } from '../supa-client';
import { UserContext } from './Layout';

export const UserMenu = () => {
  const { profile } = useContext(UserContext);
  console.log({ profile });
  return (
    <>
      <div>
        <h2>Welcome {profile?.username || 'no username'}.</h2>
        <button onClick={() => supaClient.auth.signOut()} className="user-menu-logout-button">
          Logout
        </button>
      </div>
    </>
  );
};
