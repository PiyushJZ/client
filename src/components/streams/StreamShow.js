import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import flv from 'flv.js';
import { fetchStream } from '../../features/streams/streamSlice';

const StreamShow = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const stream = useSelector((state) => state.streams[id]);
  const videoRef = useRef();

  useEffect(() => {
    const flvPlayer = flv.createPlayer({
      type: 'flv',
      url: `http://localhost:8000/live/${id}.flv`,
    });
    dispatch(fetchStream(id)).then(({ error }) => {
      if (!error) {
        flvPlayer.attachMediaElement(videoRef.current);
        flvPlayer.load();
      }
    });

    return () => {
      flvPlayer.destroy();
    };
  }, [id, dispatch]);

  const renderStream = () => {
    if (!stream) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <video
          ref={videoRef}
          style={{ width: '100%' }}
          controls
        />
        <h1>{stream.title}</h1>
        <h5>{stream.description}</h5>
      </div>
    );
  };

  return <div>{renderStream()}</div>;
};

export default StreamShow;
