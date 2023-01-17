import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import pick from 'lodash/pick';
import { fetchStream, editStream } from '../../features/streams/streamSlice';
import StreamForm from './StreamForm';

const StreamEdit = () => {
  const { id } = useParams();
  const stream = useSelector((state) => state.streams[id]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchStream(id));
  }, [id, dispatch]);

  const onSubmitClick = (formValues) => {
    dispatch(editStream({ id, ...formValues })).then(({ error }) => {
      if (error) {
        console.log(`${error.message}: Cannot connect to the server`);
        return;
      }
      return navigate('/');
    });
  };

  return (
    <div>
      <h1>Edit the Stream</h1>
      <StreamForm
        initialValues={pick(stream, 'title', 'description')}
        onSubmitClick={onSubmitClick}
      />
    </div>
  );
};

export default StreamEdit;
