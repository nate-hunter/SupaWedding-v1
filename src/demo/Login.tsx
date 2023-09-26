import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { useState } from 'react';
import { supaClient } from '../supa-client';
import { Dialog } from './Dialog';

export const Login = () => {
  const [showModal, setShowModal] = useState(false);
  const [authMode, setAuthMode] = useState<'sign_in' | 'sign_up'>('sign_in');

  return (
    <>
      <div>
        <button
          onClick={() => {
            setShowModal(true);
            setAuthMode('sign_in');
          }}
        >
          Login
        </button>{' '}
        <button
          onClick={() => {
            setShowModal(true);
            setAuthMode('sign_up');
          }}
        >
          Sign Up
        </button>
      </div>
      <Dialog
        open={showModal}
        dialogStateChange={(open) => setShowModal(open)}
        contents={
          <>
            {
              <Auth
                supabaseClient={supaClient}
                view={authMode}
                appearance={{
                  theme: ThemeSupa,
                  className: {
                    container: 'login-form-container',
                    label: 'login-form-label',
                    button: 'login-form-button',
                    input: 'login-form-input',
                  },
                }}
              />
            }
          </>
        }
      />
    </>
  );
};
