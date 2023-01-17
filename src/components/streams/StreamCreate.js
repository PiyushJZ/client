import { createStream } from '../../features/streams/streamSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import StreamForm from './StreamForm';

const StreamCreate = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function onSubmitClick(formValues) {
    dispatch(createStream(formValues)).then(({ error }) => {
      if (error) {
        console.log(`${error.message}: Cannot connect to the server`);
        return;
      }
      return navigate('/');
    });
  }

  return (
    <div>
      <h3>Create a Stream</h3>
      <StreamForm onSubmitClick={onSubmitClick} />
    </div>
  );
};

export default StreamCreate;
