// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';

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
  const [user] = useAuthState(auth);
  console.log(this.props);

  return <div>{user ? <SignOut /> : <SignIn />}</div>;
};

const SignIn = () => {
  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const payload = {
          isSignedIn: true,
          user: result.user,
        };
        this.props.signIn(payload);
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
    const payload = {
      isSignedIn: false,
      user: null,
    };
    this.props.signOut(payload);
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

const mapStateToProps = (state) => {
  console.log(state);
  return state.auth;
};

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
