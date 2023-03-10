import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchStreams } from '../../features/streams/streamSlice';

const StreamList = () => {
  const streamsList = useSelector((state) => Object.values(state.streams));
  const currentUserId = useSelector((state) => state.auth.userId);
  const isSignedIn = useSelector((state) => state.auth.isSignedIn);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchStreams());
  }, [dispatch]);

  const renderList = () => {
    return streamsList.map((stream) => {
      return (
        <div
          className='item'
          key={stream.id}
        >
          {renderControls(stream)}
          <i className='large middle aligned camera icon' />
          <div className='content'>
            <Link
              to={`streams/${stream.id}`}
              className='header'
            >
              {stream.title}
            </Link>
            <div className='description'>{stream.description}</div>
          </div>
        </div>
      );
    });
  };

  const renderControls = (stream) => {
    if (!currentUserId) {
      return;
    }
    if (stream.userId === currentUserId) {
      return (
        <div className='right floated content'>
          <Link
            to={`streams/edit/${stream.id}`}
            className='ui button primary'
          >
            EDIT
          </Link>
          <Link
            to={`streams/delete/${stream.id}`}
            className='ui button negative'
          >
            DELETE
          </Link>
        </div>
      );
    }
  };

  const renderCreateButton = () => {
    if (isSignedIn) {
      return (
        <div style={{ textAlign: 'right' }}>
          <Link
            to={'streams/new'}
            className='ui button primary'
          >
            Create Stream
          </Link>
        </div>
      );
    }
  };

  return (
    <div>
      <h2>Streams</h2>
      <div className='ui celled list'>{renderList()}</div>
      {renderCreateButton()}
    </div>
  );
};

export default StreamList;
