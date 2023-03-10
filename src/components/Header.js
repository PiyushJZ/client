import { Link } from 'react-router-dom';
import GoogleAuth from './GoogleAuth';

const Header = () => {
  return (
    <div className='ui secondary pointing menu'>
      <Link
        to={'/'}
        className='item'
      >
        Streamy
      </Link>
      <Link
        to={'streams/new'}
        className='item'
      >
        Create
      </Link>
      <div className='right menu'>
        <Link
          to={'/'}
          className='item'
        >
          All Streams
        </Link>
        <GoogleAuth className='item' />
      </div>
    </div>
  );
};

export default Header;
