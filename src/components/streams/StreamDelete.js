import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { fetchStream, deleteStream } from '../../features/streams/streamSlice';
import Modal from '../Modal';

const StreamDelete = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const stream = useSelector((state) => state.streams[id]);

  useEffect(() => {
    dispatch(fetchStream(id));
  }, [id, dispatch]);

  const modalData = {
    title: 'Delete Stream',
    content: stream
      ? `Are you sure you want to delete this stream with title: ${stream.title}`
      : 'Are you sure you want to delete this stream?',
    actions: (
      <>
        <button
          onClick={() => {
            dispatch(deleteStream(id)).then(() => navigate('/'));
          }}
          className='ui button negative'
        >
          Delete
        </button>
        <Link
          to={'/'}
          className='ui button '
        >
          Cancel
        </Link>
      </>
    ),
    onDismiss: () => navigate('/'),
  };
  return (
    <div>
      <Modal modalData={modalData} />
    </div>
  );
};

export default StreamDelete;
