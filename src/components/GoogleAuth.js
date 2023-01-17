// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useSelector, useDispatch } from 'react-redux';
import { signIn, signOut } from '../features/auth/authSlice';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyD57y6b5RTE9qMS0OvszayTahGqhOBPzgk',
  authDomain: 'streamy-32bf8.firebaseapp.com',
  projectId: 'streamy-32bf8',
  storageBucket: 'streamy-32bf8.appspot.com',
  messagingSenderId: '178299201761',
  appId: '1:178299201761:web:da75baa0f52560bed9afa0',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const GoogleAuth = () => {
  const isSignedIn = useSelector((state) => state.auth.isSignedIn);
  const dispatch = useDispatch();
  const [user] = useAuthState(auth);

  useEffect(() => {
    if (user) {
      dispatch(signIn(user.uid));
    }
  }, [user, dispatch]);

  const SignIn = () => {
    const signInWithGoogle = () => {
      const provider = new GoogleAuthProvider();
      signInWithPopup(auth, provider)
        .then((result) => {
          dispatch(signIn(result.user.uid));
        })
        .catch((error) => {
          console.log(error);
        });
    };
    return (
      <button
        className='ui blue basic button'
        onClick={signInWithGoogle}
      >
        <i className='google icon' />
        Sign in with Google
      </button>
    );
  };

  const SignOut = () => {
    const signOutClick = () => {
      auth.signOut();
      dispatch(signOut());
    };

    return (
      auth.currentUser && (
        <button
          className='google red button ui'
          onClick={signOutClick}
        >
          Sign Out
        </button>
      )
    );
  };

  return <div>{isSignedIn ? <SignOut /> : <SignIn />}</div>;
};

export default GoogleAuth;
